import { Router } from 'express';
import * as authMiddlwares from '../middleware/authMiddlewares.js';

const router = Router();

router.get(
  '/new_event',
  authMiddlwares.checkIfLoggedIn,
  authMiddlwares.checkIfAdmin,
  (err, req, res, next) => {
    res.status(err.status).render('new_event.ejs', { response: err.message, user: res.locals.user });
    next();
  },
  (req, res) => res.status(200).render('new_event.ejs', { response: undefined, user: res.locals.user }),
);

export default router;
