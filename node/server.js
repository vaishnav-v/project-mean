var express = require('express')
var bodyparser = require('body-parser')
const path = require('path')
const routes = require("./routes")
const cors = require('cors')

const app = express()
app.use(express.json())
app.use('/api', routes)
app.use(express.static(path.join(__dirname,"docs")))
app.use('/', express.static(path.join(__dirname,"docs")))
app.use(cors({
    Access_Control_Allow_Origin: "*",
    origin:"*",
    methode:['GET','POST','PATCH','DELETE','PUT'],
    allowedHeaders:'Content-Type, Authorization, Origin, X-Requested-With, Accept'
  
  })); 
app.use(function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
});

PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log("started on", PORT);
    console.log(__dirname+'./docs');
})
