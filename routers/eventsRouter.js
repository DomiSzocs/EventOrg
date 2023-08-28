import { Router } from 'express';
import * as middlewares from '../middleware/eventDetailsMiddlewares.js';
import * as authMiddlewares from '../middleware/authMiddlewares.js';

const router = Router();

router.get(
  '/events/:EventName',
  middlewares.setRenderObjectUndefined,
  authMiddlewares.checkIfLoggedIn,
  middlewares.getEventDetailsByName,
  middlewares.getOrganisers,
  middlewares.getPhotos,
  (err, req, res, next) => {
    if (!err) {
      next();
    }
    res.status(err.status).render('event.ejs', middlewares.renderObject);
  },
  (req, res) => {
    middlewares.renderObject.user = res.locals.user;
    res.status(200).render('event.ejs', middlewares.renderObject);
  },
);

export default router;
