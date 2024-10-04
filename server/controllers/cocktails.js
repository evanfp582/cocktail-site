/**
 * The brain of the cocktail API calls
 */

const dbService = require("../dbService") 

async function getAll(req, res, next) {
  // Called with localhost:5000/cocktails
  try {
      const sql = 'SELECT name FROM cocktail_recipes';
      res.json(await dbService.queryDatabase(sql, []))

  } catch (err) {
      console.error(`Error while getting all users`, err.message);
      next(err);
  }
}

async function getAllWithIngredients(req, res, next) {
  // Called with localhost:5000/cocktails/ingredients
  try {
      const sql = `
      SELECT 
        cr.id,
        cr.name AS cocktail_name,
        GROUP_CONCAT(ci.name SEPARATOR ', ') AS ingredients
      FROM 
        cocktail_recipes cr
      JOIN 
        cocktail_recipe_ingredients cri ON cr.id = cri.cocktail_id
      JOIN 
        cocktail_ingredients ci ON cri.ingredient_id = ci.id
      GROUP BY 
        cr.id, cr.name;
    `;
      res.json(await dbService.queryDatabase(sql, []))

  } catch (err) {
      console.error(`Error while getting all users`, err.message);
      next(err);
  }
}

module.exports = {
  getAll,
  getAllWithIngredients
};