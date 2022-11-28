var express = require('express')
var bodyparser = require('body-parser')
const path = require('path')
const routes = require("./routes")
const { session } = require("./routes")
const cors = require('cors')

const app = express()

app.use(
    session({
        secret: 'secret',
        resave: true,
        saveUninitialized: true,
    })
)
app.use(express.json({limit: '50mb'}));
app.use('/api', routes)


app.use(express.static(path.join(__dirname,"docs")))
app.use('/', express.static(path.join(__dirname,"docs")))
app.use(cors({
    Access_Control_Allow_Origin: "*",
    origin:"*",
    methods:['GET','POST','PATCH','DELETE','PUT'],
    allowedHeaders:'Content-Type, Authorization, Origin, X-Requested-With, Accept'
  
  })); 
  
app.use(function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
});

PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log("started on", PORT);
    console.log(__dirname+'./docs');
})
