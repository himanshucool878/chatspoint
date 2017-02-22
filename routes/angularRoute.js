chatsPoint.config(function($routeProvider){
	$routeProvider.when('/', {templateUrl:"/get-started.html"});
	$routeProvider.when('/login', {templateUrl:"login.html"});
	$routeProvider.when('/create_account', {templateUrl:"/create-account.html"});
});