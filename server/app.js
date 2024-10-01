const { parse } = require("csv-parse");
const fs = require("fs");
const express = require("express");
var bodyParser=require("body-parser");
const cors = require("cors");
const csv = require('csv-parser');
const { Console } = require("console");
const path = require("path");
const mysql = require('mysql')
require('dotenv').config();


const app = express();
const port = 5000;

// app.use(cors(corsOptions));
// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());

/*
  Actual DB interaction 
*/
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
})

connection.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});

// Define a route to fetch data
app.get('/get_ingredients', (req, res) => {
  const sql = 'SELECT * FROM cocktail_ingredients';

  connection.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// Get All cocktails
app.get('/get_cocktails', (req, res) => {
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
  connection.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
})


app.post("/CreateDrinkFormSubmit", (req, res) => {
  console.log(req.body);
  res.send({ message: "Submitted Drink" });
})


app.listen(port, () => console.log(`Listening on port ${port}`));
