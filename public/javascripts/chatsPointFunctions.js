var mongo = require('mongodb');
var url = 'mongodb://localhost:27017/chatspoint';

exports.mongoConnection = function(callback){
	mongo.connect(url, function(err, db){
	 if(err){
		console.log("Something went wrong!!");
	}
	 else{
   		callback(db);
		
 		}
 	});
};

