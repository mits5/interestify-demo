const express = require("express");
const app     = express();

app.use(express.static(__dirname + '/public'));
//Store all HTML files in public folder.
app.use(express.static(__dirname + '/script'));
//Store all JS and CSS in script folder.

app.get('/',function(req,res){
  res.sendFile('index.html');
  //It will find and locate index.html from View or Scripts
});

app.listen(3000);

console.log("Running at Port 3000");
