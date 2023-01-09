const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const mysql = require("mysql2");
const { isBuffer } = require("util");

const conn = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "August21972",
  database: "blockbuster",
});

conn.connect((err) => {
  if (err) {
    console.log(`cant connect to database`);
    console.log(err);
    return;
  }
  console.log(`connection worked`);
});

conn.query("SELECT * FROM products", (err, row) => {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log(row);
  }
});
