const cookieParser = require("cookie-parser");
const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(express.static("public"));
//app.use(morgan("tiny"));
app.use(cookieParser());

const requestTime = (req, res, next) => {
  const date = new Date();
  req.requestTime = date.toLocaleString();
  next();
};
app.use(requestTime);
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

const myLogger = (req, res, next) => {
  const date = new Date();
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
  res.send(`Hii, How are you ? ${req.requestTime}`);
});

app.get("/data", (req, res) => {
  res.send("This is dummy data, URL : " + req.originalUrl);
});

app.get("/query", (req, res) => {
  //res.send(req.query.q+ " "+ req.query.r);
  res.send(req.query);
});

app.set("appname", "MyPractice");

app.get("/reqobj", (req, res) => {
  //res.send(req.query.q+ " "+ req.query.r);
  res.send(
    req.method +
      " " +
      req.url +
      " " +
      req.path +
      " " +
      req.ip +
      " " +
      req.app.get("appname")
  );
});

app.get("/jsondata", (req, res) => {
  res.json({ message: "This is json data", success: true });
});

app.get("/redir", (req, res) => {
  res.redirect("/demo.html");
});

app.get("/set-cookie", (req, res) => {
  res.cookie("myCookie", "cookie1");
  res.send("cookie set successfully");
});

app.get("/get-cookie", (req, res) => {
  const cookieValue = req.cookies.myCookie;
  if (cookieParser) {
    res.send("Value of myCookie is " + cookieValue);
  } else {
    res.send("cookie not found");
  }
});

app.get("/clear-cookie", (req, res) => {
  res.clearCookie('myCookie');
  res.send("cookie cleared");
});



app.listen(5000, () => {
  console.log("server runnning on port 5000");
});
