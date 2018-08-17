/********
 * creat By Bear
 * 2018/02/06
 * *********/


"use strict";
$("#userPlus_submit").on("click",function(){
    swal(
        { title:"是否新增数据",text:"此条数据将同步数据库",type:"warning",confirmButtonText:"新增",cancelButtonText:"取消",showCancelButton:true,closeOnConfirm:false,showLoaderOnConfirm:true},
        function(){
            var headData=$table.headData,
                data="",
                all_data=$table.all_data,
                obj={};
            for(var k in all_data){
                let str=$("#userPlus_"+k).val();
                if(!regForInput(str)){swal("违规填写数据","填写数据只能含有汉字、大小写字母、“_”或是数字","error");return"";}
                console.log("###############");
                console.log(k);
                if(k=="CREATE_DATE"){
                    data+=k+"=now()&";obj[k]=new Date();
                }else if(k=="MODIFY_DATE"){
                    data+=k+"=now()&";
                }else if(k==""||k==null||k==undefined){
                    data+=k+"=&";obj[k]="";
                }else if(k == "USER_ROLE_NAME" && str == ""){
                    swal("角色名不可为空","","warning");
                    return "";
                }else  if( k == "STATUS"  ){
                    data+= k+"=";
                    /*if( !$("#userPlus_"+k+"0").prop('checked') && !$("#userPlus_"+k+"1").prop('checked') && !$("#userPlus_"+k+"2").prop('checked') && !$("#userPlus_"+k+"3").prop('checked')  ){
                        swal("请勾选用户状态","","error");
                        return "";
                    }*/

                    //console.log("#########minghua###########");
                    if($("#userPlus_"+k+"0").prop('checked')){
                        data +=  "0";
                        obj[k]="可用";
                    }
                    if($("#userPlus_"+k+"1").prop('checked')){
                        data +=  "1";
                        obj[k]="不可用";
                    }
                    if($("#userPlus_"+k+"2").prop('checked')){
                        data +=  "2";
                        obj[k]="删除";
                    }
                    if($("#userPlus_"+k+"3").prop('checked')){
                        data +=  "3";
                        obj[k]="暂停";
                    }
                    data += "&";
                }else if( k == "IS_ENT" ){
                    //console.log('进入【 k == "STATUS" || k == "IS_ENT" 】 判断');
                    data+= k+"=";
                    if( !$("#userPlus_"+k+"0").prop('checked') && !$("#userPlus_"+k+"1").prop('checked')  ){
                        swal("请勾选企业是否可用","","error");
                        return "";
                    }
                    if($("#userPlus_"+k+"0").prop('checked')){
                        data +=  "0";
                        obj[k]="可用";
                    }
                    if($("#userPlus_"+k+"1").prop('checked')){
                        data +=  "1";
                        obj[k]="不可用";
                    }
                    data += "&";
                }else{
                    data+=k+"="+str+"&";obj[k]=str;
                }
                /*
                else  if( k == "STATUS" || k == "IS_ENT" ){
                    //console.log('进入【 k == "STATUS" || k == "IS_ENT" 】 判断');
                    data+= k+"=";
                    if( !$("#userPlus_"+k+"0").prop('checked') && !$("#userPlus_"+k+"1").prop('checked')  ){
                        swal("请购选是否可用或角色状态","","error");
                        return "";
                    }
                    if($("#userPlus_"+k+"0").prop('checked')){
                        data +=  "0";
                        obj[k]="可用";
                    }
                    if($("#userPlus_"+k+"1").prop('checked')){
                        data +=  "1";
                        obj[k]="不可用";
                    }
                    data += "&";
                }*/
            }
            data=data.slice(0,-1);
            //console.log(data);
            $.ajax({
                type:'post',
                url:ajaxBaseURL+"/"+baseField+"/insert"+baseField.slice(0,1).toUpperCase()+baseField.slice(1),
                data:data,
                success:function success(data){
                    try{
                        if(data.code=="000"){swal("成功新增数据！","","success");
                            //console.log(JSON.stringify(data));
                            $table.bootstrapTable('prepend',[obj]);
                            $("#userPlus").modal('hide');
                        }else{
                            swal("新增数据失败！",JSON.stringify(data.msg),"error");
                        }
                    }catch(error){console.log("【 bootstrapTable - 返回结果 - 报错 】");console.log(error);}
                },
                error:function(_error){
                    function error(){return _error.apply(this,arguments);}
                    error.toString=function(){ return _error.toString();};
                    return error;
                }(function(){console.log("【 bootstrapTable - 报错 】");console.log(error);})
            });
        });
});
$("#setMsg_submit").on("click",function(){
    swal(
        { title:"是否修改此条数据",text:"",type:"warning",confirmButtonText:"修改",cancelButtonText:"取消",showCancelButton:true,closeOnConfirm:false,showLoaderOnConfirm:true},
        function(){
            var rowData=$table.rowData,
                headData=$table.setMsg_data,
                str="";
            for(var k in headData){
                var _str=$("#setMsg_"+k).val();
                if(regForInput(_str)){
                    rowData[k]=_str;
                }else{
                    swal("违规填写数据","填写数据只能含有汉字、大小写字母、“_”或是数字","error");
                    return"";
                }
            }
            for(var k in rowData){
                if(k=="CREATE_DATE"){
                    str+=k+"=now()&";
                }else if(k=="MODIFY_DATE"){
                    str+=k+"=now()&";
                }else if(k==""||k==null||k==undefined){
                    str+=k+"=&";
                }else  if( k == "STATUS"){
                    str+= k+"=";
                    if( !$("#setMsg_"+k+"0").prop('checked') && !$("#setMsg_"+k+"1").prop('checked') && !$("#setMsg_"+k+"2").prop('checked') && !$("#setMsg_"+k+"3").prop('checked')  ){
                        swal("请勾选用户状态","","error");
                        return "";
                    }
                    if($("#setMsg_"+k+"0").prop('checked')){
                        str +=  "0";
                        rowData[k] = "可用";
                    }
                    if($("#setMsg_"+k+"1").prop('checked')){
                        str +=  "1";
                        rowData[k] ="不可用";
                    }
                    if($("#setMsg_"+k+"2").prop('checked')){
                        str +=  "2";
                        rowData[k] ="删除";
                    }
                    if($("#setMsg_"+k+"3").prop('checked')){
                        str +=  "3";
                        rowData[k] ="暂停";
                    }
                    str += "&";
                }else  if( k == "IS_ENT" ){
                    //console.log('进入【 k == "STATUS" || k == "IS_ENT" 】 判断');
                    str += k+"=";
                    if( !$("#setMsg_"+k+"0").prop('checked') && !$("#setMsg_"+k+"1").prop('checked')  ){
                        swal("请勾选企业是否可用","","error");
                        return "";
                    }
                    if($("#setMsg_"+k+"0").prop('checked')){
                        str +=  "0";
                        rowData[k] ="可用";
                    }
                    if($("#setMsg_"+k+"1").prop('checked')){
                        str +=  "1";
                        rowData[k] ="不可用";
                    }
                    str += "&";
                }else{
                    str+=k+"="+rowData[k]+"&";
                }
                /***else  if( k == "STATUS" || k == "IS_ENT" ){

                    str+= k+"=";
                    if($("#setMsg_"+k+"0").prop('checked')){
                        str +=  "0";
                        rowData[k] = "可用";
                    }else if($("#setMsg_"+k+"1").prop('checked')){
                        str +=  "1";
                        rowData[k] = "不可用";
                    }
                    str += "&";
                }*/
            }
            //console.log("############");
            //console.log(str.slice(0,-1));
            str=str.slice(0,-1);
            //swal("触发成功",JSON.stringify(str ),"success")
            $.ajax({
                type:'post',
                url:ajaxBaseURL+"/"+baseField+"/update"+baseField.slice(0,1).toUpperCase()+baseField.slice(1)+"ById",
                data:str,
                success:function success(data){
                    try{
                        if(data.code=="000"){
                            swal("成功修改数据！","","success");
                            $table.bootstrapTable('remove',{field:$table.key,values:[rowData[$table.key]]});
                            $table.bootstrapTable('prepend',[rowData]);
                            $("#setMsg").modal('hide');
                            console.log(JSON.stringify(data));
                        }else{
                            swal("修改数据失败！",JSON.stringify(data.msg),"error");
                        }
                    }catch(error){
                        console.log("【 bootstrapTable - 返回结果 - 报错 】");
                        console.log(error);
                    }
                    },
                error:function(_error2){
                    function error(_x){return _error2.apply(this,arguments);}
                    error.toString=function(){return _error2.toString();};
                    return error;
                }(function(error){ console.log("【 bootstrapTable - 报错 】");console.log(error);})
            });
        });
});
$("#plusMsg").on("click",function(){
    clearChildrenPage({id:"userPlus"});
});
$("#closeRolesBindResourcesOfTable").on("click",function(){
    $("#rolesBindResourcesOfTable").addClass("hidden");$("#iBoxTable").fadeIn(1000);
});
function rolesBindResourcesPageBind(){
    function pageShowMsg(data){
        var fragment=document.createDocumentFragment(),
            list=data.list,
            pageId="rolesBindResources_from",
            str='<div class="form-group "><label class="col-md-3 col-sm-3 control-label"> 角色已绑定的资源： </label> <div class="col-md-9 col-sm-9">';
        for(var i=0;i<list.length;i++){
            var v=list[i];
            str+='<div class="checkbox checkbox-success col-md-4">'+'<input id="rolesBindResources_'+v.RESOURCE_ID+'" class="inline" type="checkbox"><label for="rolesBindResources_'+v.RESOURCE_ID+'">'+v.RESOURCE_NAME+' &nbsp;</label>'+'<a rel="tooltip" id="rolesBindResources_a_'+v.RESOURCE_ID+'" title="" class="btn btn-xs btn-primary btn-icon noResourcesPermissions" data-toggle="modal" data-original-title="修改资源绑定的按钮">'+'<i class="fa fa-plus"></i>'+'</a>'+'</div>';
            if(i!=0&&(i+1)%3==0){str+='<hr style="background-color:#ffffff" class="col-md-10">';}
        }
        str+='</div></div>';
        $(fragment).append(str);
        $("#rolesBindResources_from").append(fragment);
        $(".noResourcesPermissions").on("click",function(){swal("资源没有绑定权限","请先将资源页面绑定到角色之后，在进行相关资源页面的按钮绑定","error");});
    }
    $.ajax({
        type:'post',
        url:ajaxBaseURL+"/resources/getResourcesAll",
        data:'paramOfAll=&paramOfDate={"startTime":"","endTime":""}',
        success:function success(data){
            try{
                if(data.code=="000"){
                    var value=data.value,list=[];$table.allResourcesList=value;
                    for(var i=0;i<value.length;i++){list[i]={"RESOURCE_ID":value[i].RESOURCE_ID,"RESOURCE_NAME":value[i].RESOURCE_NAME};}
                    $table.rolesBindResourcesData=list;
                    pageShowMsg({pageId:"rolesBindResources_from",list:list});
                }else{
                    $("#rolesBindResources").modal('hide');swal("查看当前角色绑定资源信息失败",JSON.stringify(data.msg),"error");
                }
            }catch(error){console.log("【 bootstrapTable - 返回结果 - 报错 】");console.log(error);}},
        error:function(_error3){
            function error(){return _error3.apply(this,arguments);}
            error.toString=function(){return _error3.toString();};
            return error;
        }(function(){console.log("【 bootstrapTable - 报错 】");console.log(error);})
    });
}

