const express = require("express");
const mysql2 = require("mysql2");
const app = express();

const conn = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database:"mydb"
});

app.get('/',(req,res)=>{
    res.send("This is mysql practice");
});

conn.connect((err) => {
  if (err) {
    console.log("Error connecting to Mysql" + err);
  } else {
    console.log("Connected to Mysql");
  }
});

/* conn.query("create database if not exists mydb",()=>{
    console.log("Database created");
}); */

app.get("/create-db/:name", (req, res) => {
  const query = "create database if not exists " + req.params.name;
  conn.query(query, (err, results) => {
    if (err) {
      console.log("Error creating database");
      res.status(500).send("Error creating database");
    } else {
      console.log(results);
      res.send(req.params.name + " Database created or already exist");
    }
  });
});

app.get("/tbuser", (req, res) => {
  const query = `
    create table if not exists users(
    id int auto_increment primary key,
    name varchar(50) not null,
    email varchar(50) unique not null)
    `;
  conn.query(query, (err, results) => {
    if (err) {
      console.log("Error creating table : " + err);
      res.status(500).send("Error creating table");
    } else {
        console.log(results);
      res.send("table created or already exists");
    }
  });
});




app.listen(4000);
