var express = require('express');
var app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req,res){
	res.sendFile('/Users/Akash/Chatspoint/views/login.html');
});

app.listen(8800, function(){
	console.log("Server has started at port 8800");
});