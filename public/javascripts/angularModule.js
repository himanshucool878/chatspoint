var chatsPoint = angular.module('chatsPoint', ['ngRoute']);

// chatsPoint.factory('aut' , function($http, $scope){
// 	var authService = function(){
// 		if($scope.name){
// 			return true;
// 		}
// 		else{
// 			return false;
// 		}
// 	}
// });

chatsPoint.factory("messageService", function($q){
	console.log("hhhhh")
    return {
        getMessage: function($scope){   
        	// return $q.when("Hello World!");
            if($scope.name){
            	console.log("coming here");
            	return true;
            }
            else{
            	console.log("not comming here")
            	return false;
            }
        }
    };
});