$("#RolesBindResources_submit").on("click",function(){
    swal({
            title:"是否改变当前角色的资源绑定？",
            text:"",
            type:"warning",
            confirmButtonText:"修改",
            cancelButtonText:"取消",
            showCancelButton:true,
            closeOnConfirm:false,
            showLoaderOnConfirm:true},
        function(){
            var data=$table.rolesBindResourcesData,
                obj={},
                str="USER_ROLE_ID="+$table.rowData[$table.key],
                resourcesList=$table.resourcesList,
                ADD_RESOURCE_IDS="&ADD_RESOURCE_IDS=",
                DELETE_RESOURCE_IDS="&DELETE_RESOURCE_IDS=";
            function contains(string){
                for(var h=0;h<resourcesList.length;h++){
                    if(string==resourcesList[h].RESOURCE_ID){return true;}
                }
                if(h==resourcesList.length){return false;}
            }
            for(var i=0;i<data.length;i++){
                var RESOURCE_ID="#rolesBindResources_"+data[i].RESOURCE_ID;
                for(var j=0;j<resourcesList.length;j++){
                    if(!$(RESOURCE_ID).prop('checked')&&data[i].RESOURCE_ID==resourcesList[j].RESOURCE_ID){
                        DELETE_RESOURCE_IDS+=data[i].RESOURCE_ID+",";
                    }
                }
                if($(RESOURCE_ID).prop('checked')&&!contains(data[i].RESOURCE_ID)){ ADD_RESOURCE_IDS+=data[i].RESOURCE_ID+",";}
            }
            if(ADD_RESOURCE_IDS.slice(ADD_RESOURCE_IDS.length-1)!="="){ ADD_RESOURCE_IDS=ADD_RESOURCE_IDS.slice(0,-1);}
            if(DELETE_RESOURCE_IDS.slice(DELETE_RESOURCE_IDS.length-1)!="="){ DELETE_RESOURCE_IDS=DELETE_RESOURCE_IDS.slice(0,-1);}
            str+=DELETE_RESOURCE_IDS+ADD_RESOURCE_IDS;
            console.log(str);
            $.ajax({
                type:'post',
                url:ajaxBaseURL+"/"+baseField+"/"+"rolesBindResources",
                data:str,
                success:function success(data){
                    try{
                        if(data.code=="000"){
                            swal("绑定修改成功！","","success");
                            $("#rolesBindResourcesOfTable").addClass("hidden");
                            $("#iBoxTable").fadeIn(1000);
                        }else{
                            swal("修改数据失败！",JSON.stringify(data.msg),"error");
                        }
                    }catch(error){
                        console.log("【 bootstrapTable - 返回结果 - 报错 】");console.log(error);
                    }
                },
                error:function(_error4){
                    function error(_x2){return _error4.apply(this,arguments);}
                    error.toString=function(){
                        return _error4.toString();
                    };
                    return error;
                }(function(error){console.log("【 bootstrapTable - 报错 】");console.log(error);})
            });
        });
});

