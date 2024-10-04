// routes/ingredients.js
const express = require('express');
const router = express.Router();
const ingredientsController = require("../controllers/ingredients") 

// Gets All Users
router.get("/", ingredientsController.getAll)

// export the router module so that server.js file can use it
module.exports = router;