
(function(){
	
	var routerApp = angular.module('routerApp', ['ngAnimate', 'ui.router', 'anim-in-out', 'angular-loading-bar'])
		.config(['cfpLoadingBarProvider', function (cfpLoadingBarProvider) {
			cfpLoadingBarProvider.includeSpinner = false;
		}])
		.run(['$rootScope', '$state', '$stateParams',
			function ($rootScope, $state, $stateParams) {
				$rootScope.$state = $state;
				$rootScope.$stateParams = $stateParams;
		}]);

	routerApp.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

		$urlRouterProvider.otherwise('/404');

		$stateProvider

			.state('index', {
				url: '/',
				templateUrl: 'partials/home.html',
				data: { pageTitle: 'ProjectBeta 2018' },
				onEnter: function() {
					uiContainer.style.justifyContent = "flex-start";
				}
			})

			.state('404', {
				url: '/404',
				templateUrl: 'partials/404.html',
				data: { pageTitle: '404 \u00B7 ProjectBeta 2018' }
			})

			.state('home', {
				url: '/home',
				templateUrl: 'partials/home.html',
				data: { pageTitle: 'ProjectBeta 2018' },
				onEnter: function() {
					if (isMobile) {
						setTimeout(sidebarClose, 100);
					}
					mainEl.scroll(0,0);
					uiContainer.style.justifyContent = "flex-start";
				}
			})

			.state('about', {
				url: '/about',
				templateUrl: 'partials/about.html',
				data: { pageTitle: 'About \u00B7 ProjectBeta' },
				onEnter: function() {
					if (isMobile) {
						setTimeout(sidebarClose, 100);
					}
					mainEl.scroll(0,0);
					uiContainer.style.justifyContent = "space-between";
				}
			})

			.state('contact', {
				url: '/contact',
				templateUrl: 'partials/contact.html',
				data: { pageTitle: 'Contact \u00B7 ProjectBeta' },
				onEnter: function() {
					if (isMobile) {
						setTimeout(sidebarClose, 100);
					}
					mainEl.scroll(0,0);
					uiContainer.style.justifyContent = "space-between";
				}
			})

			.state('team', {
				url: '/team',
				templateUrl: 'partials/team.html',
				data: { pageTitle: 'Team \u00B7 ProjectBeta' },
				onEnter: function() {
					if (isMobile) {
						setTimeout(sidebarClose, 100);
					}
					mainEl.scroll(0,0);
					uiContainer.style.justifyContent = "space-between";
				}
			})

			.state('history', {
				url: '/history',
				templateUrl: 'partials/history.html',
				data: { pageTitle: 'History \u00B7 ProjectBeta' },
				onEnter: function() {
					if (isMobile) {
						setTimeout(sidebarClose, 100);
					}
					mainEl.scroll(0,0);
					uiContainer.style.justifyContent = "space-between";
				}
			})

			.state('alumni', {
				url: '/alumni',
				templateUrl: 'partials/alumni.html',
				data: { pageTitle: 'Alumni \u00B7 ProjectBeta' },
				onEnter: function() {
					if (isMobile) {
						setTimeout(sidebarClose, 100);
					}
					mainEl.scroll(0,0);
					uiContainer.style.justifyContent = "space-between";
				}
			});
		
		$locationProvider.html5Mode(true);
	});
}());