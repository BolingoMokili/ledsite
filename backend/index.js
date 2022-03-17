const express = require("express")
const client = require('./database/database')
const port = 5000
const app = express()

const router = require('./routers/user')

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use('/', router)

const start = async ()=>{
  try {
    client.on("connect", ()=> {
      console.log(`Connected to postgres database with user ${client.user} and to database ${client.database}...`);
  })
  
  client.on("end", ()=>{
      console.log('Database disconnected');
  })
    await client.connect()
    app.listen(()=>{
      console.log(`App listening on port ${port}...`)
    })
  } catch (error) {
    console.log(error.message)
  }
  }


start();




