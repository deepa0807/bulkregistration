var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    Users = require("./models/user");
var fileUpload = require('express-fileupload');
var server = require('http').Server(app);
var template = require('./template.js');
 
app.use(fileUpload());

app.use(bodyParser.urlencoded({ extended: true }));
// create a database Yelpcamp and connect to it
mongoose.connect('mongodb://localhost/bulk_registration');
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

 
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});
   
app.get('/template', template.get);

var upload = require('./upload.js');
app.post('/', upload.post);


// var fs= require('fs');
// var csv= require('fast-csv');


// fs.createReadStream('user_details.csv')
// .pipe(csv())
// .on('data', function(data){
//   console.log(data)
// })
// .on('end',function(data){
//     console.log("Read finished");
// })

app.listen(9002, function () {
    console.log("The bulk_registration Server Has Started!");
});
