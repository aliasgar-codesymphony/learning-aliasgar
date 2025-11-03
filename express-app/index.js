import data from "./user.json" with {type:"json"};

import express from "express";
import cors from 'cors';
const app = express();

/* app.get("/", (req, res) => {
  res.send("Hello World");
}); */

app.use(cors());


app.get("/", (req, res) => {

  const obj = {
    message:"Data Received",
    alldata: data
  }
  res.status(200).send(obj);
});

app.get("/:id", (req, res) => {
const id=req.params.id;
  try{
    if(id>0 && id<6){
      data.forEach((i)=>{
      if(i.id==req.params.id){
      const obj = {
     message:"Data Received",
     data: i
    }
      res.status(200).send(obj);
      }
    });
    }
    else{
      res.status(500).send('Error: id should > 0  and < 6'); 
    }

  }
  catch(err){
    res.send(err);
  }
  
});

app.listen(3000, () => {
  console.log("App running on 3000 port");
});
