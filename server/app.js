const express = require("express");
const cors = require("cors");
require('dotenv').config();

const app = express();
const port = 5000;

app.use(cors());

// Where the routes are established 
const usersRoute = require('./routes/users');
const ingredientsRoute = require('./routes/ingredients');
const cocktailsRoute = require('./routes/cocktails');


app.use('/users', usersRoute);
app.use('/ingredients', ingredientsRoute);
app.use('/cocktails', cocktailsRoute);



app.listen(port, () => console.log(`Listening on port ${port}`));
