import bcrypt from 'bcrypt';
import * as queries from '../db/usersQueries.js';

export async function hashPassword(req, resp, next) {
  try {
    req.salt = await bcrypt.genSalt(10);
    req.hashed = await bcrypt.hash(req.fields.password, req.salt);
    next();
  } catch (err) {
    next({ status: 500, message: err.message });
  }
}

export async function addNewUser(req, resp, next) {
  try {
    await queries.insertUser(req.fields.name, req.salt, req.hashed);
    next();
  } catch (err) {
    next({ status: 400, message: err.message });
  }
}
