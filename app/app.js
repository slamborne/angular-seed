'use strict';

angular.module('app', ['ngRoute']).
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

    $routeProvider.when('', '/').otherwise({redirectTo: '/'});

  }).
  run(function($rootScope, settings) {

    console.log('app::run()');

  });
