import * as joinedQueries from '../db/joinedQueries.js';
import * as eventsQueries from '../db/eventsQueries.js';

export const responseObject = {
  organisers: undefined,
  response: undefined,
};

export function setResponseObjectUndefined(req, res, next) {
  responseObject.organisers = undefined;
  responseObject.response = undefined;
  next();
}

export async function getEventIDByName(req, res, next) {
  try {
    const [eventID] = await eventsQueries.findEventsByName(req.params.EventName);
    res.locals.eventID = eventID[0].EventID;
    next();
  } catch (err) {
    responseObject.response = `Selection unsuccessful: ${err.message}`;
    next({ status: 500, message: `Selection unsuccessful: ${err.message}` });
  }
}

export async function getOrganisers(req, res, next) {
  try {
    const [organisers] = await joinedQueries.organisersFromAnEvent(res.locals.eventID);
    responseObject.organisers = organisers;
    next();
  } catch (err) {
    responseObject.response = `Selection unsuccessful: ${err.message}`;
    next({ status: 500, message: `Selection unsuccessful: ${err.message}` });
  }
}
