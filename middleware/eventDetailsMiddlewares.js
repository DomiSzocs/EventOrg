import * as eventsQueries from '../db/eventsQueries.js';
import * as joinedQueries from '../db/joinedQueries.js';
import * as photosQueries from '../db/photosQueries.js';
import * as usersQueries from '../db/usersQueries.js';

export const renderObject = {
  response: undefined,
  event: undefined,
  organisers: undefined,
  photos: undefined,
  user: undefined,
};

export function setRenderObjectUndefined(req, resp, next) {
  renderObject.response = undefined;
  renderObject.event = undefined;
  renderObject.organisers = undefined;
  renderObject.photos = undefined;
  renderObject.user = undefined;
  next();
}

export async function getEventDetailsByName(req, resp, next) {
  try {
    const [event] = await eventsQueries.getEventByName(req.params.EventName);
    [renderObject.event] = event;
    next();
  } catch (err) {
    renderObject.response = `Selection unsuccessful: ${err.message}`;
    next({ status: 500, message: `Selection unsuccessful: ${err.message}` });
  }
}

export async function getEventDetailsByID(req, resp, next) {
  try {
    const [event] = await eventsQueries.findEventByID(req.params.EventID);
    [renderObject.event] = event;
    next();
  } catch (err) {
    renderObject.response = `Selection unsuccessful: ${err.message}`;
    next({ status: 500, message: `Selection unsuccessful: ${err.message}` });
  }
}

export async function getOrganisers(req, resp, next) {
  try {
    const [organisers] = await joinedQueries.organisersFromAnEvent(renderObject.event.EventID);
    renderObject.organisers = organisers;
    next();
  } catch (err) {
    renderObject.response = `Selection unsuccessful: ${err.message}`;
    next({ status: 500, message: `Selection unsuccessful: ${err.message}` });
  }
}

export async function getPhotos(req, resp, next) {
  try {
    const [photos] = await photosQueries.photosFromAnEvent(renderObject.event.EventID);
    renderObject.photos = photos;
    next();
  } catch (err) {
    renderObject.response = `Selection unsuccessful: ${err.message}`;
    next({ status: 500, message: `Selection unsuccessful: ${err.message}` });
  }
}

export async function existingUserName(req, resp, next) {
  try {
    const [userIDs] = await usersQueries.findUserByName(req.params.Username);
    if (userIDs.length > 0) {
      req.UserID = userIDs[0].UserID;
      next();
    } else {
      renderObject.response = 'Username not found!';
      next({ status: 400, message: 'Username not found!' });
    }
  } catch (err) {
    renderObject.response = `Selection unsuccessful: ${err.message}`;
    next({ status: 500, message: `Selection unsuccessful: ${err.message}` });
  }
}

export async function joined(req, resp, next) {
  try {
    const { Username, EventID } = req.params;
    const [count] = await joinedQueries.organiserCountByName(Username, EventID);
    if (count[0].UserIDCount > 0) {
      next();
    } else {
      renderObject.response = 'You are not participating in this event!';
      next({ status: 400, message: 'You are not participating in this event!' });
    }
  } catch (err) {
    renderObject.response = `Selection unsuccessful: ${err.message}`;
    next({ status: 500, message: `Selection unsuccessful: ${err.message}` });
  }
}

export async function addNewPhoto(req, resp, next) {
  try {
    const regex = /upload.*/;
    const relativePath = req.files.photo.path.match(regex);
    await photosQueries.insertPhoto(relativePath[0], req.UserID, req.params.EventID);
    renderObject.photos.push({ path: relativePath[0] });
    next();
  } catch (err) {
    renderObject.response = `Upload unsuccessful: ${err.message}`;
    next({ status: 500, message: `Upload unsuccessful: ${err.message}` });
  }
}

export async function getAllEventByOrganiserName(req, res, next) {
  try {
    const [events] = await joinedQueries.getAllEventByOrganiserName(res.locals.user);
    res.locals.event = events;
    next();
  } catch (err) {
    renderObject.response = `Selection unsuccessful: ${err.message}`;
    next({ status: 500, message: `Selection unsuccessful: ${err.message}` });
  }
}
