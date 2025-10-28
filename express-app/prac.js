const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(express.static("public"));
app.use(morgan("common"));
/* app.use((req, res, next) => {
  console.log("Hello from middleware 1");
  next();
});

app.use((req, res, next) => {
  console.log("Hello from middleware 2");
  next();
});

app.use("/user", (req, res, next) => {
  console.log("Request Type : ", req.method);
}); */

const date = new Date();

const myLogger = (req, res, next) => {
  console.log(
    `Logged at ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
  );
  next();
};

//app.use("/data", myLogger);

/* app.use((req, res, next) => {
  console.log(`Request Received= method : ${req.method}, url : ${req.url}`);
  next();
});
 */

/* app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send("Something went wrong");
}); */

app.get("/", (req, res) => {
  res.send("Hii, How are you ?");
});

app.get("/data", (req, res) => {
  res.send("This is dummy data, URL : " + req.url);
});

app.listen(5000, () => {
  console.log("server runnning on port 5000");
});
