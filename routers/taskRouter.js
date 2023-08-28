import { Router } from 'express';
import * as authMiddlewares from '../middleware/authMiddlewares.js';
import * as taskManagerMiddlewares from '../middleware/taskManagerMiddlewares.js';
import * as eventManagerMiddlewares from '../middleware/eventManagerApiMiddlewares.js';

const router = Router();

router.get(
  '/tasks/:EventName/:Username',
  authMiddlewares.checkIfLoggedIn,
  eventManagerMiddlewares.organiserFromAnEventByName,
  taskManagerMiddlewares.getTasksOfAUserFromAnEventByName,
  (err, req, res, next) => {
    const resp = {
      response: err.message,
      user: res.locals.user,
      event: req.params.EventName,
      tasks: res.locals.tasks,
    };
    if (!err) {
      next();
    }
    res.status(err.status).render('task.ejs', resp);
  },
  (req, res) => {
    const resp = {
      response: undefined,
      user: res.locals.user,
      event: req.params.EventName,
      tasks: res.locals.tasks,
    };
    res.render('task.ejs', resp);
  },
);

export default router;
