'use strict';

/* Filters */

var forumFilters=angular.module('forumFilters',[]);

//帖子分类
forumFilters.filter('tab',function(){
  return function (str){
          switch(str){
              case 'share':return '精华';break;
              case 'job':return '招聘';break;
              case 'ask':return '问答';break;
              default:return '暂无';break;
          }
      }
});

//时间
forumFilters.filter('time',function(){
    return function (str){
            var oNow= Date.parse(str);
            var iNow=new Date().getTime();
            var iMin=(iNow-oNow)/1000;
            var Min=60;
            var Hour=3600;
            var Day=86400;
            if(iMin<Min){
                return Min+'秒'
            }else if(iMin>Min&&iMin<Hour){
                return Math.ceil(iMin/Min)+'分前'
            }
            else if(iMin>Hour&&iMin<Day){
                return Math.ceil(iMin/Hour)+'时前'
            }
            else if(iMin>Day){
                return  Math.ceil(iMin/Day)+'天前'
            }


    }
});