$("#rolesResourcesBindButton_submit").on("click",function(){
    updateRolesResourcesBindButtonById();
});

function clearChildrenPage(data){
    var id=data.id;
    var obj=$table[data.id+"_data"];
    for(var k in obj){
        if( k == "IS_ENT" ){
            $("#"+id+"_"+k+"0").removeAttr("checked");
            $("#"+id+"_"+k+"1").removeAttr("checked");
        }else if( k == "STATUS" ){
            $("#"+id+"_"+k+"0").removeAttr("checked");
            $("#"+id+"_"+k+"1").removeAttr("checked");
            $("#"+id+"_"+k+"2").removeAttr("checked");
            $("#"+id+"_"+k+"3").removeAttr("checked");
        }else{
            $("#"+id+"_"+k).val("");
        }
        /*if(k == "STATUS" || k == "IS_ENT"){
            $("#"+id+"_"+k+"0").removeAttr("checked");
            $("#"+id+"_"+k+"1").removeAttr("checked");
        }else{
            $("#"+id+"_"+k).val("");
        }*/
    }
}
function regForInput(str){return!/[^\w\u4e00-\u9fa5]/g.test(str);}
function getOrsetShowMsg(data){
    var id=data.id,
        obj={},
        rowData=data.rowData;
    if(id=="setMsg"){
        obj=$table.setMsg_data;
    }else if(id=="getMsg"){
        obj=$table.getMsg_data;
    }
    for(var k in obj){
        if( k == "IS_ENT" ){

            if( rowData[k] == "可用" ){
                $("#"+id+"_"+k+"0").prop('checked',true);
            }
            if( rowData[k] == "不可用" ){
                $("#"+id+"_"+k+"1").prop('checked',true);
            }/**/
        }else if( k == "STATUS" ){
            if( rowData[k] == "可用"){
                $("#"+id+"_"+k+"0").prop('checked',true);
            }else if(rowData[k] == "不可用"){
                $("#"+id+"_"+k+"1").prop('checked',true);
            }else if(rowData[k] == "删除"){
                $("#"+id+"_"+k+"2").prop('checked',true);
            }else if(rowData[k] == "暂停"){
                $("#"+id+"_"+k+"3").prop('checked',true);
            }
            /*if( k == "STATUS" || k == "IS_ENT" ){
                console.log("###############");
                console.log(rowData);
                console.log(obj);
                console.log(obj[k]);
                if( rowData[k] == "可用" ){
                    $("#"+id+"_"+k+"0").prop('checked',true);
                }
                if( rowData[k] == "不可用" ){
                    $("#"+id+"_"+k+"1").prop('checked',true);
                }*/
        }else{
            $("#"+id+"_"+k ).val(rowData[k]);
        }
    }
}

