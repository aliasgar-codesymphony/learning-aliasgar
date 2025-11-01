const express = require("express");
const mysql2 = require("mysql2");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is expense tracker");
});

const conn = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb",
});

conn.connect((err) => {
  if (err) {
    console.log("Not Connected to MySQL " + err);
  } else {
    console.log("Connected to MySQL");
  }
});

app.get("/tbcreate", (req, res) => {
  const sql = `
    create table if not exists expenses(
        id int auto_increment primary key,
        amount int not null,
        category varchar(30) not null,
        date varchar(15) not null,
        description varchar(15) not null)
    `;

  conn.query(sql, (err, results) => {
    if (err) {
      res.status(500).send("Error creating table");
    } else {
      res.status(200).send("Table created successfull");
    }
  });
});

app.post("/insert", (req, res) => {
  if (req.body) {
    if (
      req.body.category == "Food" ||
      req.body.category == "Travel" ||
      req.body.category == "Shopping" ||
      req.body.category == "Other"
    ) {
      const date = new Date();
      try {
        const insert = `
        insert into expenses(amount,category,date,description)
        values(${req.body.amount},'${
          req.body.category
        }','${date.toLocaleDateString()}','${
          req.body.description ? req.body.description : "-"
        }')
    `;

        conn.query(insert, (err, results) => {
          if (err) {
            res.status(500).send("Error in inserting : " + err);
          } else {
            res.status(200).send("Record Inserted succesful");
          }
        });
      } catch (err) {
        res.status(500).send("Error: " + err);
      }
    } else {
      res
        .status(500)
        .send(
          "Category should from these four(Food, Travel, Shopping, Other) and case sensative"
        );
    }
  } else {
    res.status(500).send("Not possible to insert without data");
  }
});

app.get("/expenses", (req, res) => {
  try {
    const sql = "select * from expenses";
    conn.query(sql, (err, results) => {
      if (err) {
        res.status(500).send("Error in selecting : " + err);
      } else {
        const obj = {
          length: results.length,
          result: results,
        };
        res.status(200).send(obj);
      }
    });
  } catch (err) {
    res.status(500).send("Error in selecting : " + err);
  }
});

app.delete("/delete/id/:id", (req, res) => {
  try {
    const sql = `delete from expenses where id=${req.params.id}`;
    conn.query(sql, (err, results) => {
      if (err) {
        res.status(500).send("Error in deleting : " + err);
      } else {
        res.status(200).send("Record deleted");
      }
    });
  } catch (err) {
    res.status(500).send("Error in deleting : " + err);
  }
});

app.put("/update/id/:id", (req, res) => {
  if (req.body) {
    try {
      conn.query(
        "select * from expenses where id=" + req.params.id,
        (err, results) => {
          if (err) {
            res.status(500).send("Error in deleting : " + err);
          } else {
            console.log(results[0].id);
            const amount = req.body.amount || results[0].amount;
            const category = req.body.category || results[0].category;
            const date = req.body.date || results[0].date;
            const description = req.body.description || results[0].description;

            const update = `update expenses set amount=${amount}, 
  category='${category}', date='${date}',
  description='${description}' where id=${req.params.id}`;

            conn.query(update, (err, results) => {
              if (err) {
                res.status(500).send("Error in updating : " + err);
              } else {
                res.status(200).send("Record updated");
              }
            });
          }
        }
      );
    } catch (err) {
      res.status(500).send("Error in updating: " + err);
    }
  } else {
    res.status(500).send("Without data not possible to update");
  }
});

app.listen(5000);
