'use strict';

/* Services */

var forumDirective = angular.module('forumDirective', ['ngResource']);

forumDirective.directive('repeatFinish',function(){
    return {
        link: function(scope,element,attr){
            //console.log(scope.$index)
            if(scope.$last == true){
                console.log('ng-repeat执行完毕');
               /* scope.$eval( attr.repeatFinish );*/
                scope.abc=1;
            }
        },
    }
});

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
                console.log(element.html());
            })

        }

    }

})


