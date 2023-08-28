import morgan from 'morgan';
import { join } from 'path';
import express from 'express';
import cookieParser from 'cookie-parser';
import { existsSync, mkdirSync } from 'fs';
import formidable from 'express-formidable';
import taskRouter from './routers/taskRouter.js';
import rootRouter from './routers/rootRouter.js';
import signInRouter from './auth/signInRouter.js';
import signUpRouter from './auth/signUpRouter.js';
import apiRootRouter from './api/apiRootRouter.js';
import signOutRouter from './auth/signOutRouter.js';
import eventsRouter from './routers/eventsRouter.js';
import photosRouter from './routers/photosRouter.js';
import newTaskRouter from './routers/newTaskRouter.js';
import newEventRouter from './routers/newEventRouter.js';
import apiMyEventRouter from './api/apiMyEventRouter.js';
import apiJoinEventRouter from './api/apiJoinEventRouter.js';
import addNewTaskRouter from './routers/addNewTaskRouter.js';
import apiLeaveEventRouter from './api/apiLeaveEventRouter.js';
import addNewEventRouter from './routers/addNewEventRouter.js';
import photoUploadRouter from './routers/photoUploadRouter.js';
import progressReportRouter from './routers/progressReportRouter.js';

const app = express();

const staticDir = join(process.cwd(), 'static');
const uploadDir = join(staticDir, 'photos');
if (!existsSync(uploadDir)) {
  mkdirSync(uploadDir);
}

app.use(morgan('tiny'));

app.use(express.static(staticDir));

app.use(formidable({ uploadDir, keepExtensions: true }));

app.use(cookieParser());

app.get('/restricted', (req, res) => {
  res.set('content-type', 'text/plain');
  res.status(200).end('Page restricted!');
});

app.use('/api/join', apiJoinEventRouter);

app.use('/api/leave', apiLeaveEventRouter);

app.get('/api/myEvents', apiMyEventRouter);

app.use('/api/', apiRootRouter);

app.post('/photos/:name', photosRouter);

app.post('/add_new_event', addNewEventRouter);

app.post('/signup', signUpRouter);

app.post('/signin', signInRouter);

app.get('/signout', signOutRouter);

app.get('/auth/:inOrUp', (req, resp) => {
  resp.status(200).render('auth.ejs', { response: undefined, sign: req.params.inOrUp });
});

app.set('view engine', 'ejs');

app.get('/tasks/:EventName/:Username', taskRouter);

app.get('/progress_report/:EventName', progressReportRouter);

app.get('/new_task/:EventName', newTaskRouter);

app.post('/add_new_task/:EventName', addNewTaskRouter);

app.post('/photo_upload/:EventID/:Username', photoUploadRouter);

app.get('/events/:EventName', eventsRouter);

app.get('/new_event', newEventRouter);

app.get('/', rootRouter);

app.listen(8080, () => { console.log('Server listening on http://localhost:8080/ ...'); });
