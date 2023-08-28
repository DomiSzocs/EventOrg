import * as queries from '../db/usersQueries.js';

export async function checkIfUsernameExists(req, res, next) {
  try {
    const [userIDs] = await queries.findUserByName(req.fields.name);
    if (userIDs.length > 0) {
      next({ status: 400, message: 'Username taken!' });
    } else {
      next();
    }
  } catch (err) {
    next({ status: 500, message: `Selection error: ${err.message}` });
  }
}

export async function getUserIDByName(req, res, next) {
  try {
    const [userID] = await queries.findUserByName(req.params.UserName);
    res.locals.UserID = userID[0].UserID;
    next();
  } catch (err) {
    next({ status: 500, message: `Selection unsuccessful: ${err.message}` });
  }
}

export async function getUserIDByNameFields(req, res, next) {
  try {
    const [userID] = await queries.findUserByName(req.fields.uname);
    res.locals.UserID = userID[0].UserID;
    next();
  } catch (err) {
    next({ status: 500, message: `Selection unsuccessful: ${err.message}` });
  }
}
