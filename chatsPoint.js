var http = require('http')
var express = require('express');
var session = require('express-session');
// var md5 = require('md5');
const bodyParser = require('body-parser');
var app = express();
var mongoConnection = require(__dirname + '/public/javascripts/chatsPointFunctions.js').mongoConnection;
app.use(express.static('public'));
app.use(express.static('routes'));
app.use(express.static('views'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(session({ secret: 'keyboard cat',saveUninitialized: false,
     resave: false, cookie: { maxAge: 60000 }}));


app.get('/', function (req,res) {
	res.sendFile(__dirname + '/views/home.html');
});


app.post('/testing', function (req, res) {
    mongoConnection(function(db){
    	 db.collection("create_account").insert(req.body, function(err, result){
    	if(err){
    		console.log("Error inserting in db!");
    	}
    	else{
    		console.log("Inserted");
    		db.close();
    	}
    });

    });
    res.send("post handled successfully !!")
});


app.post('/login', function(req, res){
	console.log(req.body);

	var user_email_id = req.body.emailId;
	var user_pass = req.body.user_password;
	var user_info = [];
mongoConnection(function(db,err){
		 db.collection("create_account").find({$and:[
			{$or:[
				{'email_id':user_email_id}, 
				{'user_name':user_email_id}
			]},
			{'confirm_pass':user_pass}
			]}, function(err,fetch_data){
				if(fetch_data){	
			fetch_data.forEach(function(doc,err){
				user_info.push(doc);
			},function(){
				var userInfo= user_info[0];
				if(userInfo){
					req.session.user_Name = userInfo.user_name;
					console.log(req.session.user_Name);
					res.send("Login Successfully" + req.session.user_Name);
					db.close();
				}
				else{
					console.log("Invalid Username or Password!");
					db.close();
				}
		
			});
		}
			});

		
	});

});

console.log("testing")


http.createServer(app).listen(8000, function() {
    console.log('Express server listening on port ' +8000);
});