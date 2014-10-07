angular.module('template', ['ngRoute', 'template.controller', 'template.directive', 'template.service']).
  config(function($routeProvider) {
    'use strict';
    $routeProvider.when('/template', {
      controller: 'TemplateController',
      templateUrl: './components/template/template-controller.html'
    });
  }).
  run(function($rootScope) {
    'use strict';
    console.log('template::run()');
  });
