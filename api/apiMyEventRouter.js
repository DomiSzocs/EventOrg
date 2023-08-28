import express from 'express';
import * as middlewares from '../middleware/eventDetailsMiddlewares.js';
import * as authMiddlewares from '../middleware/authMiddlewares.js';

const router = express.Router();

router.use(
  '/api/myEvents',
  authMiddlewares.checkIfLoggedIn,
  middlewares.getAllEventByOrganiserName,
  (err, req, res, next) => {
    if (!err) {
      next();
    }
    res.set('Content-Type', 'application/json');
    res.status(err.status);
    res.end(JSON.stringify({ response: err.message, events: res.locals.event }));
  },
  (req, res) => {
    res.set('Content-Type', 'application/json');
    res.status(200).end(JSON.stringify({ response: undefined, events: res.locals.event }));
  },
);

export default router;
