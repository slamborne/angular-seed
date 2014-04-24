'use strict';

angular.module('template.directive', []).
  directive('templateDirective', function() {
    return {
      restrict: 'E',
      templateUrl: './components/template/template-directive.html',
      link: function link(scope, element, attrs) {
      }
    };
  });