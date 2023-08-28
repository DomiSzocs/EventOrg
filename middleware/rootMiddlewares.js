import * as queries from '../db/eventsQueries.js';

export const renderObject = {
  response: undefined,
  events: undefined,
  user: undefined,
};

export function setRenderObjectUndefined(req, resp, next) {
  renderObject.response = undefined;
  renderObject.events = undefined;
  next();
}

export async function findAllEvents(req, resp, next) {
  try {
    const [events] = await queries.getAllEvents();
    renderObject.events = events;
    next();
  } catch (err) {
    renderObject.response = `Selection unsuccessful: ${err.message}`;
    next({ status: 500, message: `Selection unsuccessful: ${err.message}` });
  }
}