function getRolesBindResources_button(idStr){
    $("#rolesResourcesBindButton_form").empty();
    idStr=idStr.slice(23,idStr.length);
    $.ajax({
        type:'post',
        url:ajaxBaseURL+"/button/getButtonAll",
        data:"RESOURCE_ID="+idStr,
        success:function success(data){
            try{
                if(data.code=="000"){
                    $table.buttonIdList=data.value;
                    if(data.value.length==0){
                        swal(" 查询成功，当前资源绑定 buttonList 为空 ",JSON.stringify(data.msg),"success");
                    }else{
                        var fragment=document.createDocumentFragment(),
                            list=data.value,
                            pageId="rolesBindResources_from",
                            str='<div class="form-group "><label class="col-md-3 col-sm-3 control-label"> 资源页面绑定的按钮： </label> <div class="col-md-9 col-sm-9">';
                        for(var i=0;i<list.length;i++){
                            str+='<div class="checkbox checkbox-success col-md-6">'+'<input id="'+list[i].BUTTON_ID+'" class="inline" checked type="checkbox"><label for="'+list[i].BUTTON_ID+'">'+list[i].BUTTON_NAME+' &nbsp;</label>'+'</div>';
                            if(i!=0&&(i+1)%2==0){
                                str+='<hr style="background-color:#ffffff" class="col-md-10">';
                            }
                        }
                        $("#rolesResourcesBindButton_form").append(str);
                        getRolesBindResources_bindButton(idStr);
                    }
                }else{
                    swal("查找 allButton 返回数据报错",JSON.stringify(data.msg),"error");
                }
            }catch(error){
                console.log("【 bootstrapTable - 返回结果 - 报错 】");
                console.log(error);
            }
        },
        error:function(_error5){
            function error(_x3){return _error5.apply(this,arguments);}
            error.toString=function(){return _error5.toString();};
            return error;
        }(function(error){console.log("【 bootstrapTable - 报错 】");console.log(error);})
    });
}

