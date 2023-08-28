import express from 'express';
import * as userHandlingMiddlewares from '../middleware/userHandlingMiddlewares.js';
import * as signUpMiddlewares from '../middleware/signUpMiddlewares.js';

const router = express.Router();

router.use(
  '/signup',
  userHandlingMiddlewares.checkIfUsernameExists,
  signUpMiddlewares.hashPassword,
  signUpMiddlewares.addNewUser,
  (err, req, resp, next) => {
    if (!err) {
      next();
    }
    resp.status(err.status).render('auth.ejs', { response: err.message, sign: 'up' });
  },
  (req, resp) => {
    resp.status(200).render('auth.ejs', { response: 'You are signed up successfuly!', sign: 'up' });
  },
);

export default router;
