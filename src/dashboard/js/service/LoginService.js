/**
 * Created by Administrator on 2015/4/21.
 */
angular.module('RDash')
.factory('LogService',['User','$cookies','$window',function(User,$cookies,$window) {
    return {
        isLogin:function(){
            console.log('login service!')
            if(($cookies.token)==undefined) {
                $window.location.href = ssoUrl+window.location.href;
            }
        }
    }
}])