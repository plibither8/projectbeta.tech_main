
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

(function () {
	'use strict';

	var module = angular.module('hj.animInOut', ['ngAnimate']);

	angular.module('anim-in-out', ['hj.animInOut']);

	module.animation('.anim-in-out', ['$rootScope', '$timeout', '$window',
		function ($rootScope, $timeout, $window) {
			return {
				enter: function (element, done) {
					var sync = $rootScope.$eval(angular.element(element).attr('data-anim-sync')) !== undefined ? $rootScope.$eval(angular.element(element).attr('data-anim-sync')) : false,
						speed = angular.element(element).attr('data-anim-speed') !== undefined ? $rootScope.$eval(angular.element(element).attr('data-anim-speed')) : 1000,
						inSpeed = angular.element(element).attr('data-anim-in-speed') !== undefined ? $rootScope.$eval(angular.element(element).attr('data-anim-in-speed')) : speed,
						outSpeed = angular.element(element).attr('data-anim-out-speed') !== undefined ? $rootScope.$eval(angular.element(element).attr('data-anim-out-speed')) : speed;

					try {
						var observer = new MutationObserver(function (mutations) {
							observer.disconnect();

							$window.requestAnimationFrame(function () {
								$timeout(done, sync ? 0 : outSpeed);
							});
						});

						observer.observe(element[0], {
							attributes: true,
							childList: false,
							characterData: false
						});

					} catch (e) {
						$timeout(done, Math.max(100, sync ? 0 : outSpeed));
					}

					angular.element(element).addClass('anim-in-setup');

					return function (cancelled) {
						angular.element(element).removeClass('anim-in-setup');
						angular.element(element).addClass('anim-in');

						if (!cancelled) {
							$timeout(function () {
								$rootScope.$broadcast('animEnd', element, inSpeed);

								angular.element(element).removeClass('anim-in');
							}, inSpeed);
						}
					};
				},
				leave: function (element, done) {
					var speed = angular.element(element).attr('data-anim-speed') !== undefined ? $rootScope.$eval(angular.element(element).attr('data-anim-speed')) : 1000,
						outSpeed = angular.element(element).attr('data-anim-out-speed') !== undefined ? $rootScope.$eval(angular.element(element).attr('data-anim-out-speed')) : speed;

					$rootScope.$broadcast('animStart', element, outSpeed);

					try {
						var observer = new MutationObserver(function (mutations) {
							observer.disconnect();

							$window.requestAnimationFrame(function () {
								angular.element(element).removeClass('anim-out-setup');
								angular.element(element).addClass('anim-out');

								$timeout(done, outSpeed);
							});
						});

						observer.observe(element[0], {
							attributes: true,
							childList: false,
							characterData: false
						});

					} catch (e) {
						angular.element(element).removeClass('anim-out-setup');
						angular.element(element).addClass('anim-out');

						$timeout(done, Math.max(100, outSpeed));
					}

					angular.element(element).addClass('anim-out-setup');
				}
			};
		}
	]);

})();
