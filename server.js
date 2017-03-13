// var express = require('express');
// var app = express();
// console.log("I am running so hot right now");
// app.get('/data', function(req, res){
//   //res.sendFile(path.join(__dirname + '/index.html'));
//   res.send('hello world with data'); //replace with your data here
// });

// app.listen(process.env.PORT || 3000);


 var http = require('http')
 var port = process.env.PORT || 1337;
 http.createServer(function(req, res) {
   res.writeHead(200, { 'Content-Type': 'text/plain' });
   response.writeHead(301,
  {Location: 'http://nodeskoleruter.azurewebsites.net/index.html'}
  );
  res.end();


 //  res.end('Hello World\n');
   
 }).listen(port);