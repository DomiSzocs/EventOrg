import express from 'express';

const router = express.Router();

router.use('/signout', (req, resp) => {
  resp.clearCookie('auth');
  resp.status(204).redirect('/');
});

export default router;
