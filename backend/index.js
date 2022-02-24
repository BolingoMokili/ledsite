

const express = require("express")
const mongoose = require("mongoose")
const port = 5000
const app = express()
const {MONGOURI} = require("./valueKeys.js")

app.listen(port,()=>{
  console.log(`server is listening on port ${port}`);
})

// this is our database access password  cluster1234#$
mongoose.connect(MONGOURI)

mongoose.connection.on('connected',()=>{
  console.log("we are connected to the server i.e mongoDB");
})

mongoose.connection.on('error',()=>{
  console.log("we are not connected to the server i.e mongoDB");
})



