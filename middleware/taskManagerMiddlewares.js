import * as queries from '../db/taskQueries.js';

export async function insertTask(req, res, next) {
  try {
    const task = {
      tname: req.fields.tname,
      posted: new Date(),
      deadline: req.fields.deadline,
      eventID: res.locals.EventID,
      userID: res.locals.UserID,
    };
    task.posted.setHours(0, 0, 0, 0);
    await queries.insertTask(task);
    next();
  } catch (err) {
    next({ status: 500, message: `${err.message}` });
  }
}

export async function getTasksFromAnEventByName(req, res, next) {
  try {
    const [tasks] = await queries.getTasksFromAnEventByName(req.params.EventName);
    res.locals.tasks = tasks;
    next();
  } catch (err) {
    next({ status: 500, message: err.message });
  }
}

export async function getTasksOfAUserFromAnEventByName(req, res, next) {
  try {
    const { EventName, Username } = req.params;
    const [tasks] = await queries.getTasksOfAUserFromAnEventByName(EventName, Username);
    res.locals.tasks = tasks;
    next();
  } catch (err) {
    next({ status: 500, message: err.message });
  }
}
