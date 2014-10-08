angular.module('test', ['ngRoute', 'test.controller', 'tpl-test-controller']).
  config(function($routeProvider) {
    'use strict';
    $routeProvider.when('/test', {
      controller: 'TestController',
      templateUrl: 'tpl-test-controller'
    });
  }).
  run(function($rootScope) {
    'use strict';
    console.log('test::run()');
  });
