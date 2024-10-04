/** server/dbServices.js
 * Contains a generic queryDatabase function to allow for any sqlQuery to the Database
 * Also establishes connection to the database
 * 
 * Pool results is reused connections, increasing performance 
 */
const mysql = require('mysql2/promise');
const env = process.env;

const pool = mysql.createPool({
  host: env.DB_HOST,
  user: env.DB_USER,
  password: env.DB_PASSWORD,
  database: env.DB_DATABASE,
});


// Async function to query the database
const queryDatabase = async (sqlQuery, params = []) => {
  let connection;
  try {
      connection = await pool.getConnection(); // Get a connection from the pool
      const [rows] = await connection.execute(sqlQuery, params); // Execute the query with params
      return rows; // Return the query result
  } catch (error) {
      console.error('Database query error:', error.message);
      throw error;
  } finally {
      if (connection) {
          connection.release(); // Release the connection back to the pool
      }
  }
};


module.exports = {
  queryDatabase
}