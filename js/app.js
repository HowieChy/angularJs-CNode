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
                currentDetails: function($http) {
                    return     $http({
                        method: 'get',
                        url: 'https://cnodejs.org/api/v1/topics?tab=all&page=1'
                    })
                },
                person: function() {
                }
            }
          })
        //.state('start.son', {
        .state('son', {
            url:'/all/:id',
            templateUrl: 'tempalte/info.html',
            controller: 'info'
          })
       /* .when('/ddd/:shopId', {
            templateUrl: 'tempalte/商品详情.html',
            controller: 'xq'
        })*/


  }]);


/*forum.run(['$rootScope', '$state', '$stateParams',
    function ($rootScope, $state, $stateParams) {
        //监听路由事件  参数有：event，toState，toParams，fromState，fromParams，error
        $rootScope.$on('$stateChangeStart',
        function(event, toState, toParams, fromState, fromParams){
            console.log(toParams);
        })
    }
]);*/
