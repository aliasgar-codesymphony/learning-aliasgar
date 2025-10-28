import data from "./user.json" with {type:"json"};

import express from "express";

const app = express();

/* app.get("/", (req, res) => {
  res.send("Hello World");
}); */

app.get("/", (req, res) => {
  res.send(data);
});

app.get("/:id", (req, res) => {

  data.forEach((i)=>{
    if(i.id==req.params.id){
    res.send(i);
    }
  });
});

app.listen(3000, () => {
  console.log("App running on 3000 port");
});
