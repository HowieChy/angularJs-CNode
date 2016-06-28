'use strict';

var forum = angular.module('forum', [
  'ngRoute',
  'forumControllers',
  'forumServices',
  'forumDirective',
  'forumFilters'
]);

forum.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
    .when('/all/list', {
        templateUrl: 'tempalte/all.html',
        controller: 'list'
      })
    .when('/:id', {
        templateUrl: 'tempalte/info.html',
        controller: 'info'
      })
   /* .when('/ddd/:shopId', {
        templateUrl: 'tempalte/商品详情.html',
        controller: 'xq'
    })*/
    .otherwise({
        redirectTo: '/all/list'
      });


  }]);


