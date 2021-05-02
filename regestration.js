//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
// const mongoose = require("mongoose");

const app = express();

app.use(express.static("public")); //for CSS and images

app.use(bodyParser.urlencoded({extended: true}));
app.get("/login", function(req, res){

  res.sendFile(__dirname + "/login.html");
});

app.get('/login', function(req, res) {
  res.render('login');
});

app.get('/register', function(req, res) {
  res.render('register');
});

app.listen(3000, function() {
  console.log("This server is running on port 3000");
});