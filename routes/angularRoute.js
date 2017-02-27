chatsPoint.config(function($routeProvider){
	$routeProvider.when('/login', {controller:"LoginController", templateUrl:"login.html"});
	$routeProvider.when('/create-account', {controller:"CreateAccountController", templateUrl:"/create-account.html"});
	$routeProvider.when('/welcome', {controller:"WelcomeController", templateUrl:"/welcome.html", resolve:{
		message: function(messageService){
                return messageService.getMessage(); 
            }
        }});
});

