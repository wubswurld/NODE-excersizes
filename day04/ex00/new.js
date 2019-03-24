var http = require("http");
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true });
 
// Running Server Details.
var server = app.listen(8082, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at localhost:8082/")
});
 
 
app.get('/', function (req, res) {
  var html='';
  html +="<body>";
  html += "<form action='/thank'  method='post' name='form1'>";
  html += "Username:</p><input type= 'text' name='user'>";
  html += "<br>";
  html += "Password:</p><input type='text' name='pass'>";
  html += "<br>"
  html += "<input type='submit' value='submit'>";
  html += "</form>";
  html += "</body>";
  res.send(html);
});
 
app.post('/thank', urlencodedParser, function (req, res){
  var reply='';
  reply += "Your Username:" + req.body.user;
  reply += "Your Password:" + req.body.pass; 
  console.log(reply)
  res.send("thank you");
 });
