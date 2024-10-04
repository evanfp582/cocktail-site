// routes/cocktails.js
const express = require('express');
const router = express.Router();
const ingredientsController = require("../controllers/cocktails") 

// Gets All Cocktails 
router.get("/", ingredientsController.getAll)

// Gets All Cocktails 
router.get("/ingredients", ingredientsController.getAllWithIngredients)

// export the router module so that server.js file can use it
module.exports = router;