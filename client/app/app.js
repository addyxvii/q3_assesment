
angular.module('warRoom', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider){


    $urlRouterProvider.otherwise('/');

    $stateProvider.state('settings', {
      templateUrl: 'views/settings.html',
      controller: '',
      url: '/settings'
    }).state('overview', {
      templateUrl: 'index.html',
      controller: '',
      url: '/'
    })
  })
