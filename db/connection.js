import sql from 'mysql2/promise.js';

const sqlConfig = {
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '',
  database: 'eventorganiser',
  connectionLimit: 5,
};

const pool = sql.createPool(sqlConfig);

export default pool;
