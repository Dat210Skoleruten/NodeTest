var express = require('express');
var app = express();

app.get('/data', function(req, res){
  res.sendFile(path.join(__dirname + '/index.html'));
  //res.send('hello world with data'); //replace with your data here
});

app.listen(process.env.PORT || 3000);