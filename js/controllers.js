'use strict';


var forumControllers = angular.module('forumControllers', ['ngResource','ngSanitize']);

//列表页
forumControllers.controller('list', ['$scope','$http','$resource','$location','$rootScope','$state',
  function($scope,$http,$resource,$cacheFactory,$location,$rootScope,$state) {
      /*    $scope.num=1;
       $resource('https://cnodejs.org/api/v1/topics?tab=all&page='+ $scope.num).get(function(data){
       /!*console.log(data.data)*!/
       $scope.all=data.data;
       });
       $scope.next=function(){
       $scope.num++;
       $resource('https://cnodejs.org/api/v1/topics?tab=all&page='+ $scope.num).get(function(data){
       $scope.all=$scope.all.concat(data.data)
       });
       };*/
      $scope.$on('$stateChangeSuccess',
          function(event, toState, toParams, fromState, fromParams){
              //console.log(1);
          });

      //首页加载
      $scope.num=1;
      $http({
          method: 'get',
          url: 'https://cnodejs.org/api/v1/topics?tab=all&page=' + $scope.num,
          cache: 'true'
      }).success(function (data) {
          $scope.all = data.data;
      });

      //下一页加载
      $scope.door=true;
      $scope.next = function () {
          if($scope.door){
              $scope.door=false;
              $scope.num++;
              $http({
                  method: 'get',
                  url: 'https://cnodejs.org/api/v1/topics?tab=all&page=' + $scope.num,
                  cache: 'true'
              }).success(function (data) {
                  $scope.all = $scope.all.concat(data.data);
                  /*console.log(data.data);*/
                  $scope.door=true;;
              });
          }

      };

  }
  ]);

//详情页
forumControllers.controller('info', ['$scope','$http','$resource','$location',
    function($scope,$http,$resource,$location) {
          /*  $scope.num=1;
            $resource('https://cnodejs.org/api/v1/topics?tab=all&page='+ $scope.num).get(function(data){
                console.log(data.data)
                $scope.all=data.data;
            });*/
          $scope.number=(function(){
              var a=$location.path();
              a= a.substring(4);
              return a
          })();

        $scope.$on('$stateChangeSuccess',
            function(event, toState, toParams, fromState, fromParams){
                console.log(2);
            });

         // console.log($scope.number);
          $http({
                method:"get",
                url:'https://cnodejs.org/api/v1/topic'+$scope.number,
                params:{'mdrender':'true'}
                }).success(function(data){
                      $scope.data=data.data;
                      $scope.info=$scope.data.content;
                      $scope.all=$scope.data.replies;
                })

        }
]);




