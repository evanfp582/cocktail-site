/**
 * The brain of the users API calls
 */
const dbService = require("../dbService") 

async function getAll(req, res, next) {
  // Called with localhost:5000/ingredients
  try {
      const sql = 'SELECT * FROM users';
      res.json(await dbService.queryDatabase(sql, []))
      
      
  } catch (err) {
      console.error(`Error while getting all users`, err.message);
      next(err);
  }
}

module.exports = {
  getAll,
};