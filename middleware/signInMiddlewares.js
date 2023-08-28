import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import secret from '../config.js';
import * as queries from '../db/usersQueries.js';

export async function getPassword(req, resp, next) {
  try {
    const [users] = await queries.findUserAndPasswordByName(req.fields.name);
    if (users.length === 0) {
      next({ status: 400, message: 'Username not found!' });
    } else {
      req.salt = users[0].Salt;
      req.password = users[0].Password;
      next();
    }
  } catch (err) {
    next({ status: 500, message: `Selection unsuccessful: ${err.message}` });
  }
}

export async function checkCredentials(req, resp, next) {
  try {
    const result = await bcrypt.compare(req.fields.password, req.password);
    if (!result) {
      next({ status: 400, message: 'Invalid password!' });
    } else {
      next();
    }
  } catch (err) {
    next({ status: 500, message: err.message });
  }
}

export function saveCookie(req, resp, next) {
  try {
    const token = jwt.sign({ name: req.fields.name }, secret);
    resp.cookie('auth', token, { httpOnly: true, sameSite: 'strict' });
    next();
  } catch (err) {
    next({ status: 500, message: err.message });
  }
}
