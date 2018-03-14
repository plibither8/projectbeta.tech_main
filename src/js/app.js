var routerApp = angular.module('routerApp', ['ui.router', 'angular-loading-bar'])
	.config(['cfpLoadingBarProvider', function (cfpLoadingBarProvider) {
		cfpLoadingBarProvider.includeSpinner = false;
	}])

	.run(['$rootScope', '$state', '$stateParams',
		function ($rootScope, $state, $stateParams) {
			$rootScope.$state = $state;
			$rootScope.$stateParams = $stateParams;
	}]);

routerApp.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

	$urlRouterProvider.otherwise('/home');

	$stateProvider

		.state('home', {
			url: '/home',
			templateUrl: 'partials/home.html',
			data: { pageTitle: 'ProjectBeta 2018' }
		})

		.state('about', {
			url: '/about',
			templateUrl: 'partials/about.html',
			data: { pageTitle: 'About \u00B7 ProjectBeta' }
		})

		.state('contact', {
			url: '/contact',
			templateUrl: 'partials/contact.html',
			data: { pageTitle: 'Contact \u00B7 ProjectBeta' }
		})

		.state('team', {
			url: '/about/team',
			templateUrl: 'partials/team.html',
    		data: { pageTitle: 'Team \u00B7 ProjectBeta' }
		})

		.state('history', {
			url: '/about/history',
			templateUrl: 'partials/history.html',
    		data: { pageTitle: 'History \u00B7 ProjectBeta' }
		})

		.state('alumni', {
			url: '/about/alumni',
			templateUrl: 'partials/alumni.html',
    		data: { pageTitle: 'Alumni \u00B7 ProjectBeta' }
		});
	
	// $locationProvider.html5Mode(true);
});