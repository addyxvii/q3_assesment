
angular.module('warRoom', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider){


    $urlRouterProvider.otherwise('/');

    $stateProvider.state('settings', {
      templateUrl: 'views/settings.html',
      controller: 'HomeController',
      url: '/settings'
    }).state('overview', {
      templateUrl: '/',
      controller: 'DetailController',
      url: '/'
    })
  })
