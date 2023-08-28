import pool from './connection.js';

export function insertJoined(userID, eventID) {
  return pool.execute(`INSERT INTO joined
  Values (?, ?)`, [userID, eventID]);
}

export function deleteJoined(userID, eventID) {
  return pool.execute(`DELETE FROM joined
  WHERE UserID = ? AND EventID = ?`, [userID, eventID]);
}

export function organiserCountByName(userName, eventID) {
  return pool.execute(`SELECT COUNT(joined.UserID) AS UserIDCount
  FROM joined
  JOIN users ON users.UserID = joined.UserID
  WHERE joined.EventID = ? AND users.Username LIKE ?`, [eventID, userName]);
}

export function organiserCountByNameAndEventName(userName, eventName) {
  return pool.execute(`SELECT COUNT(joined.UserID) AS UserIDCount
  FROM joined
  JOIN users ON users.UserID = joined.UserID
  JOIN events ON events.EventID = joined.EventID
  WHERE events.EventName Like ? AND users.Username LIKE ?`, [eventName, userName]);
}

export function organisersFromAnEvent(eventID) {
  return pool.execute(`SELECT users.Username
  FROM users
  JOIN joined ON joined.UserID = users.UserID
  WHERE joined.EventID = ?`, [eventID]);
}

export function organiserFromAnEventByName(eventID, username) {
  return pool.execute(`SELECT users.UserID
  FROM users
  JOIN joined ON joined.UserID = users.UserID
  WHERE joined.EventID = ? AND Username LIKE ?`, [eventID, username]);
}

export function eventOrganiserByEventName(eventName, username) {
  return pool.execute(`SELECT users.UserID
  FROM users
  JOIN joined ON joined.UserID = users.UserID
  JOIN events ON events.EventID = joined.EventID
  WHERE events.EventName LIKE ? AND Username LIKE ?`, [eventName, username]);
}

export function getAllEventByOrganiserName(username) {
  return pool.execute(`SELECT events.EventName
  FROM events
  JOIN joined ON joined.EventID = events.EventID
  JOIN users ON users.UserID = joined.UserID
  WHERE users.Username LIKE ?`, [username]);
}
