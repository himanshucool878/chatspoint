var angularControllers = {};
angularControllers.FirstController = function($scope, $http){
	$scope.formModel = {};

	$scope.createAccount = function(){
	
	$http.post('/testing',$scope.formModel).success(function(data){
		console.log(data);
	});

	};

	

};

angularControllers.LoginController = function($scope, $http){
	$scope.loginFormModel = {};

	$scope.loginAccount = function(){

	$http.post('/login',$scope.loginFormModel).success(function(data){
		console.log(data);
	});

	};

};

chatsPoint.controller(angularControllers);


