var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('hello world'); //replace with your data here
});

app.listen(3000);