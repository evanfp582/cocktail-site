const express = require("express");
const app = express();
var bodyParser=require("body-parser");
const cors = require("cors");
const port = process.env.PORT || 3000;

var corsOptions = {
  origin: "http://localhost:8081"
};

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

app.post("/shelf", (req, res) => {
  console.log(req.body);
  res.send({ message: "This is where We look at the backend for ingredients that the user owns" });
})

app.listen(port, () => console.log(`Listening on port ${port}`));