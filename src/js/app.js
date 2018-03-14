var routerApp = angular.module('routerApp', ['ui.router', 'angular-loading-bar'])
	.config(['cfpLoadingBarProvider', function (cfpLoadingBarProvider) {
		cfpLoadingBarProvider.includeSpinner = false;
	}]);

routerApp.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

	$urlRouterProvider.otherwise('/home');

	$stateProvider

		.state('home', {
			url: '/home',
			templateUrl: 'partials/home.html'
		})

		.state('about', {
			url: '/about',
			templateUrl: 'partials/about.html'
		})

		.state('contact', {
			url: '/contact',
			templateUrl: 'partials/contact.html'
		})

		.state('team', {
			url: '/team',
			templateUrl: 'partials/team.html'
		})

		.state('history', {
			url: '/history',
			templateUrl: 'partials/history.html'
		})

		.state('alumni', {
			url: '/alumni',
			templateUrl: 'partials/alumni.html'
		});
	
	// $locationProvider.html5Mode(true);
});