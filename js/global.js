var globalApp = angular.module("globalApp",[]);
globalApp.value("baseUrl","../data.txt");//资源路径
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
globalApp.directive("datagrid",function(){
	return {
		restrict:"E",
		templateUrl:
	}
})