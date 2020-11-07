var express = require('express');
var app = express();
const path = require('path');

app.get('/',function(req,res){
 res.sendFile(path.join(__dirname, 'homepage.html'));
});
app.get('/Players',function(req,res){
 res.sendFile(path.join(__dirname, 'Players.html'));
});
app.get('/Table',function(req,res){
 res.sendFile(path.join(__dirname, 'Table.html'));
});

app.listen(3000, function () {
 console.log('Example app listening on port 3000!');
});
