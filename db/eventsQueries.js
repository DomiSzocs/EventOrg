import pool from './connection.js';

export function getAllEvents() {
  return pool.execute(`SELECT *
  FROM events`);
}

export function findAllEventNames() {
  return pool.execute(`SELECT EventName
  FROM events`);
}

export function getEventByName(eventName) {
  return pool.execute(`SELECT *
  FROM events
  WHERE EventName LIKE ?`, [eventName]);
}

export function findEventByID(eventID) {
  return pool.execute(`SELECT *
  FROM events
  WHERE EventID = ?`, [eventID]);
}

export function findEventsByName(eventName) {
  return pool.execute(`SELECT EventID
  FROM events
  WHERE EventName LIKE ?`, [eventName]);
}

export function insertEvent(event) {
  return pool.execute(`INSERT INTO events
  VALUES (default, ?, ?, ?, ?)`, [event.name, event.start, event.end, event.location])
    .then(pool.execute('SELECT LAST_INSERT_ID() AS EventID'));
}
