'use strict';

/* Services */

var forumDirective = angular.module('forumDirective', ['ngResource']);

//监听ng-repeat
forumDirective.directive('repeatFinish',function(){
    return {
        link: function(scope,element,attr){
            if(scope.$last == true){
/*                console.log(scope)
                console.log('ng-repeat执行完毕');*/
                scope.$eval( attr.repeatFinish );
            }
        }
    }
});

//帖子分类
forumDirective.directive('reText',function($compile,$timeout){
    return {
        link:function(scope,element,attr){

            $timeout(function(){
              switch (element.html()){
                  case '精华':element.addClass('title-jin');break;
                  case '问答':element.addClass('title-wen');break;
                  case '招聘':element.addClass('title-zhao');break;
                  case '暂无':element.addClass('title-wu');break;
              }
            })
        }
    }
});

//滚动加载
forumDirective.directive('iScroll',function($timeout){
    return {
        link:function(scope,element,attr){
            $timeout(function(){
                window.onscroll=function(){
                    var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
                    if(scrollTop+document.documentElement.clientHeight+500>=element[0].offsetHeight+element[0].offsetTop){
                        scope.$eval( attr.iScroll);
                    }
                }
            })
        }
    }
});



