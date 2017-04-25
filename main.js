var app=angular.module('git',['ngRoute']);
app.config(function($routeProvider){
	$routeProvider
	.when('/',{templateUrl:'contact.html',
	controller  : 'contact'})
	.when('/contact',{templateUrl:'contact.html',
	controller  : 'contact'})
	.when('/resume',{templateUrl:'resume.html',
	controller  : 'resume'})
	.when('/inspirations',{templateUrl:'inspirations.html',
	controller  : 'inspirations'});
});

app.controller('contact',function($scope){
	

	
});
