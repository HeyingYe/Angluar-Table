var globalApp = angular.module("globalApp",[]);
globalApp.value("baseUrl","http://localhost/");//资源路径
globalApp.value("lang","en");//语言类型
globalApp.value("direction",true);//默认排列顺序
//语言翻译
globalApp.value("dictionary",{
	cn: {
		account: '帐号',
		createtime: '注册时间',
		indexid: '用户 ID',
		mail: '邮箱',
		phone: '手机',
		projectname: '项目名称',
		username: '用户名'
	},
	en: {
		account: 'Account',
		createtime: 'Create Time',
		indexid: 'Index ID',
		mail: 'Mail',
		phone: 'Phone',
		projectname: 'Project Name',
		username: 'User Name'
	}
});
globalApp.service("Searchservice",function(){
	this.filter = function(item,columnName,keyword){
		//筛选器
		if(columnName && keyword && item[columnName] && (item[columnName] + "").indexOf(keyword) > -1){
			return true;
		}else if(!columnName || !keyword){
			return true;
		}
		return false;
	}
})
//自定义指令，加载模板
globalApp.directive('tab',function() {
    return {
        restrict: 'E',
        scope:false,
        templateUrl: 'html/tab.html?_' + Math.random(),
        // replace:true,  
        controller: function($scope,$http,direction,baseUrl,Searchservice,lang,dictionary) {
            $http.get(baseUrl + "dk/day04/data.txt").success(function(res) {
                $scope.data = res.data;
                // console.log($scope.data)
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
globalApp.directive("datagrid",function(){
   return {
        restrict: 'E',
        scope:false,
        templateUrl: 'html/tab.html?_' + Math.random(),
        // replace:true,  
        controller: function($scope,$http,direction,baseUrl,Searchservice,lang,dictionary) {
            $http.get(baseUrl + "dk/day04/me/php/list.php").success(function(res) {
                $scope.data = res;
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
// globalApp.directive('repeatFinish', function () {
//     return {
//     	restrict: 'A',
//         link: function ($scope, element, attrs) {
//         	// console.log(scope.$last);
//             if ($scope.$last === true) {
//                 $scope.repeatFinish();
//             }
//         }
//     }
// })