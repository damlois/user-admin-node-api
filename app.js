const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = require('./routes/TerraRoute')
const port = process.env.PORT  || 8000;
const app = express();



const mongoDB = 'mongodb://Lois_Adex:dataee1@ds257808.mlab.com:57808/terra';
mongoose.connect(mongoDB, { useNewUrlParser: true }); 
mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', router);
app.use(function(err,req,res,next){
    console.log(err);
    res.status(422).send({error: err.message})
});

app.listen(port, ()=>{
    console.log('listening on port' + port);
})
