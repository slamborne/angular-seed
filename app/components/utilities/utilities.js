'use strict';

angular.module('utilities', [])
  /**
   * utility service
   * @module util
   **/
  .service('utilities', function() {

    /**
     * @function readTree
     * @description get dot notation data (branch) from an object (trunk)
     * @param {string} branch - a dot notation string. for single index arrays, "[0]", is optional
     * @param {object} trunk - object containing potential branch data
     * @param {string} [separator=.] - the separator used to split the branch string
     * */
    this.readTree = function(branch, trunk, separator){

      return (function readTree(branch, trunk, separator) {

        if (angular.isUndefined(separator)) {
          separator = '.';
        }

        var split = branch.split(separator);
        var newTrunk, property, index, indexRegEx;

        if (split[0] !== undefined) {

          indexRegEx = split[0].match(/\[([^\]]+)\]/);

          property = split[0].replace(/\[([^\]]+)\]/, '');

          if (indexRegEx !== null && angular.isDefined(indexRegEx[1])) {
            index = indexRegEx[1];
          }

          if (trunk.hasOwnProperty(property)) {

            if (angular.isDefined(index)) {
              newTrunk = trunk[property][index];
            } else {
              if (trunk[property].length === 1) {
                newTrunk = trunk[property][0];
              } else {
                newTrunk = trunk[property];
              }
            }

            if (angular.isUndefined(split[1])) {
              return newTrunk;
            } else {
              return readTree(split.slice(1).join(separator), newTrunk);
            }
          }

        }
      }(branch, trunk, separator));

    };

  });