import { Router } from 'express';
import * as authMiddlewares from '../middleware/authMiddlewares.js';

const router = Router();

router.get(
  '/new_task/:EventName',
  authMiddlewares.checkIfLoggedIn,
  authMiddlewares.checkIfAdmin,
  (err, req, res, next) => {
    if (!err) {
      next();
    }
    res.status(err.status).redirect('/restricted');
  },
  (req, res) => {
    const resp = {
      response: undefined,
      event: req.params.EventName,
      user: res.locals.user,
    };
    res.status(200).render('new_task.ejs', resp);
  },
);

export default router;
