var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('Hello Homepage');
});

app.get('/login', function(req, res){
  res.sendFile(__dirname + "/"+"SignUp.html");
})

app.listen(3000, function(){
  console.log('Connected 3000 port!');
})
