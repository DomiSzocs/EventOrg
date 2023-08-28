import pool from './connection.js';

export function photosFromAnEvent(eventID) {
  return pool.execute(`SELECT path
  FROM photos
  WHERE EventID = ?`, [eventID]);
}

export function insertPhoto(path, userID, eventID) {
  return pool.execute(`INSERT INTO photos
  Values (DEFAULT, ?, ?, ?)`, [path, userID, eventID]);
}
