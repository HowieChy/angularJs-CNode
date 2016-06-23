'use strict';

/* Filters */

var forumFilters=angular.module('forumFilters',[]);

forumFilters.filter('tab',function(){
  return function (str){
      if(str){
          switch(str){
              case 'share':return '精华';break;
              case 'job':return '招聘';break;
              case 'ask':return '问答';break;
              default:return '暂无';break;
          }
      }
      else{
          return '暂无'
      }
  }
})
/*angular.module('phonecatFilters', []).filter('checkmark', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});*/
