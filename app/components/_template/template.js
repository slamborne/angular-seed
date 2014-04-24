'use strict';

angular.module('template', ['ngRoute', 'template.controller', 'template.directive', 'template.service']).
  config(function($routeProvider) {
    $routeProvider.when('/template', {
      controller: 'TemplateController',
      templateUrl: './components/template/template-controller.html'
    });
  }).
  run(function($rootScope) {

    console.log('template::run()');

  });