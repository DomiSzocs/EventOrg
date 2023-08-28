import pool from './connection.js';

export function insertTask(task) {
  return pool.execute(
    `INSERT INTO tasks
    VALUES (DEFAULT, ?, ?, ?, DEFAULT, DEFAULT, ?, ?)`,
    [task.tname, task.posted, task.deadline, task.eventID, task.userID],
  );
}

export function getTasksFromAnEventByName(EventName) {
  return pool.execute(`SELECT tasks.TaskName, tasks.Posted, tasks.Deadline, tasks.Status, tasks.Done, users.Username FROM tasks
    JOIN events ON tasks.EventID = events.EventID
    JOIN users ON tasks.UserID = users.UserID
    WHERE events.EventName = ?`, [EventName]);
}

export function getTasksOfAUserFromAnEventByName(EventName, Username) {
  return pool.execute(`SELECT tasks.TaskName, tasks.Posted, tasks.Deadline, tasks.Status, tasks.Done, users.Username
  FROM tasks
  JOIN events ON tasks.EventID = events.EventID
  JOIN users ON tasks.UserID = users.UserID
  WHERE events.EventName LIKE ? AND users.Username LIKE ?`, [EventName, Username]);
}
