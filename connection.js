const express = require("express");
const mysql = require("mysql2");
const path = require("path");
const app = express();

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "August21972",
  database: "blockbuster",
});

connection.connect();

app.get("/Products", (req, res) => {
  connection.query("SELECT * FROM product_info", (error, results) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).send(results);
    }
  });
});

app.use(express.static(path.join(__dirname, "./build")));

app.use((req, res) => {
  res.sendFile(path.join(__dirname, "./pages", "home.js"));
});

app.listen(8800, () => {
  console.log("Server listening on port 8800");
});
