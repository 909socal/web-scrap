'use strict'

var express = require('express'); 
var api = require('./routes/api')
var app = express(); 

app.use('/api', api)


app.listen(process.env.PORT || 3000); 

//API Spec Discussion 
// GET mywebsite.com/api/top-movies  // get a list of top movies 
//1. Node core require
//2. third party libraries (express, stormpath, request)
//3. your local modules (lib , routes, api)