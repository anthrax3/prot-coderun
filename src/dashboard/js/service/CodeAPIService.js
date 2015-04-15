/**
 * Created by zpl on 15-3-16.
 */
angular.module('RDash').
    factory('CodeAPIService',['$http','$q','RestfulService',function($http,$q,RestfulService){
        return {
            getCodesByUser: function(userid){
                return RestfulService.restfulOp({
                    url:baseUrl+"/code/"+userid,
                    method:"GET"
                });
            },
            getCodeById: function(userid,id){
                return RestfulService.restfulOp({
                    url:baseUrl+"/code/"+userid+"/"+id,
                    method:"GET"
                });
            },
            addCode2User: function(userid,codeinfo){
                return RestfulService.restfulOp({
                    url:baseUrl+"/code/"+userid,
                    method:"POST",
                    data:codeinfo
                });

            },
            updateCode:function(userid,codeinfo){
                return RestfulService.restfulOp({
                    url:baseUrl+"/code/"+userid+"/"+codeinfo.Id,
                    method:"PUT",
                    data:codeinfo
                });

            },
            deleteCode:function(userid,codeid){
                return RestfulService.restfulOp({
                    url:baseUrl+"/code/"+userid+"/"+codeid,
                    method:"DELETE"
                });

            },
            getCodeSteps:function(userid,codeid){
                return RestfulService.restfulOp({
                    url:baseUrl+"/code/"+userid+"/"+codeid+"/step",
                    method:"GET"
                });
            },
            getCodeStepById: function(userid,codeid,stepid){
                return RestfulService.restfulOp({
                    url:baseUrl+"/code/"+userid+"/"+codeid+"/step/"+stepid,
                    method:"GET"
                });

            },
            addCodeStep: function(userid,codeid,codestep){
                return RestfulService.restfulOp({
                    url:baseUrl+"/code/"+userid+"/"+codeid+"/step",
                    method:"POST",
                    data:codestep
                });

            },
            updateCodeStepCmd: function(userid,codeid,stepid,data){
                return RestfulService.restfulOp({
                    url:baseUrl+"/code/"+userid+"/"+codeid+"/step/"+stepid+"/cmd",
                    method:"PUT",
                    data:data
                })
            },
            updateCodeStep: function(userid,codeid,stepid,codestep){
                return RestfulService.restfulOp({
                    url:baseUrl+"/code/"+userid+"/"+codeid+"/step/"+stepid,
                    method:"PUT",
                    data:codestep
                });

            },
            deleteCodeStep: function(userid,codeid,stepid){
                return RestfulService.restfulOp({
                    url:baseUrl+"/code/"+userid+"/"+codeid+"/step/"+stepid,
                    method:"DELETE"
                });

            },
            getCodeStepDetail: function(userid,codeid,stepid){
                return RestfulService.restfulOp({
                    url:baseUrl+"/code/"+userid+"/"+codeid+"/step/"+stepid,
                    method:"GET"
                });
            },
            updateCodeStepDetail: function(userid,codeid,stepid,codestepdetail){
                return RestfulService.restfulOp({
                    url:baseUrl+"/code/"+userid+"/"+codeid+"/step/"+stepid,
                    method:"PUT",
                    data:codestepdetail
                });

            },
            coderun: function(imageid,runinfo){
                return RestfulService.restfulOp({
                    url:baseUrl+"/coderun/"+imageid,
                    method:"PUT",
                    data:runinfo
                });

            },
            coderunRes: function(runid){
                return RestfulService.restfulOp({
                    url:baseUrl+"/coderun/"+runid,
                    method:"GET"
                });

            }

        }
    }])