/**
 * Created by zpl on 15-3-18.
 * 新建代码
 */

angular
    .module('RDash')
    .controller('NewCodeCtrl', ['$location','$scope','CodeAPIService','AlertOnceService', NewCodeCtrl]);
function NewCodeCtrl($location,$scope,CodeAPIService,AlertOnceService){
    // Injector
    var userid = 1;
    $scope.newcodes = {
        name:"",
        description:""
    };
    $scope.submit2 = function(){
        console.log($scope.newcodes);
        if ($scope.code.$invalid) {
            return;
        }
        //创建新对象
        CodeAPIService.addCode2User(userid,$scope.newcodes,function(data){
            if(data == null){
                AlertOnceService.addNotify('danger',"添加失败,请稍后重试");
                return;
            }
            $location.path('/code/'+data.id);
        })
    };
    $scope.reset2 = function(){
        $scope.newcodes ={
            name:"",
            description:""
        }
    };

}

