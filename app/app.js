angular.module('app', ['ngRoute', 'app.controller']).
  constant('constant', {
    'NAME': 'value'
  }).
  value('settings', {
    api: {
      baseUrl: '',
      timeout: 4000
    },
    application: {
    }
  }).
  config(function($routeProvider, $locationProvider) {
    'use strict';
    $routeProvider.when('', '/').otherwise({redirectTo: '/'});
    $routeProvider.when('/', {
      controller: 'AppController',
      templateUrl: './app-controller.html'
    });
  }).
  run(function($rootScope, settings) {
    'use strict';
    console.log('app::run()');
  });
