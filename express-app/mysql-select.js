const data = require("./dummy.json");
const express = require("express");
const mysql2 = require("mysql2");

const app = express();

const conn = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb",
});

conn.connect((err) => {
  if (err) {
    console.log("Error in connecting to MySQL : " + err);
  } else {
    console.log("Connected to MySQL");
  }
});

app.get("/", (req, res) => {
  res.send("This is practice to display data");
});

app.get("/data", (req, res) => {
  const d = data.map((i) => [
    i.first_name,
    i.last_name,
    i.company_name,
    i.address,
    i.city,
    i.state,
    i.phone,
    i.email,
    i.isActive,
  ]);
  res.send(d);
});

app.get("/insert", (req, res) => {
  const dataArray = data.map((i) => [
    i.first_name,
    i.last_name,
    i.company_name,
    i.address,
    i.city,
    i.state,
    i.phone,
    i.email,
    i.isActive,
  ]);
  const insert = `INSERT INTO
  employee (
    firstname,
    lastname,
    companyname,
    address,
    city,
    state,
    phone,
    email,
    isActive
  )
VALUES
  ?`;

  conn.query(insert, [dataArray], (err, results) => {
    if (err) {
      res.status(500).send("Records Not Inserted: " + err);
    } else {
      res.status(200).send("Records Inserted successfully");
    }
  });
});

app.get("/select", (req, res) => {
  const limit = req.query.limit;
  const offset = req.query.offset;

  sql = `select * from employee LIMIT ${limit} OFFSET ${offset}`;

  conn.query(sql, (err, results) => {
    if (err) {
      res.status(500).send("Error in selecting: " + err);
    } else {
      res.status(200).send(results);
    }
  });
});

app.get("/select/id/:id", (req, res) => {
  sql = `select * from employee where id=${req.params.id}`;
  conn.query(sql, (err, results) => {
    if (err) {
      res.status(500).send("Error in selecting: " + err);
    } else {
      res.status(200).send(results);
    }
  });
});

app.get("/select/city/:city", (req, res) => {
  sql = `select * from employee where city='${req.params.city}'`;
  conn.query(sql, (err, results) => {
    if (err) {
      res.status(500).send("Error in selecting: " + err);
    } else {
      res.status(200).send(results);
    }
  });
});

app.get("/select/state/:state", (req, res) => {
  sql = `select * from employee where state='${req.params.state}'`;
  conn.query(sql, (err, results) => {
    if (err) {
      res.status(500).send("Error in selecting: " + err);
    } else {
      //console.log();

      res.status(200).send(results);
    }
  });
});

app.get("/select/isActive/:isActive", (req, res) => {
  sql = `select * from employee where isActive='${req.params.isActive}'`;
  conn.query(sql, (err, results) => {
    if (err) {
      res.status(500).send("Error in selecting: " + err);
    } else {
      const obj = {
        length: results.length,
        result: results,
      };
      console.log("Length : " + results.length);
      res.status(200).send(obj);
    }
  });
});

app.listen(5000);
