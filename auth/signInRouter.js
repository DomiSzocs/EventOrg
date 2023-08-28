import express from 'express';
import * as signInMiddlewares from '../middleware/signInMiddlewares.js';

const router = express.Router();

router.use(
  '/signin',
  signInMiddlewares.getPassword,
  signInMiddlewares.checkCredentials,
  signInMiddlewares.saveCookie,
  (err, req, resp, next) => {
    if (!err) {
      next();
    }
    resp.status(err.status).render('auth.ejs', { response: err.message, sign: 'in' });
  },
  (req, resp) => {
    resp.status(204).redirect('/');
  },
);

export default router;
