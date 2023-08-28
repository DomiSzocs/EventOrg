import express from 'express';
import * as middlewares from '../middleware/eventManagerApiMiddlewares.js';

const router = express.Router();

router.get(
  '/:EventName/:UserName/',
  middlewares.getEventIDByName,
  middlewares.getUserIDByName,
  middlewares.joined,
  middlewares.deleteParticipant,
  (err, req, res, next) => {
    if (!err) {
      next();
    }
    res.set('Content-Type', 'application/json');
    res.status(err.status).end(JSON.stringify({ response: err.message }));
  },
  (req, res) => {
    res.status(204).end();
  },
);

export default router;
