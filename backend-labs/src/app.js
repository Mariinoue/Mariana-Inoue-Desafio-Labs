const express= require('express')
const app= express()
require('./models/delivery')
app.use(express.json())

const index = require("./routes/index")
const deliveries = require('./routes/deliveriesRoutes')

app.use(function(req,res,next){
  res.header('Access-Control-Allow-Origin','*')
  res.header(
    'Access-Control-Allow-Headers',
    'origin, X-Request-With, Content-Type, Accept'
  )
  next()
})

app.options("/*", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers")
    res.header(
        "Access-Control-Allow-Methods",
        "PUT,POST,GET,DELETE,OPTIONS,PATCH"
    );
    res.send("send some thing whatever")
})

app.use("/", index)
app.use('/deliveries', deliveries)

module.exports= {
  app
} 