function getRolesBindResources_bindButton(idStr){
    $table.RESOURCES_ID=idStr;
    $.ajax({
        type:'post',
        url:ajaxBaseURL+"/"+baseField+"/getRolesResourcesBindButtonById",
        data:$table.key+"="+$table.rowData[$table.key]+"&RESOURCE_ID="+idStr,
        success:function success(data){ try{if(data.code=="000"){swal("获取资源页面绑定的 button 数据成功",JSON.stringify(data.msg),"success");console.log("%%%%%%%%%%% data.value[0].BUTTON_IDS");console.log("(["+data.value[0].BUTTON_IDS+"])");var list=data.value[0].BUTTON_IDS;if(list.length==0){}else{list=list.split(",");for(var i=0;i<list.length;i++){$("#"+list[i]).prop("checked",false);}}}else{swal("获取资源页面绑定的 button 数据失败","","error");}}catch(error){console.log("【 bootstrapTable - 返回结果 - 报错 】");console.log(error);}},
        error:function(_error6){
            function error(_x4){return _error6.apply(this,arguments); }
            error.toString=function(){return _error6.toString();};return error;}(function(error){console.log("【 bootstrapTable - 报错 】");console.log(error);})
    });
}

function updateRolesResourcesBindButtonById(){
    var list=$table.buttonIdList,str="";
    for(var i=0;i<list.length;i++){if(!$("#"+list[i].BUTTON_ID).prop('checked')){str+=list[i].BUTTON_ID;}}
    $.ajax({
        type:'post',
        url:ajaxBaseURL+"/"+baseField+"/updateRolesResourcesBindButtonById",
        data:"USER_ROLE_ID="+$table.rowData[$table.key]+"&RESOURCE_ID="+$table.RESOURCES_ID+"&BUTTON_IDS="+str,
        success:function success(data){ try{if(data.code=="000"){swal("绑定 button 数据成功","","success");$("#rolesResourcesBindButton").modal('hide');}else{swal("绑定 button 数据失败",JSON.stringify(data),"error");}}catch(error){console.log("【 bootstrapTable - 返回结果 - 报错 】");console.log(error);}},
        error:function(_error7){
            function error(_x5){return _error7.apply(this,arguments);}
            error.toString=function(){return _error7.toString();};
            return error;
        }(function(error){console.log("【 bootstrapTable - 报错 】");console.log(error);})
    });
}
$().ready(function(){
    window.operateFormatter=function(value,row,key){
        return['<a rel="tooltip" title="绑定资源" class="btn btn-simple btn-info btn-icon table-action rolesBindResources">','<i class="fa fa-chain"></i>','</a>','&thinsp;<a rel="tooltip" title="查看信息" class="btn btn-simple btn-info btn-icon table-action getMsg" data-toggle="modal" data-target="#getMsg">','<i class="fa fa-search"></i>','</a>','&thinsp;<a rel="tooltip" title="修改信息" class="btn btn-simple btn-warning btn-icon table-action setMsg" data-toggle="modal" data-target="#setMsg">','<i class="fa fa-pencil"></i>','</a>','&thinsp;<a rel="tooltip" title="删除信息" class="btn btn-simple btn-danger btn-icon table-action remove">','<i class="fa fa-trash"></i>','</a>'].join('');
    };
    window.operateEvents={
        'click .rolesBindResources':function clickRolesBindResources(e,value,row,RESOURCE_ID){
            $("#rolesBindResourcesOfTable").removeClass("hidden");
            $("#iBoxTable").fadeOut();
            $table.rowData=row;
            var data=$table.allResourcesList;
            for(var i=0;i<data.length;i++){
                $("#rolesBindResources_"+data[i].RESOURCE_ID).prop("checked",false);
                $("#rolesBindResources_a_"+data[i].RESOURCE_ID)
                    .unbind()
                    .removeClass("noResourcesPermissions")
                    .addClass("noResourcesPermissions")
                    .attr("data-target","")
                    .on("click",function(){
                        swal("资源没有绑定权限","请先将资源页面绑定到角色之后，在进行相关资源页面的按钮绑定","error");
                    });
            }
            $.ajax({
                type:'post',
                url:ajaxBaseURL+"/"+baseField+"/getOneRolesAllResources ",
                data:$table.key+"="+row[$table.key],
                success:function success(data){
                    try{
                        if(data.code=="000"){

                            if(data.resourcesList.length == 0 ){
                                var list=data.resourcesList;
                                $table.resourcesList=list;

                            }else{
                                var list=data.resourcesList,
                                    value=data.value;
                                $table.resourcesList=list;
                                //swal("resourcesList",JSON.stringify(list),"success")
                                for(var i=0;i<list.length;i++){
                                    $("#rolesBindResources_"+list[i].RESOURCE_ID).prop("checked",true);
                                    $("#rolesBindResources_a_"+list[i].RESOURCE_ID)
                                        .removeClass("noResourcesPermissions")
                                        .unbind()
                                        .attr("data-target","#rolesResourcesBindButton")
                                        .addClass("rolesBindResources_a_")
                                        .attr("id","#rolesBindResources_a_"+list[i].RESOURCE_ID);
                                }
                                $(".rolesBindResources_a_").on("click",function(){
                                    getRolesBindResources_button("#"+$(this).attr("id"));
                                });
                            }
                        }else{
                            swal("获得资源绑定按钮查询失败",JSON.stringify(data.msg),"error");
                        }
                    }catch(error){console.log("【 bootstrapTable - 返回结果 - 报错 】");console.log(error);}
                },
                error:function(_error8){
                    function error(_x6){return _error8.apply(this,arguments);}
                    error.toString=function(){return _error8.toString();
                    };
                    return error;
                }(function(error){console.log("【 bootstrapTable - 报错 】");console.log(error);})
            });
        },

        'click .getMsg':function clickGetMsg(e,value,row,RESOURCE_ID){
            clearChildrenPage({id:"getMsg"});
            $table.rowData=row;
            getOrsetShowMsg({id:"getMsg",rowData:row});
            /*$.ajax({
                type:'post',
                url:ajaxBaseURL+"/"+baseField+"/getOne"+baseField.slice(0,1).toUpperCase()+baseField.slice(1)+"ById",
                data:$table.key+"="+row[$table.key],
                success:function success(data){
                    try{
                        console.log(data);
                        window.str=JSON.stringify(data);
                        var objData=$table["getMsg_data"],
                            value=data.value;
                        for(var k in objData){

                            if( objData[k] == "STATUS" || objData[k] == "IS_ENT" ){
                                //$("#"+id+"_"+k).val();
                                $("#getMsg_data_" + objData[k]).find("option[value='"+ value[k] +"']").attr("selected",true).trigger("select");
                            }else {
                                $("#getMsg_data_" + objData[k]).val(value[k]);
                            }
                        }
                    }catch(error){
                        console.log("【 bootstrapTable - 返回结果 - 报错 】");console.log(error);
                    }
                },
                error:function(_error9){
                    function error(){return _error9.apply(this,arguments);}
                    error.toString=function(){return _error9.toString();};
                    return error;
                }(function(){console.log("【 bootstrapTable - 报错 】");console.log(error);})
            });*/
        },
        'click .setMsg':function clickSetMsg(e,value,row,index){
            clearChildrenPage({id:"setMsg"});
            $table.rowData=row;
            getOrsetShowMsg({id:"setMsg",rowData:row});
        },
        'click .remove':function clickRemove(e,value,row,RESOURCE_ID){
            //console.log(row);
            $table.rowData=row;
            swal({
                title:"是否删除数据",
                text:"将删除此条数据的所有信息",
                type:"warning",
                confirmButtonText:"删除",
                cancelButtonText:"取消",
                showCancelButton:true,
                closeOnConfirm:false,
                showLoaderOnConfirm:true
            },function(){
                $table.bootstrapTable('remove',{field:'id',values:[row.id]});
                $.ajax({
                    type:'post',
                    url:ajaxBaseURL+"/"+baseField+"/delete"+baseField.slice(0,1).toUpperCase()+baseField.slice(1)+"ById",
                    data:$table.key+"="+row[$table.key],
                    success:function success(data){ try{if(data.code=="000"){swal("数据成功删除！","","success");$table.bootstrapTable('remove',{field:$table.key,values:[row[$table.key]]});console.log(JSON.stringify(data));}else{swal("数据删除失败！",JSON.stringify(data.msg),"error");}}catch(error){console.log("【 bootstrapTable - 返回结果 - 报错 】");console.log(error);}},
                    error:function(_error10){
                        function error(){return _error10.apply(this,arguments);}
                        error.toString=function(){return _error10.toString();};
                        return error;
                    }(function(){console.log("【 bootstrapTable - 报错 】");console.log(error);})
                });
            });
        }
    };
    bootTable({id:'theBootstraptable'});
    $('[rel="tooltip"]').tooltip();
});
Date.prototype.Format=function(fmt){ var o={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),"S":this.getMilliseconds
    ()};if(/(y+)/.test(fmt))fmt=fmt.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length));for(var k in o){if(new RegExp("("+k+")").test(fmt))fmt=fmt.replace(RegExp.$1,RegExp.$1.length==1?o[k]:("00"+o[k]).substr((""+o[k]).length));}return fmt;};
