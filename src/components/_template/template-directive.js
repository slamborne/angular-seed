angular.module('template.directive', []).
  directive('templateDirective', function() {
    'use strict';
    return {
      restrict: 'E',
      templateUrl: './components/template/template-directive.html',
      link: function link(scope, element, attrs) {
      }
    };
  });
