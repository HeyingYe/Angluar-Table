 //依赖注入globalApp模块
    var app = angular.module("myApp", ["globalApp"]);
     //自定义过滤器
    app.filter("range", function() {
        return function(array, range) {
            for (var i = 0; i < range; i++) {
                array.push(i);
            }
            return array;
        }
    });
    //自定义指令，加载模板
    app.directive('tab',function() {
            return {
                restrict: 'E',
                scope:false,
                templateUrl: 'html/tab.html?_' + Math.random(),  
                controller: function($scope,$http,direction,baseUrl,Searchservice,lang,dictionary) {
                    $http.get(baseUrl).success(function(res) {
                        $scope.data = res.data;
                        console.log($scope.data)
                        $scope.pagerow = 5;
                        $scope.page = 1;
                        $scope.rowcount = $scope.data.length;
                        $scope.pagecount = Math.ceil($scope.rowcount / $scope.pagerow);
                    })
                    $scope.lang = lang; //语言类型
                    $scope.dictionary = dictionary; //词典
                    $scope.desc = "indexid"; //按属性值排序
                    $scope.dir = direction; //排序方向
                    //分页显示
                    $scope.catch = function(event) {
                        $scope.page = event.target.innerHTML;
                    }
                    //点击标题栏按属性值排序
                    $scope.order = function(key) {
                        $scope.desc = key;
                        $scope.dir = !$scope.dir;
                    }
                    $scope.myFilter = function(item) {
                        return Searchservice.filter(item, $scope.columnName, $scope.keyword)
                    }
                }
            }
        })
    app.controller("list", ["$scope", "$http",function($scope, $http,lang) {

    }])