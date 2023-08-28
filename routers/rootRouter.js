import { Router } from 'express';
import * as middlewares from '../middleware/rootMiddlewares.js';
import * as authMiddlewares from '../middleware/authMiddlewares.js';

const router = Router();

router.get(
  '/',
  middlewares.setRenderObjectUndefined,
  authMiddlewares.checkIfLoggedIn,
  middlewares.findAllEvents,
  (err, req, res, next) => {
    if (!err) {
      next();
    }
    res.status(err.status).render('index.ejs', middlewares.renderObject);
  },
  (req, res) => {
    middlewares.renderObject.user = res.locals.user;
    res.status(200).render('index.ejs', middlewares.renderObject);
  },
);

export default router;
