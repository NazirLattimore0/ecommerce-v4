const express = require("express");
const mysql = require("mysql2");
// const path = require("path");
const app = express();

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "August21972$$",
  database: "blockbuster",
});

app.get("/", (req, res) => {
  const sqlInsert = "INSTER INTO product_info";
  db.query(sqlInsert, (err, result) => {});
  res.send("hello Nazir");
});

// app.use(express.static(path.join(__dirname, "./build")));

// app.use((req, res) => {
//   res.sendFile(path.join(__dirname, "./src", "products.js"));
// });

app.listen(8000, () => {
  console.log("Server listening on port 8000");
});
