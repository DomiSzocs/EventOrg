import { Router } from 'express';
import * as authMiddlewares from '../middleware/authMiddlewares.js';
import * as eventManagerMiddlewares from '../middleware/eventManagerApiMiddlewares.js';
import * as taskManagerMiddlewares from '../middleware/taskManagerMiddlewares.js';

const router = Router();

router.post(
  '/add_new_task/:EventName',
  authMiddlewares.checkIfLoggedIn,
  authMiddlewares.checkIfAdmin,
  eventManagerMiddlewares.getEventIDByName,
  eventManagerMiddlewares.joinedAdmin,
  taskManagerMiddlewares.insertTask,
  (err, req, res, next) => {
    const resp = {
      response: undefined,
      event: req.params.EventName,
      user: res.locals.user,
    };
    resp.response = err.message;
    res.status(400).render('new_task.ejs', resp);
    next();
  },
  (req, res) => {
    const resp = {
      response: 'Task added',
      event: req.params.EventName,
      user: res.locals.user,
    };
    res.status(200).render('new_task.ejs', resp);
  },
);

export default router;
