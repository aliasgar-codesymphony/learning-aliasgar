const express = require("express");
const mysql2 = require("mysql2");
const app = express();

app.use(express.json());

const conn = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db-relation",
});

conn.connect((err) => {
  if (err) {
    console.log("Not Connected to MySQL" + err);
  } else {
    console.log("Connected to MySQL");
  }
});

app.get("/", (req, res) => {
  res
    .status(200)
    .send(
      "This practice that how relation works while inserting data in multiple table"
    );
});

app.post("/insert", (req, res) => {
  user = `
        insert into users(fullname,email,password) values('${req.body.fullname}','${req.body.email}','${req.body.password}')
    `;
  conn.query(user, (err, results) => {
    if (err) {
      res.status(500).send("User data not inserted: " + err);
    } else {
      const personal = `
        insert into personal_details(gender,age,phone,address,userId) values('${req.body.gender}',${req.body.age},'${req.body.phone}','${req.body.address}',LAST_INSERT_ID());
    `;

      //const personal_employee = personal + employee;

      conn.query(personal, (err, results) => {
        if (err) {
          res
            .status(500)
            .send("Personal and Employee data not inserted: " + err);
        } else {
          /* res
            .status(200)
            .send("Personal and Employee data inserted successfully"); */
          const employee = `insert into employment_details(designation,salary,joindate,department,userId) values('${req.body.designation}',${req.body.salary},'${req.body.joindate}','${req.body.department}',LAST_INSERT_ID())`;

          conn.query(employee, (err, results) => {
            if (err) {
              res
                .status(500)
                .send("Personal and Employee data not inserted: " + err);
            } else {
              res
                .status(200)
                .send("User,Personal and Employee data inserted successfully");
            }
          });
        }
      });
    }
  });
});

app.listen(5000);
