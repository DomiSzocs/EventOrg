import { Router } from 'express';
import * as middlewares from '../middleware/newEventMiddlewares.js';
import * as authMiddlwares from '../middleware/authMiddlewares.js';

const router = Router();

router.post(
  '/add_new_event',
  authMiddlwares.checkIfLoggedIn,
  authMiddlwares.checkIfAdmin,
  middlewares.checkDates,
  middlewares.existingEventName,
  middlewares.addNewEvent,
  (err, req, res, next) => {
    if (!err) {
      next();
    }
    res.status(err.status).render('new_event.ejs', { response: err.message, user: res.locals.user });
  },
  (req, resp) => resp.status(200).redirect('/'),
);

export default router;
