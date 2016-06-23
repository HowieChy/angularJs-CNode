'use strict';


var forumControllers = angular.module('forumControllers', ['ngResource','ngSanitize']);

forumControllers.controller('list', ['$scope','$http','$resource','$cacheFactory',
  function($scope,$http,$resource,$cacheFactory) {
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

      //首页加载
      $scope.num = 1;
      $http({
          method: 'get',
          url: 'https://cnodejs.org/api/v1/topics?tab=all&page=' + $scope.num,
          cache: 'true'
      }).success(function (data) {
          $scope.all = data.data;

          /*console.log(data.data);*/
      });

      //下一页加载
      $scope.next = function () {
          $scope.num++;
          $http({
              method: 'get',
              url: 'https://cnodejs.org/api/v1/topics?tab=all&page=' + $scope.num,
              cache: 'true'
          }).success(function (data) {
              $scope.all = $scope.all.concat(data.data);
              /*console.log(data.data);*/

          });
      };

      //分类
      $scope.show=function(){
         console.log()
      }

    }
  ]);

forumControllers.controller('info', ['$scope','$http','$resource','$location',
    function($scope,$http,$resource,$location) {
          /*  $scope.num=1;
            $resource('https://cnodejs.org/api/v1/topics?tab=all&page='+ $scope.num).get(function(data){
                console.log(data.data)
                $scope.all=data.data;
            });*/
          $scope.number=$location.path();
        /*  console.log($scope.number);*/
          $http({
                method:"get",
                url:'https://cnodejs.org/api/v1/topic'+$scope.number,
                params:{'mdrender':'true'}
                }).success(function(data){
                  $scope.data=data.data;
                  $scope.info=$scope.data.content;
                })

        }
]);
