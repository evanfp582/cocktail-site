const express = require("express");
const cors = require("cors");
require('dotenv').config();

const app = express();
const port = 5000;

app.use(cors());

// Where the routes are established 
const usersRoute = require('./routes/users');
const ingredientsRoute = require('./routes/ingredients');

app.use('/users', usersRoute);
app.use('/ingredients', ingredientsRoute);


app.listen(port, () => console.log(`Listening on port ${port}`));
