'use strict';


var forumControllers = angular.module('forumControllers', ['ngResource','ngSanitize']);

//列表页
forumControllers.controller('list', ['$scope','$http','$resource','$location','$rootScope','$state','person','currentDetails',
  function($scope,$http,$resource,$cacheFactory,$location,$rootScope,$state,currentDetails,person) {
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
          });
      //console.log(currentDetails);
      //首页加载 预载入Resolve
      if($rootScope.allInfo){
          $scope.all=$rootScope.allInfo;
          console.log(1)
      }else{
          $scope.all = currentDetails.data.data;
      }

      //下一页加载
      $scope.num=1;
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
                  $scope.door=true;
                  $rootScope.allInfo=$scope.all;
              });
          }
      };
  }
  ]);

//详情页
forumControllers.controller('info', ['$scope','$http','$resource','$location','$rootScope',
    function($scope,$http,$resource,$location,$rootScope) {
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
                window.onscroll=null;
            });

          $http({
                method:"get",
                url:'https://cnodejs.org/api/v1/topic'+$scope.number,
                params:{'mdrender':'true'},
                }).success(function(data){
                      $scope.data=data.data;
                      $scope.info=$scope.data.content;
                      $scope.all=$scope.data.replies;
                })

        }
]);




