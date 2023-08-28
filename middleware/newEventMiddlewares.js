import * as eventsQueries from '../db/eventsQueries.js';
import * as joinedQueries from '../db/joinedQueries.js';
import * as usersQueries from '../db/usersQueries.js';

export function checkDates(req, resp, next) {
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);
  const startDate = new Date(req.fields['event-start']);
  startDate.setHours(0, 0, 0, 0);
  const endDate = new Date(req.fields['event-end']);
  endDate.setHours(0, 0, 0, 0);
  if (currentDate < startDate && startDate <= endDate) {
    next();
  } else {
    next({ status: 400, message: 'The dates are wrong!' });
  }
}

export async function existingEventName(req, resp, next) {
  const newEventName = req.fields['event-name'];
  try {
    const [eventIDs] = await eventsQueries.findEventsByName(newEventName);
    if (eventIDs.length <= 0) {
      next();
    } else {
      next({ status: 400, message: 'An event with this name already exists!' });
    }
  } catch (err) {
    next({ status: 500, message: `Selection unsuccessful: ${err.message}` });
  }
}

export async function addNewEvent(req, resp, next) {
  const newEvent = {
    name: req.fields['event-name'],
    start: req.fields['event-start'],
    end: req.fields['event-end'],
    location: req.fields['event-location'],
  };
  try {
    const [response] = await eventsQueries.insertEvent(newEvent);
    const { insertId } = response;
    let splited;
    if (req.fields.organisers !== undefined) {
      splited = req.fields.organisers.split('\n');
    }
    splited = splited.map((element) => element.trim());

    const notUsersYet = [];
    const promises = splited.map((element) => new Promise((resolve) => {
      resolve(
        usersQueries.findUserByName(element).then((value) => {
          if (value[0].length > 0) {
            const { UserID } = value[0][0];
            joinedQueries.insertJoined(UserID, insertId);
          } else {
            notUsersYet.push(element);
          }
        }),
      );
    }));

    await Promise.all(promises);
    req.newId = insertId;
    req.notUsersYet = notUsersYet;
    next();
  } catch (err) {
    next({ status: 500, message: `Selection unsuccessful: ${err.message}` });
  }
}
