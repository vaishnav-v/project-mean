const { string } = require('joi')
const mongoose = require('mongoose')
var url  ='mongodb+srv://vav:vav@cluster0.skmwmfr.mongodb.net/login?retryWrites=true&w=majority'
mongoose.connect(url)

const db = mongoose.connection
db.on('error', console.log.bind(console, "error")) //database connection
db.once('open', (x) => {
    console.log("connection successful");
})

//article Schema
const articleSchema = new mongoose.Schema({
    articleName:{
        type:'string',
        required : true
    },
    content:{
        type:'string',
        required:true
    },
    uploadDate:{
        type:'string',
        required:true
    }

})

const articlesCollection = mongoose.model('details',articleSchema) //collection and schema
module.exports = articlesCollection