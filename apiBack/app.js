const express = require("express")
const cors = require("cors")
const app = express()
require('dotenv').config();
app.use(cors())

app.use(express.json())
//DB conection
const conn = require("./config")
conn();

//routes
const routes = require("./routes/router")
app.use("/api",routes)

app.listen(3000, function(){
    console.log("Servidor Online")
})
