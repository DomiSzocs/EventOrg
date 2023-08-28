import { join } from 'path';
import { Router } from 'express';

import { readFileSync } from 'fs';

const router = Router();

const staticDir = join(process.cwd(), 'static');
const uploadDir = join(staticDir, 'photos');

router.get('/photos/:name', (req, resp) => {
  try {
    const file = join(uploadDir, req.params.name);
    const splitedName = req.params.name.split('.');
    const extension = splitedName[splitedName.length - 1];
    const photo = readFileSync(file);
    resp.status(200);
    resp.set('Content-Type', `image/${extension}`);
    resp.end(photo);
  } catch (err) {
    resp.status(404);
    resp.end();
  }
});

export default router;
