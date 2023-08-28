import * as eventsQueries from '../db/eventsQueries.js';
import * as jQueries from '../db/joinedQueries.js';
import * as uQueries from '../db/usersQueries.js';

let EventID;
let UserID;

export async function getEventIDByName(req, res, next) {
  try {
    const [eventID] = await eventsQueries.findEventsByName(req.params.EventName);
    EventID = eventID[0].EventID;
    res.locals.EventID = EventID;
    next();
  } catch (err) {
    next({ status: 500, message: `Selection unsuccessful: ${err.message}` });
  }
}

export async function getUserIDByName(req, res, next) {
  try {
    const [userID] = await uQueries.findUserByName(req.params.UserName);
    UserID = userID[0].UserID;
    next();
  } catch (err) {
    next({ status: 500, message: `Selection unsuccessful: ${err.message}` });
  }
}

export async function notJoined(req, res, next) {
  try {
    const [count] = await jQueries.organiserCountByName(req.params.UserName, EventID);
    if (count[0].UserIDCount > 0) {
      next({ status: 400, message: 'You already joined this event!' });
    }
    next();
  } catch (err) {
    next({ status: 500, message: `Selection unsuccessful: ${err.message}` });
  }
}

export async function joined(req, res, next) {
  try {
    const [count] = await jQueries.organiserCountByName(req.params.UserName, EventID);
    if (count[0].UserIDCount === 0) {
      next({ status: 400, message: 'You are not participating in this event!' });
    }
    next();
  } catch (err) {
    next({ status: 500, message: `Selection unsuccessful: ${err.message}` });
  }
}

export async function joinedAdmin(req, res, next) {
  try {
    const [user] = await jQueries.organiserFromAnEventByName(res.locals.EventID, req.fields.uname);
    if (user.length === 0) {
      next({ status: 400, message: 'The given user does not participating in this event!' });
    } else {
      res.locals.UserID = user[0].UserID;
      next();
    }
  } catch (err) {
    next({ status: 500, message: `Selection unsuccessful: ${err.message}` });
  }
}

export async function organiserFromAnEventByName(req, res, next) {
  try {
    const [user] = await jQueries.eventOrganiserByEventName(req.params.EventName, res.locals.user);
    if (user.length === 0) {
      res.status(401).render('/restricted');
    } else {
      next();
    }
  } catch (err) {
    next({ status: 500, message: `Selection unsuccessful: ${err.message}` });
  }
}

export async function insertParticipant(req, res, next) {
  try {
    await jQueries.insertJoined(UserID, EventID);
    next();
  } catch (err) {
    next({ status: 500, message: `Insertion unsuccessful: ${err.message}` });
  }
}

export async function deleteParticipant(req, res, next) {
  try {
    await jQueries.deleteJoined(UserID, EventID);
    next();
  } catch (err) {
    next({ status: 500, message: `Deletion unsuccessful: ${err.message}` });
  }
}
