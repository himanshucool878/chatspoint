var angularControllers = {};
angularControllers.CreateAccountController = function($scope, $http, $location){
	$scope.formModel = {};

	$scope.createButton = function(){
		$location.path('/create-account');
	}

	$scope.createAccount = function(){
	
	$http.post('/testing',$scope.formModel).success(function(data){
		console.log(data);
	});

	};

	

};


	chatsPoint.controller('LoginController',function($scope, $http, $location){	
		console.log("jjjjjjjjjjjjj")
		// $scope.message = message;
		$scope.loginFormModel = {};

		$scope.loginButton = function(){
			$location.path('/login');
		}

		$scope.loginAccount = function(){

		$http.post('/login',$scope.loginFormModel).success(function(data){
			$scope.name = data;
			console.log(data);
			$location.path("/welcome");
		});

		};
	});

	chatsPoint.controller('WelcomeController', function($scope){
		//$scope.message = message;
		//console.log($scope.message);
	});

chatsPoint.controller(angularControllers);


// chatsPoint.controller('LoginController',['messageService',function($scope, $http, $location, message){