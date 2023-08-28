import { Router } from 'express';
import * as middlewares from '../middleware/eventDetailsMiddlewares.js';
import * as authMiddlewares from '../middleware/authMiddlewares.js';

const router = Router();

router.post(
  '/photo_upload/:EventID/:Username',
  middlewares.setRenderObjectUndefined,
  authMiddlewares.checkIfLoggedIn,
  middlewares.getEventDetailsByID,
  middlewares.getOrganisers,
  middlewares.getPhotos,
  middlewares.existingUserName,
  middlewares.joined,
  middlewares.addNewPhoto,
  (err, req, res, next) => {
    if (!err) {
      next();
    }
    res.status(err.status).render('event.ejs', middlewares.renderObject);
  },
  (req, res) => {
    middlewares.renderObject.response = 'Photo uploaded successfully!';
    res.render('event.ejs', middlewares.renderObject);
  },
);

export default router;
