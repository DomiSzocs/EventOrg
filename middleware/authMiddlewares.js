import jwt from 'jsonwebtoken';
import secret from '../config.js';

export function checkIfLoggedIn(req, res, next) {
  try {
    if (req.cookies.auth !== undefined) {
      const decode = jwt.verify(req.cookies.auth, secret);
      res.locals.user = decode.name;
    }
    next();
  } catch (err) {
    res.clearCookie('auth');
    next({ status: 401, message: err.message });
  }
}

export function checkIfAdmin(req, res, next) {
  if (res.locals.user === 'admin') {
    next();
  } else {
    next({ status: 401, message: 'Admin authorization required!' });
  }
}
