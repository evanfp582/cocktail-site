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

// var corsOptions = {
//   origin: "http://localhost:8081"
// };

const countries = [
  { name: "Belgium", continent: "Europe" },
  { name: "India", continent: "Asia" },
  { name: "Bolivia", continent: "South America" },
  { name: "Ghana", continent: "Africa" },
  { name: "Japan", continent: "Asia" },
  { name: "Canada", continent: "North America" },
  { name: "New Zealand", continent: "Australasia" },
  { name: "Italy", continent: "Europe" },
  { name: "South Africa", continent: "Africa" },
  { name: "China", continent: "Asia" },
  { name: "Paraguay", continent: "South America" },
  { name: "Usa", continent: "North America" },
  { name: "France", continent: "Europe" },
  { name: "Botswana", continent: "Africa" },
  { name: "Spain", continent: "Europe" },
  { name: "Senegal", continent: "Africa" },
  { name: "Brazil", continent: "South America" },
  { name: "Denmark", continent: "Europe" },
  { name: "Mexico", continent: "South America" },
  { name: "Australia", continent: "Australasia" },
  { name: "Tanzania", continent: "Africa" },
  { name: "Bangladesh", continent: "Asia" },
  { name: "Portugal", continent: "Europe" },
  { name: "Pakistan", continent: "Asia" },
];


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

//Get all ingredients
// app.get('/get_ingredients', (req, res) => {
//   const sql = `
//   SELECT cocktail_ingredients.ID, cocktail_ingredients.name
//   FROM cocktails_schemacocktail_ingredients;
//   `;

//   connection.query(sql, (err, results) => {
//     if (err) {
//       return res.status(500).json({ error: err.message });
//     }
//     res.json(results);
//   });
// })


/*
  Create Drink :)
*/

/*
  Login function
  Checks the users.csv for a match, if so return the {id, name}
  else ???
*/
// app.post("/Login", (req, res) => {
//   console.log(req.body);
//   const path = "../database_junk/files/users.csv"
//   result = []
//   fs.createReadStream(path)
//   .pipe(csv())
//   .on('data', (data) => {
//     if (data.name == req.body.loginData.username){
//         result.push(data)
//     }
//   })
//   .on('end', () => {
//     res.send({ message: result });
//   })
// })


app.post("/CreateDrinkFormSubmit", (req, res) => {
  console.log(req.body);
  res.send({ message: "Submitted Drink" });
})

/*
  Get all the drinks
  Used for the search bar
  With the small amount of data, this works, but in future
  TODO make this get after each search
*/
// app.get('/getAllDrinks', (req, res) => {
//   const results = []
//   const path = "../database_junk/files/cocktails.csv"
//   fs.createReadStream(path)
//   .pipe(csv())
//   .on('data', (data) => results.push(data))
//   .on('end', () => {
//     res.send({ message: results })
//   });
// })

/*
  Scans the shelf for things you own and returns them in an array
*/
// app.post("/shelf", (req, res) => {
//   console.log("shelp body", req.body);
//   const results = []
//   const path = "../database_junk/files/user_ingredients.csv"
//   fs.createReadStream(path)
//   .pipe(csv())
//   .on('data', (data) => {
//     console.log(data.user_id, req.body.username)
//     if (data.user_id == req.body.username){
//       results.push(data.ingredient_name)
//     }
//   })
//   .on('end', () => {
//     console.log(results)
//     res.send({ ingredients: results })
//   });
// })

app.listen(port, () => console.log(`Listening on port ${port}`));

/*
  Function to get all the drinks
  Right now handled via hardcoded path to the cocktails.scv
*/
// function getAllDrinks() {
//   const results = [];
//   const path = "../database_junk/files/cocktails.csv"
//   fs.createReadStream(path)
//   .pipe(csv())
//   .on('data', (data) => results.push(data))
//   .on('end', () => {
//     console.log("Here: ", results)
//     return results
//   });}