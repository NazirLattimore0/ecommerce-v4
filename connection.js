// const express = require("express");
// const mysql = require("mysql2");
// // const path = require("path");
// const app = express();

// const db = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   password: "August21972$$",
//   database: "blockbuster",
// });

// app.get("/", (req, res) => {
//   const sqlInsert = "INSTER INTO product_info";
//   db.query(sqlInsert, (err, result) => {});
//   res.send("hello Nazir");
// });

// app.use(express.static(path.join(__dirname, "./build")));

// app.use((req, res) => {
//   res.sendFile(path.join(__dirname, "./src", "products.js"));
// });

// app.listen(8000, () => {
//   console.log("Server listening on port 8000");
// });
const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json);

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "August21972$$",
  database: "blockbuster",
});

app.get("", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}`);
    connection.query("SELECT * from products", (err, rows) => {
      connection.release(); // return connection to pool

      if (!err) {
        res.send(rows);
      } else {
        console.log.err;
      }
    });
  });
});

// app.use(express.static(path.join(__dirname, "./build")));

// app.use((req, res) => {
//   res.sendFile(path.join(__dirname, "./src", "products.js"));
// });

app.listen(8000, () => {
  console.log("Server listening on port 8000");
});
