'use strict';

/* Services */

var forumServices = angular.module('forumServices', ['ngResource']);

forumServices.factory('Shop', ['$resource',
  function($resource){
    return $resource('json/num.json', {}, {
      /*query: {method:'GET', params:{phoneId:'phones'}, isArray:true}//配置信息*/
    });
  }]);


