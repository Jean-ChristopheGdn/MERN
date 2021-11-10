var express = require("express");
var app = express();
var port = 3000;
var bodyParser = require ('body-parser');
app.use (bodyParser.json ()); 
app.use (bodyParser.urlencoded ({extended: true}));

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;mongoose.connect("mongodb://localhost:27017/mern-pool");

app.post ("/addstudent", (req, res) => { 

    var Student = mongoose.model("students", studentSchema);
    var myData = new Student (req.body); 

    myData.save ()

    .then (item => { 
    res.send ("New student saved in database"); 
    }) 

    .catch (err => { 
    res.status (400) .send ("Unable to save to database !"); 
    });
});



var studentSchema = new mongoose.Schema({
    lastname: String,
    firstname: String,
    email: String,
    phone: String,
    validated: String,
    admin: Boolean
   });

   var Student = mongoose.model("Student", studentSchema);

   app.use("/", (req, res) => {

    res.sendFile(__dirname + "/index.html");

   });
 
app.listen(port, () => {

 console.log("Server listening on port " + port);

});