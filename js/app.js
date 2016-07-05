'use strict';

var forum = angular.module('forum', [
  'ui.router',
  'forumControllers',
  'forumServices',
  'forumDirective',
  'forumFilters'
]);
forum.config(['$stateProvider','$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise("/all");

      $stateProvider
        .state('start', {
            url:'/all',
            templateUrl: 'tempalte/all.html',
            controller: 'list',
            resolve:{
                person: function() {
                },
                currentDetails: function($http) {
                    return     $http({
                        method: 'get',
                        url: 'https://cnodejs.org/api/v1/topics?tab=all&page=1'
                    })
                }
            },
            onEnter:function($rootScope,$timeout){
                function  setTop(target){
                    document.documentElement.scrollTop=target ;
                    document.body.scrollTop=target;
                }
                $timeout(function(){
                    setTop($rootScope.allScroll)
                })
            },
            onExit:function($rootScope){
                var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                $rootScope.allScroll=scrollTop;
            }
          })
        //.state('start.son', {
        .state('son', {
            url:'/all/:id',
            templateUrl: 'tempalte/info.html',
            controller: 'info'
          })

  }]);

