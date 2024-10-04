// routes/users.js
const express = require('express');
const router = express.Router();
const usersController = require("../controllers/users") 

// Gets All Users
router.get("/", usersController.getAll)

// export the router module so that server.js file can use it
module.exports = router;