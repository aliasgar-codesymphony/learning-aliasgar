const express = require("express");
const mysql2 = require("mysql2");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const conn = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb",
});

app.get("/", (req, res) => {
  res.send("This is mysql practice");
});

/* conn.connect((err) => {
  if (err) {
    console.log("Error connecting to Mysql" + err);
  } else {
    console.log("Connected to Mysql");
  }
});
 */
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

app.get("/insert/name/:name/email/:email", (req, res) => {
  conn.query("select * from users", (err, results) => {
    if (err) {
      console.log("error in selecting " + err);
    } else {
      //console.log(results);

      let name = "";
      let email = "";
      results.forEach((i) => {
        if (i.name == req.params.name && i.email == req.params.email) {
          name = i.name;
          email = i.email;
        }
      });

      if (name == "" && email == "") {
        const insert = `
         insert into users(name,email) values('${req.params.name}','${req.params.email}')
          `;

        conn.query(insert, (err, results) => {
          if (err) {
            console.log("Error in inserting : " + err);
            res.status(500).send("Error in inserting");
          } else {
            console.log(results);
            res.send("record inserted");
          }
        });
      } else {
        res.send("User Already exists");
      }
    }
  });
});

app.get("/delete/id/:id", (req, res) => {
  conn.query(
    `select * from users where id=${req.params.id}`,
    (err, results) => {
      if (err) {
        console.log("error in selecting " + err);
      } else {
        let id = 0;

        results.forEach((i) => {
          if (i.id == req.params.id) {
            id = i.id;
          }
        });

        if (id != 0) {
          const del = `
      delete from users where id=${req.params.id}
    `;
          conn.query(del, (err, results) => {
            if (err) {
              console.log("Error in deleting : " + err);
              res.status(500).send("Error in deleting");
            } else {
              console.log(results);
              //res.send(req.params.id + "th record deleted");
              res.redirect("/users");
            }
          });
        } else {
          res.send("User Not Exists, please give proper id");
        }
      }
    }
  );
});

app.get("/users", (req, res) => {
  const select = `
    select * from users
  `;
  conn.query(select, (err, results) => {
    if (err) {
      console.log("Error in selecting : " + err);
      res.status(500).send("Error in selecting");
    } else {
      console.log(results);
      res.set("Content-Type", "text/html");
      let table =
        "<html><center><table border=1 cellpadding=10 cellspacing=0 >";

      table += `
        <tr>
          <th>id</th>
          <th>name</th>
          <th>email</th>
        </tr>
      `;
      results.forEach((i) => {
        table += `
        <tr>
          <td>${i.id}</td>
          <td>${i.name}</td>
          <td>${i.email}</td>
        </tr>
        `;
      });
      table += "</table></center></html>";

      res.send(table);
    }
  });
});

app.get("/update/id/:id/name/:name/email/:email", (req, res) => {
  conn.query(
    `select * from users where id=${req.params.id}`,
    (err, results) => {
      if (err) {
        console.log("error in selecting " + err);
      } else {
        let id = 0;

        results.forEach((i) => {
          if (i.id == req.params.id) {
            id = i.id;
          }
        });

        if (id != 0) {
          const update = `
    update users set name='${req.params.name}', 
    email='${req.params.email}' 
    where id=${req.params.id}
  `;

          conn.query(update, (err, results) => {
            if (err) {
              console.log("Error in updating : " + err);
              res.status(500).send("Error in updating");
            } else {
              console.log(results);
              res.send("record updated");
            }
          });
        } else {
          res.send("User Not Exists, please give proper id");
        }
      }
    }
  );
});

app.post("/postdata", (req, res) => {
  const insert = `
      insert into users(name,email) values('${req.body.name}','${req.body.email}')
    `;

  conn.query(insert, (err, results) => {
    if (err) {
      console.log("Error inserting " + err);
      res
        .status(500)
        .send('Not able to insert in database');
    } else {
      console.log(results);
      res
        .status(200)
        .send("Record inserted successfull");
    }
  });
});

app.listen(5000);
