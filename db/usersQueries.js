import pool from './connection.js';

export function findUserByName(userName) {
  return pool.execute(`SELECT UserID
  FROM users
  WHERE Username LIKE ?`, [userName]);
}

export function findAllUserNames() {
  return pool.execute(`SELECT UserName
  FROM users`);
}

export function findUserAndPasswordByName(userName) {
  return pool.execute(`SELECT Password
  FROM users
  WHERE Username LIKE ?`, [userName]);
}

export function getSalt(userName) {
  return pool.execute(`SELECT Salt
  FROM users
  WHERE Username LIKE ?`, [userName]);
}

export function checkCredentials(userName, password) {
  return pool.execute(`SELECT UserID
  FROM users
  WHERE Username LIKE ? AND
  Password LIKE ?`, [userName, password]);
}

export function insertUser(username, salt, password) {
  return pool.execute(`INSERT INTO users
  VALUES (DEFAULT, ?, 'user', ?, ?)`, [username, salt, password]);
}
