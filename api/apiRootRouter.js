import express from 'express';
import * as middlewares from '../middleware/rootApiMiddlewares.js';

const router = express.Router();

router.use(
  '/:EventName/',
  middlewares.getEventIDByName,
  middlewares.getOrganisers,
  (err, req, res, next) => {
    if (!err) {
      next();
    }
    res.set('Content-Type', 'application/json');
    res.status(err.status).end(JSON.stringify(middlewares.responseObject));
  },
  (req, res) => {
    res.set('Content-Type', 'application/json');
    res.status(200).end(JSON.stringify(middlewares.responseObject));
  },
);

export default router;
