// import files and packages up here
var express = require('express');
var morgan = require('morgan');
const fs = require('fs');
let topspots = require('./data.json');


// create your express server below
var app = express ();
app.use(morgan('combined'));
app.get('/', function(request, response){
    response.setHeader('Content-Type', 'text/html')
    response.status(200);
    response.send('ok')
    
})

app.get('/data', function(request, response){
    //response.setHeader('Content-Type', 'text/html')
    response.status(200);
    response.json(topspots);
    
})
app.use(express.static(__dirname + '/public'));


// finally export the express application
module.exports = app;