function bootTable(d){
    function randomString(){
        var string="ABCDEFGHIGKLMNOPQRSTUVWXYZabcdefghijklmnopqrstquwxyz";var s="";for(var i=0;i<10;i++){s+=string[parseInt(string.length*Math.random())];}
        return s;
    }
    function exportExcel(list){
        var option={},
            dataList=list,
            headData=$table.headData;
        option.fileName=new Date().Format("yyyy-MM-dd")+"-"+new Date().valueOf();
        option.datas=[];
        option.datas[0]={};
        option.datas[0].sheetHeader=[];
        option.datas[0].sheetName='sheet'+randomString();
        option.datas[0].sheetFilter=[];
        for(var k in headData){
            option.datas[0].sheetHeader.push(headData[k]);
            option.datas[0].sheetFilter.push(k);
        }
        option.datas[0].sheetData=dataList;
        var toExcel=new ExportJsonExcel(option);
        toExcel.saveExcel();
    }
    function allDataProcessing(data){
        var fragment=document.createDocumentFragment(),
            head=data.obj,
            pageId=data.pageId,
            id=data.pageId.split("_")[0];
        for(var k in head){
            var v=head[k],str="";
            if( k == "STATUS" ){
                str=
                    '<div class="form-group">'
                    +'<label for="'+id+'_'+k+'" class="col-sm-3 control-label">'+v+'：</label>'
                    +'<div class="col-sm-9">'+

                    '<div class="radio radio-success col-sm-6">' +
                    '<input type="radio" name="'+ id +'_'+ k +'" id="'+ id +'_'+ k +'0" value="0">' +
                    '<label for="'+ id +'_'+ k +'0">' +
                    '可用' +
                    '</label>' +
                    '</div>' +
                    '<div class="radio radio-success col-sm-6">' +
                    '<input type="radio" name="'+ id +'_'+ k +'" id="'+ id +'_'+ k +'1" value="1">' +
                    '<label for="'+ id +'_'+ k +'1">' +
                    '不可用' +
                    '</label>' +
                    '</div>' +
                    '<div class="radio radio-success col-sm-6">' +
                    '<input type="radio" name="'+ id +'_'+ k +'" id="'+ id +'_'+ k +'2" value="2">' +
                    '<label for="'+ id +'_'+ k +'2">' +
                    '删除' +
                    '</label>' +
                    '</div>' +
                    '<div class="radio radio-error col-sm-6">' +
                    '<input type="radio" name="' + id +'_'+ k + '" id="'+ id +'_'+ k +'3" value="3">' +
                    '<label for="'+ id +'_'+ k +'3">' +
                    '暂停' +
                    '</label>' +
                    '</div>';

            }else if( k == "IS_ENT" ){
                str=
                    '<div class="form-group">'
                    +'<label for="'+id+'_'+k+'" class="col-sm-3 control-label">'+v+'：</label>'
                    +'<div class="col-sm-9">'+

                    '<div class="radio radio-success col-sm-6">' +
                    '<input type="radio" name="'+ id +'_'+ k +'" id="'+ id +'_'+ k +'0" value="0">' +
                    '<label for="'+ id +'_'+ k +'0">' +
                    '可用' +
                    '</label>' +
                    '</div>' +
                    '<div class="radio radio-danger col-sm-6">' +
                    '<input type="radio" name="' + id +'_'+ k + '" id="'+ id +'_'+ k +'1" value="1">' +
                    '<label for="'+ id +'_'+ k +'1">' +
                    '不可用' +
                    '</label>' +
                    '</div>';
            }else{
                str=
                    '<div class="form-group">'
                    +'<label for="'+id+'_'+k+'" class="col-sm-3 control-label">'+v+'：</label>'
                    +'<div class="col-sm-9"><input type="text" class="form-control" id="'+id+'_'+k+'" placeholder="请输入'+v+'"></div>'
                    +'</div>';
            }
            $(fragment).append(str);
        }
        $("#"+pageId).append(fragment);
    }
    function transferAllDataProcessing(head){
        var userPlus_data={},
            getMsg_data={},
            setMsg_data={},
            main_data={},
            excel_data={},
            all_data={};
        for(var k in head){
            var s=head[k].split(",")[1];
            head[k]=head[k].split(",")[0];
            s=s.split("-");
            all_data[k]="";
            if(s[0]=="1"){main_data[k]=head[k];}
            if(s[1]=="1"){getMsg_data[k]=head[k];}
            if(s[2]=="1"){userPlus_data[k]=head[k];}
            if(s[3]=="1"){setMsg_data[k]=head[k];}
        }
        allDataProcessing({pageId:"userPlus_from",obj:userPlus_data});
        $table.userPlus_data=userPlus_data;
        allDataProcessing({pageId:"getMsg_from",obj:getMsg_data});
        $table.getMsg_data=getMsg_data;
        allDataProcessing({pageId:"setMsg_from",obj:setMsg_data});
        $table.setMsg_data=setMsg_data;
        $table.excel_data=excel_data;
        $table.all_data=all_data;
        $table.headData=main_data;
        return main_data;
    }
    var $table=$('#'+d.id);
    var dataUrl=$table.attr("name");
    $($('#'+d.id).parent().children(".exportExcel")[0]).on("click",function(){exportExcel($table.bootstrapTable('getOptions').data);});
    console.log("###############加载allData");
    console.log(ajaxBaseURL+dataUrl);
    $.ajax({
        type:'post',
        url:ajaxBaseURL+dataUrl,
        data:'paramOfAll=&paramOfDate={"startTime":"","endTime":""}',
        success:function success(data){
            try{
                var obj=data;
                var list=obj.value,headList=[],headData=transferAllDataProcessing(obj.head);
                headList.push({checkbox:true,fieId:'state',title:'checkBox'});
                headList.push({field:'action',title:'操作',halign:"center",align:'right',textOverflow:"true",formatter:"operateFormatter",events:'operateEvents'});
                for(var k in headData){
                    headList.push({field:k,sortable:true,title:headData[k],});
                }
                for(var i=0;i<list.length;i++){
                    //console.log('进入循环');
                    if( list[i].IS_ENT ){
                        if(list[i].IS_ENT  == "0"){
                            list[i].IS_ENT = "可用" ;
                        }else if( list[i].IS_ENT  == "1" ){
                            list[i].IS_ENT = "不可用";
                        };
                    }
                    if( list[i].STATUS ){
                        if( list[i].STATUS == "0"){
                            list[i].STATUS = "可用";
                        }else if( list[i].STATUS == "1"){
                            list[i].STATUS = "不可用";
                        }else if( list[i].STATUS == "2"){
                            list[i].STATUS = "删除";
                        }else if( list[i].STATUS == "3"){
                            list[i].STATUS = "暂停";
                        }
                    }
                }


                $table.bootstrapTable({
                    columns:headList,
                    data:list,
                    toolbar:".toolbar",
                    striped:true,
                    search:true,
                    showToggle:true,
                    showColumns:true,
                    pagination:true,
                    uniqueId:obj.key,
                    searchAlign:'left',
                    pageSize: 5,
                    pageList:[5,10,25,50,100],
                    icons:{ refresh:'fa fa-refresh',toggle:'fa fa-th-list',columns:'fa fa-columns',detailOpen:'fa fa-plus-circle',detailClose:'fa fa-minus-circle'}
                });
                window.$table=$table;
                window.$table.key=obj.key;
                rolesBindResourcesPageBind();
            }catch(error){
                console.log("【 bootstrapTable - 返回结果 - 报错 】");
                console.log(error);
            }
        },
        error:function(_error11){
            function error(_x7){return _error11.apply(this,arguments);}
            error.toString=function(){return _error11.toString();};
            return error;
        }(function(error){console.log("【 bootstrapTable - 报错 】");console.log(error);})
    });
    $(window).resize(function(){$table.bootstrapTable('resetView');});
}