import { Router } from 'express';
import * as authMiddlewares from '../middleware/authMiddlewares.js';
import * as taskManagerMiddlewares from '../middleware/taskManagerMiddlewares.js';

const router = Router();

router.get(
  '/progress_report/:EventName',
  authMiddlewares.checkIfLoggedIn,
  authMiddlewares.checkIfAdmin,
  taskManagerMiddlewares.getTasksFromAnEventByName,
  (err, req, res, next) => {
    const resp = {
      response: err.message,
      user: res.locals.user,
      event: req.params.EventName,
      tasks: res.locals.tasks,
    };
    if (err.status === 401) {
      res.status(err.status).redirect('/restricted');
    }
    res.status(err.status).render('task.ejs', resp);
    next();
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
