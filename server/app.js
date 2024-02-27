const { parse } = require("csv-parse");
const fs = require("fs");
const express = require("express");
const app = express();
var bodyParser=require("body-parser");
const cors = require("cors");
const port = process.env.PORT || 3000;
const csv = require('csv-parser');
const { Console } = require("console");


var corsOptions = {
  origin: "http://localhost:8081"
};

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


app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());

app.get("/api", (req, res) => {
  res.send({ message: "Hello from Express!" });
});

app.post("/CreateDrinkFormSubmit", (req, res) => {
  console.log(req.body);
  res.send({ message: "Submitted Drink" });
})

app.post("/Login", (req, res) => {
  console.log(req.body);
  res.send({ message: "Logged in" });
})

app.get('/getAllDrinks', (req, res) => {
  const results = [];
  const path = "../database_junk/files/cocktails.csv"
  fs.createReadStream(path)
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    res.send({ message: results })
  });
})

app.post("/shelf", (req, res) => {
  console.log(req.body);
  res.send({ message: "This is where We look at the backend for ingredients that the user owns" });
})

app.listen(port, () => console.log(`Listening on port ${port}`));

/*
  Function to get all the drinks
  Right now handled via hardcoded path to the cocktails.scv
*/
function getAllDrinks() {
  const results = [];
  const path = "../database_junk/files/cocktails.csv"
  fs.createReadStream(path)
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    console.log("Here: ", results)
    return results
  });}