 //依赖注入globalApp模块
var app = angular.module("myApp", ["globalApp","ui.router"]);
 //自定义过滤器
app.filter("range", function() {
    return function(array, range) {
        for (var i = 0; i < range; i++) {
            array.push(i);
        }
        return array;
    }
});
//配置路由映射表
app.config(function($stateProvider,$urlRouterProvider){
    $stateProvider.state('all',{
        url:'/all',
        templateUrl:'html/all.html?' + Math.random(),
    }).state('page1',{
        url:'/page1',
        templateUrl:'html/datagrid.html?' + Math.random(),
    })
})
app.controller("list", ["$scope","$http","direction","baseUrl","Searchservice","lang","dictionary",function($scope,$http,direction,baseUrl,Searchservice,lang,dictionary) {
    // $scope.repeatFinish = function(){
    //     console.log('repeatFinish');
    // }
}])