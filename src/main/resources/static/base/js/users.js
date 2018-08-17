"use strict";
$("#closeIBoxOfAPITable").on("click", function() {
    $("#iBoxOfAPITable").addClass("hidden");

    // $("#screenUserBox").fadeIn(800);
    $("#userBox").fadeIn(800);
    //$("#iBoxOfAPITable").removeClass("hidden");
});
//todo 判断复选框
function stateFormatterCheckBox(value, row, index) {
    if (row.state == true)
        return {
            // disabled : true,//设置是否可用
            checked: true //设置选中
        };
    return value;
}

function reg (str){
    var reg1=/[^0]/g;
    if( reg1.test(str) ){}else{
        return false
    }
    var reg=/[^\d]/g;
    return !reg.test(str);
}
$("#userPlus_submit").on("click", function() {
    swal({
            title: "是否新增数据",
            text: "此条数据将同步数据库",
            type: "warning",
            confirmButtonText: "新增",
            cancelButtonText: "取消",
            showCancelButton: true,
            closeOnConfirm: false,
            showLoaderOnConfirm: true
        },
        function() {
            var headData = $table.headData,
                data = "",
                all_data = $table.all_data,
                obj = {};
            for (var k in all_data) {
                var str = $("#userPlus_" + k).val();
                if (!regForInput(str)) {
                    swal("违规填写数据", "填写数据只能含有汉字、大小写字母、“_”或是数字", "error");
                    return "";
                }
                if( k == "USER_ID" && str == "" ){
                    swal("请填写用户登录账号","该字段不可为空","warning");
                    return "";
                }else if( k == "QPS" && str != ""){


                    if(str[0] == "0" ){
                        swal("请检查TOKEN【 每秒 】访问次数","该字段可为空或是大于0的整数","warning");
                    }else if( reg(str) ){
                        data += k + "=" + str + "&" ;
                        obj[k]= str ;
                    }else{
                        swal("请检查TOKEN【 每秒 】访问次数","该字段可为空或是大于0的整数","warning");
                        return "";
                    }
                }else if( k == "QPM" && str != ""){


                    if(str[0] == "0" ){
                        swal("请检查TOKEN【 每分钟 】访问次数","该字段可为空或是大于0的整数","warning");
                    }else if( reg(str) ){
                        data += k + "=" + str + "&" ;
                        obj[k]= str ;
                    }else{
                        swal("请检查TOKEN【 每分钟 】访问次数","该字段可为空或是大于0的整数","warning");
                        return "";
                    }
                }else if( k == "TOKEN_TIME" && str != ""){


                    if(str[0] == "0" ){
                        swal("请检查TOKEN【 有效时长 】","该字段可为空或是大于0的整数","warning");
                    }else if( reg(str) ){
                        data += k + "=" + str + "&" ;
                        obj[k]= str ;
                    }else{
                        swal("请检查TOKEN【 有效时长 】","该字段可为空或是大于0的整数","warning");
                        return "";
                    }

                }else if( k == "PASSWORD" && str == "" ){

                    //data+= k+"=";
                    swal("请填写用户登录密码","该字段不可为空","warning");
                    return "";
                }else if ( k == "CREATE_DATE") {
                    data += k + "=now()&";
                    obj[k] = new Date();
                } else if ( k == "MODIFY_DATE") {
                    data += k + "=now()&";
                } else  if( k == "STATUS" ){
                    data+= k+"=";
                    if( !$("#userPlus_"+k+"0").prop('checked') && !$("#userPlus_"+k+"1").prop('checked') && !$("#userPlus_"+k+"2").prop('checked') && !$("#userPlus_"+k+"3").prop('checked')  ){
                        swal("请勾选用户状态","","error");
                        //alert("$$$$$$$$$$$$$$$$$$$$");
                        return "";
                    }

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
                }else if( k == "SEX" ){
                    //console.log('进入【 k == "STATUS" || k == "IS_ENT" 】 判断');
                    data+= k+"=";
                    if($("#userPlus_"+k+"0").prop('checked')){
                        data +=  "0";
                        obj[k]="男";
                    }
                    if($("#userPlus_"+k+"1").prop('checked')){
                        data +=  "1";
                        obj[k]="女";
                    }
                    if($("#userPlus_"+k+"2").prop('checked')){
                        data +=  "-1";
                        obj[k]="未知";
                    }
                    data += "&";
                }else  if( str == "" || str == null || str == undefined ) {
                    data += k + "=&";
                    obj[k] = "";
                }else{
                    data += k + "=" + str + "&";
                    obj[k] = str;
                }
            }
            data = data.slice(0, -1);
            console.log(data);
            $.ajax({
                type: 'post',
                url: ajaxBaseURL + "/" + baseField + "/insert" + baseField.slice(0, 1).toUpperCase() + baseField.slice(1),
                data: data,
                success: function success(data) {
                    try {
                        if (data.code == "000") {
                            swal("成功新增数据！", "", "success");
                            console.log(JSON.stringify(data));
                            $table.bootstrapTable('prepend', [obj]);
                            $("#userPlus").modal('hide');
                        } else {
                            swal("新增数据失败！", /*JSON.stringify(data)*/ "", "error");
                        }
                    } catch (error) {
                        console.log("【 bootstrapTable - 返回结果 - 报错 】");
                        console.log(error);
                    }
                },
                error: function(_error) {
                    function error() {
                        return _error.apply(this, arguments);
                    }
                    error.toString = function() {
                        return _error.toString();
                    };
                    return error;
                }(function() {
                    console.log("【 bootstrapTable - 报错 】");
                    console.log(error);
                })
            });
        });
});

$("#setMsg_submit").on("click", function() {
    swal({
            title: "是否修改此条数据",
            text: "",
            type: "warning",
            confirmButtonText: "修改",
            cancelButtonText: "取消",
            showCancelButton: true,
            closeOnConfirm: false,
            showLoaderOnConfirm: true
        },
        function() {
            var rowData = $table.rowData,
                headData = $table.setMsg_data,
                str = "";
            for (var k in headData) {
                let _str = $("#setMsg_" + k).val();
                if (regForInput(_str)) {
                    rowData[k] = _str;
                } else {
                    swal("违规填写数据", "填写数据只能含有汉字、大小写字母、“_”或是数字", "error");
                    return "";
                }
            }
            for (var k in rowData) {
                let _str = $("#setMsg_" + k).val();
                if (k == "CREATE_DATE") {
                    str += k + "=now()&";
                } else if (k == "MODIFY_DATE") {
                    str += k + "=now()&";
                } else if( k == "STATUS"  ){
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
                }else if( k == "SEX" ){
                    //console.log('进入【 k == "STATUS" || k == "IS_ENT" 】 判断');
                    str += k+"=";
                    if($("#setMsg_"+k+"0").prop('checked')){
                        str +=  "0";
                        rowData[k] ="男";
                    }
                    if($("#setMsg_"+k+"1").prop('checked')){
                        str +=  "1";
                        rowData[k] ="女";
                    }
                    if($("#setMsg_"+k+"2").prop('checked')){
                        str +=  "-1";
                        rowData[k] ="未知";
                    }
                    str += "&";
                }else if( k == "QPS" && _str != ""){


                    if(str[0] == "0" ){
                        swal("请检查TOKEN【 每秒 】访问次数","该字段可为空或是大于0的整数","warning");
                    }else if( reg(_str) ){
                        str += k + "=" + _str + "&" ;
                        rowData[k]= _str ;
                    }else{
                        swal("请检查TOKEN【 每秒 】访问次数","该字段可为空或是大于0的整数","warning");
                        return "";
                    }
                }else if( k == "QPM" && _str != ""){


                    if(str[0] == "0" ){
                        swal("请检查TOKEN【 每分钟 】访问次数","该字段可为空或是大于0的整数","warning");
                    }else if( reg(_str) ){
                        str += k + "=" + _str + "&" ;
                        rowData[k]= _str ;
                    }else{
                        swal("请检查TOKEN【 每分钟 】访问次数","该字段可为空或是大于0的整数","warning");
                        return "";
                    }
                }else if( k == "TOKEN_TIME" && _str != ""){


                    if(str[0] == "0" ){
                        swal("请检查TOKEN【 有效时长 】","该字段可为空或是大于0的整数","warning");
                    }else if( reg(_str) ){
                        str += k + "=" + _str + "&" ;
                        rowData[k]= _str ;
                    }else{
                        swal("请检查TOKEN【 有效时长 】","该字段可为空或是大于0的整数","warning");
                        return "";
                    }

                }else if (str == "" || str == null || str == undefined) {
                    str += k + "=&";
                }else {
                    str += k + "=" + rowData[k] + "&";
                }
            }
            console.log("############");
            console.log(str.slice(0, -1));
            str = str.slice(0, -1);
            $.ajax({
                type: 'post',
                url: ajaxBaseURL + "/" + baseField + "/update" + baseField.slice(0, 1).toUpperCase() + baseField.slice(1) + "ById",
                data: str,
                success: function success(data) {
                    try {
                        if (data.code == "000") {
                            swal("成功修改数据！", "", "success");
                            $table.bootstrapTable('remove', {
                                field: $table.key,
                                values: [rowData[$table.key]]
                            });
                            $table.bootstrapTable('prepend', [rowData]);
                            $("#setMsg").modal('hide');
                            console.log(JSON.stringify(data));
                        } else {
                            swal("修改数据失败！", /*JSON.stringify(data)*/ "", "error");
                        }
                    } catch (error) {
                        console.log("【 bootstrapTable - 返回结果 - 报错 】");
                        console.log(error);
                    }
                },
                error: function(_error2) {
                    function error(_x) {
                        return _error2.apply(this, arguments);
                    }
                    error.toString = function() {
                        return _error2.toString();
                    };
                    return error;
                }(function(error) {
                    console.log("【 bootstrapTable - 报错 】");
                    console.log(error);
                })
            });
        });
});
$("#plusMsg").on("click", function() {
    clearChildrenPage({
        id: "userPlus"
    });
});
$("#userBindRoles_submit").on("click", function() {
    console.log("userBindRoles_submit 点击成功");
    swal({
            title: "是否改变用户角色绑定？",
            text: "",
            type: "warning",
            confirmButtonText: "修改",
            cancelButtonText: "取消",
            showCancelButton: true,
            closeOnConfirm: false,
            showLoaderOnConfirm: true
        },
        function() {
            var data = $table.userBindRolesData,
                obj = {},
                str = "USER_ID=" + $table.rowData[$table.key] + "&USER_ROLE_IDS=";
            for (var i = 0; i < data.length; i++) {
                if ($("#userBindRoles_" + data[i].USER_ROLE_ID).prop('checked')) {
                    str += data[i].USER_ROLE_ID + ",";
                }
            }
            str = str.slice(0, -1);
            $.ajax({
                type: 'post',
                url: ajaxBaseURL + "/" + baseField + "/" + "usersBindRoles",
                data: str,
                success: function success(data) {
                    try {
                        if (data.code == "000") {
                            swal("绑定修改成功！", "", "success");
                            $("#userBindRoles").modal('hide');

                        } else {
                            swal("修改数据失败！", /*JSON.stringify(data)*/ "", "error");
                        }
                    } catch (error) {
                        console.log("【 bootstrapTable - 返回结果 - 报错 】");
                        console.log(error);
                    }
                },
                error: function(_error3) {
                    function error(_x2) {
                        return _error3.apply(this, arguments);
                    }
                    error.toString = function() {
                        return _error3.toString();
                    };
                    return error;
                }(function(error) {
                    console.log("【 bootstrapTable - 报错 】");
                    console.log(error);
                })
            });
        });
});
$("#userBindApis").on("click", function() {
    console.log("userBindRoles_submit 点击成功");
    swal({
            title: "是否改变用户API绑定？",
            text: "",
            type: "warning",
            confirmButtonText: "修改",
            cancelButtonText: "取消",
            showCancelButton: true,
            closeOnConfirm: false,
            showLoaderOnConfirm: true
        },
        function() {
            var list = $tableAPI.bootstrapTable('getAllSelections'),
                obj = {},
                str = "USER_ID=" + $table.rowData[$table.key] + "&API_RESOURCE_ID=";
            if (list.lenght == 0) {
                return "";
            } else {
                for (var i = 0; i < list.length; i++) {
                    str += (list[i].API_RESOURCE_ID + ",");
                }
            }
            str = str.slice(0, -1);
            $.ajax({
                type: 'post',
                url: ajaxBaseURL + "/users/usersBindOrAPI",
                data: str,
                success: function success(data) {
                    try {
                        if (data.code == "000") {
                            swal("绑定修改成功！", "", "success");
                            $("#userBindRoles").modal('hide');
                            // $("#screenUserBox").fadeIn(800);
                            $("#userBox").fadeIn(800);
                            $("#iBoxOfAPITable").addClass("hidden");
                        } else {
                            swal("修改数据失败！", /*JSON.stringify(data)*/ "", "error");
                        }
                    } catch (error) {
                        console.log("【 bootstrapTable - 返回结果 - 报错 】");
                        console.log(error);
                    }
                },
                error: function(_error3) {
                    function error(_x2) {
                        return _error3.apply(this, arguments);
                    }
                    error.toString = function() {
                        return _error3.toString();
                    };
                    return error;
                }(function(error) {
                    console.log("【 bootstrapTable - 报错 】");
                    console.log(error);
                })
            });
        });
});



function userBindRolesPageBind() {
    function pageShowMsg(data) {
        var fragment = document.createDocumentFragment(),
            list = data.list,
            pageId = "userBindRoles_from",
            str = '<div class="form-group "><label class="col-md-3 col-sm-3 control-label"> 已经绑定角色： </label>' + '<div class="col-md-9 col-sm-9">';
        for (var i = 0; i < list.length; i++) {
            var v = list[i];
            str += '<div class="checkbox checkbox-success col-md-6">' + '<input id="userBindRoles_' + v.USER_ROLE_ID + '" type="checkbox">' + '<label for="userBindRoles_' + v.USER_ROLE_ID + '">' + v.USER_ROLE_NAME + '</label>' + '</div>';
            if (i != 0 && i % 2 == 1) {
                str += '<hr style="background-color:#fff;"class="col-md-12">';
            }
            //console.log(str);
        }
        str += '</div></from>';
        $(fragment).append(str);
        console.log(fragment);
        $("#userBindRoles_from").append(fragment);
        console.log($("#" + pageId));
    }
    $.ajax({
        type: 'post',
        url: ajaxBaseURL + "/roles/getRolesAll",
        data: 'paramOfAll=&paramOfDate={"startTime":"","endTime":""}',
        success: function success(data) {
            try {
                if (data.code == "000") {
                    var value = data.value,
                        list = [];
                    for (var i = 0; i < value.length; i++) {
                        list[i] = {
                            "USER_ROLE_ID": value[i].USER_ROLE_ID,
                            "USER_ROLE_NAME": value[i].USER_ROLE_NAME
                        };
                    }
                    $table.userBindRolesData = list;
                    pageShowMsg({
                        pageId: "userBindRoles_from",
                        list: list
                    });
                } else {
                    $("#userBindRoles").modal('hide');
                    swal("查看当前用户绑定角色失败", /*JSON.stringify(data)*/ "", "error");
                }
            } catch (error) {
                console.log("【 bootstrapTable - 返回结果 - 报错 】");
                console.log(error);
            }
        },
        error: function(_error4) {
            function error() {
                return _error4.apply(this, arguments);
            }
            error.toString = function() {
                return _error4.toString();
            };
            return error;
        }(function() {
            console.log("【 bootstrapTable - 报错 】");
            console.log(error);
        })
    });
}

function clearUserBindRolesPage(data) {
    for (var i = 0; i < data.length; i++) {
        $("#userBindRoles_" + data[i].USER_ROLE_ID).prop("checked", false);
    }
}

function operateFormatter(value, row, USER_ID) {
    return [
        '<a rel="tooltip" title="用户角色绑定" class="btn btn-simple btn-info btn-icon table-action userBindRoles" data-toggle="modal" data-target="#userBindRoles">',
        '<i class="fa fa-link"></i>',
        '</a> ',

        '<a rel="tooltip" title="用户API绑定" class="btn btn-simple btn-info btn-icon table-action userBindAPI" data-toggle="modal">',
        '<i class="fa fa-link"></i>',
        '</a> ',

        '<a rel="tooltip" title="查看信息" class="btn btn-simple btn-info btn-icon table-action getMsg" data-toggle="modal" data-target="#getMsg">',
        '<i class="fa fa-search"></i>',
        '</a> ',

        ' <a rel="tooltip" title="修改信息" class="btn btn-simple btn-warning btn-icon table-action setMsg" data-toggle="modal" data-target="#setMsg">',
        '<i class="fa fa-pencil"></i>',
        '</a> ',

        ' <a rel="tooltip" title="删除信息" class="btn btn-simple btn-danger btn-icon table-action remove">',
        '<i class="fa fa-trash"></i>',
        '</a>'
    ].join('');
}

function clearChildrenPage(data) {
    var id = data.id;
    var obj = $table[data.id + "_data"];
    for (var k in obj) {
        if( k == "IS_ENT" || k == "SEX" ){
            $("#"+id+"_"+k+"0").removeAttr("checked");
            $("#"+id+"_"+k+"1").removeAttr("checked");
        }else if( k == "STATUS" ){
            $("#"+id+"_"+k+"0").removeAttr("checked");
            $("#"+id+"_"+k+"1").removeAttr("checked");
            $("#"+id+"_"+k+"2").removeAttr("checked");
            $("#"+id+"_"+k+"3").removeAttr("checked");

        }else{
            $("#" + id + "_" + k).val("");
        }
    }
}

function regForInput(str) {
    return !/[^\w\u4e00-\u9fa5]/g.test(str);
}

function getOrsetShowMsg(data) {
    var id = data.id,
        obj = {},
        rowData = data.rowData;
    if (id == "setMsg") {
        obj = $table.setMsg_data;
    } else if (id == "getMsg") {
        obj = $table.getMsg_data;
    }
    for (var k in obj) {
        if( k == "IS_ENT" ){
            console.log("###############");
            console.log(rowData);
            console.log(obj);
            console.log(obj[k]);
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

        }else if( k == "SEX"){
            if( rowData[k] == "男"){
                $("#"+id+"_"+k+"0").prop('checked',true);
            }else if(rowData[k] == "女"){
                $("#"+id+"_"+k+"1").prop('checked',true);
            }else if(rowData[k] == ""){//未知
                $("#"+id+"_"+k+"2").prop('checked',true);
            }
        }else{
            $("#" + id + "_" + k).val(rowData[k]);
        }
    }
}

function getAll() {
    $.ajax({
        type: 'post',
        url: "http://localhost:8080/permissions/api/getApiResourcesAll",
        data: 'paramOfAll=&paramOfDate={"startTime":"","endTime":""}',
        success: function success(data) {
            try {
                if (data.code == "000") {
                    var list = data.value;
                    $tableAPI.bootstrapTable('prepend', list);
                    updataTable();

                } else {
                    swal("数据查询失败！", "获取当前用户绑定AIP资源失败，code:" + data.code, "error");
                    //swal("数据删除失败！",JSON.stringify(data),"error");
                }
            } catch (error) {
                console.log("【 bootstrapTable - 返回结果 - 报错 】");
                console.log(error);
            }
        },
        error: function(error) {
            console.log("【 bootstrapTable - 报错 】");
            console.log(error);
        }
    });
}

function updataTable() {
    //$table.rowData=row;
    /*console.log("####################打印：");
    console.log(row);*/
    $.ajax({
        type: 'post',
        url: ajaxBaseURL + "/users/getOneUsersAllApis",
        data: "USER_ID=" + $table.rowData.USER_ID,
        success: function success(data) {
            try {
                if (data.code == "000") {
                    // swal("查询成功",JSON.stringify(data));
                    var list = data.apiList;
                    // swal("success",JSON.stringify(list),"success");
                    if (list.length == 0) {
                        //list[i].state=true;
                        swal("查询成功", "当前页面没有绑定API数据", "success");
                    } else {
                        var removeKeyList = [];

                        for (var i = 0; i < list.length; i++) {
                            list[i].state = true;
                            removeKeyList.push(list[i].API_RESOURCE_ID)
                        }
                        // $tableAPI.bootstrapTable('remove',{field:$tableAPI.key,values:removeKeyList});
                        // cleanTable(removeKeyList,list);
                        $tableAPI.bootstrapTable('remove', {
                            field: $tableAPI.key,
                            values: removeKeyList
                        })
                            .bootstrapTable('prepend', list);
                        // swal("查询成功,获得数据",JSON.stringify(list),"success");
                        //console.log("################");
                        //console.log(JSON.stringify(list));
                    }
                    $("#screenUserBox").fadeOut(800);
                    $("#userBox").fadeOut(800);
                } else {
                    swal("查询失败", "", "error");
                }
            } catch (error) {
                console.log("【 bootstrapTable - 返回结果 - 报错 】");
                console.log(error);
            }
        },
        error: function(_error5) {
            function error() {
                return _error5.apply(this, arguments);
            }
            error.toString = function() {
                return _error5.toString();
            };
            return error;
        }(function() {
            console.log("【 bootstrapTable - 报错 】");
            console.log(error);
        })
    });
}

function ajaxData() {}
$().ready(function() {
    window.operateEvents = {
        'click .userBindRoles': function clickUserBindRoles(e, value, row, RESOURCE_ID) {
            clearUserBindRolesPage($table.userBindRolesData);
            $table.rowData = row;
            $.ajax({
                type: 'post',
                url: ajaxBaseURL + "/" + baseField + "/" + "getOneUsersAllRoles",
                data: "USER_ID=" + row.USER_ID,
                success: function success(data) {
                    try {
                        if (data.code == "000") {
                            //swal("查询成功", "","success");
                            var list = data.rolesList;
                            for (var i = 0; i < list.length; i++) {
                                //console.log("----------------");
                                //console.log("#userBindRoles_" + list[i].USER_ROLE_ID);
                                $("#userBindRoles_" + list[i].USER_ROLE_ID).prop("checked", true);
                            }
                        } else {
                            swal("查询失败", "","error");
                        }
                    } catch (error) {
                        console.log("【 bootstrapTable - 返回结果 - 报错 】");
                        console.log(error);
                    }
                },
                error: function(_error5) {
                    function error() {
                        return _error5.apply(this, arguments);
                    }
                    error.toString = function() {
                        return _error5.toString();
                    };
                    return error;
                }(function() {
                    console.log("【 bootstrapTable - 报错 】");
                    console.log(error);
                })
            });
        },

        'click .userBindAPI': function clickUserBindAPI(e, value, row, API_RESOURCE_ID) {
            $table.rowData = row;
            $tableAPI.bootstrapTable('removeAll');
            $("#iBoxOfAPITable").removeClass("hidden");
            getAll();
        },

        'click .getMsg': function clickGetMsg(e, value, row, RESOURCE_ID) {
            clearChildrenPage({
                id: "getMsg"
            });
            $table.rowData = row;
            getOrsetShowMsg({
                id: "getMsg",
                rowData: row
            });
            /*$.ajax({
                type: 'post',
                url: ajaxBaseURL + "/" + baseField + "/getOne" + baseField.slice(0, 1).toUpperCase() + baseField.slice(1) + "ById",
                data: $table.key + "=" + row[$table.key],
                success: function success(data) {
                    try {
                        console.log(data);
                        window.str = JSON.stringify(data);
                        var objData = $table["getMsg_data"],
                            value = data.value;
                        for (var k in objData) {
                            $("#getMsg_data_" + objData[k]).val(value[k]);
                        }
                    } catch (error) {
                        console.log("【 bootstrapTable - 返回结果 - 报错 】");
                        console.log(error);
                    }
                },
                error: function(_error6) {
                    function error() {
                        return _error6.apply(this, arguments);
                    }
                    error.toString = function() {
                        return _error6.toString();
                    };
                    return error;
                }(function() {
                    console.log("【 bootstrapTable - 报错 】");
                    console.log(error);
                })
            });*/
        },
        'click .setMsg': function clickSetMsg(e, value, row, index) {
            $("#setMsg_USER_ID").attr("disabled",true);
            clearChildrenPage({
                id: "setMsg"
            });
            $table.rowData = row;
            getOrsetShowMsg({
                id: "setMsg",
                rowData: row
            });
        },
        'click .remove': function clickRemove(e, value, row, RESOURCE_ID) {
            console.log(row);
            $table.rowData = row;
            swal({
                    title: "是否删除数据",
                    text: "将删除此条数据的所有信息",
                    type: "warning",
                    confirmButtonText: "删除",
                    cancelButtonText: "取消",
                    showCancelButton: true,
                    closeOnConfirm: false,
                    showLoaderOnConfirm: true
                },
                function() {
                    $table.bootstrapTable('remove', {
                        field: 'id',
                        values: [row.id]
                    });
                    $.ajax({
                        type: 'post',
                        url: ajaxBaseURL + "/" + baseField + "/delete" + baseField.slice(0, 1).toUpperCase() + baseField.slice(1) + "ById",
                        data: $table.key + "=" + row[$table.key],
                        success: function success(data) {
                            try {
                                if (data.code == "000") {

                                    swal("数据成功删除！", "", "success");
                                    $table.bootstrapTable('remove', {
                                        field: $table.key,
                                        values: [row[$table.key]]
                                    });
                                    console.log(JSON.stringify(data));
                                } else {
                                    swal("数据删除失败！", /*JSON.stringify(data)*/ "", "error");
                                }
                            } catch (error) {
                                console.log("【 bootstrapTable - 返回结果 - 报错 】");
                                console.log(error);
                            }
                        },
                        error: function(_error7) {
                            function error() {
                                return _error7.apply(this, arguments);
                            }
                            error.toString = function() {
                                return _error7.toString();
                            };
                            return error;
                        }(function() {
                            console.log("【 bootstrapTable - 报错 】");
                            console.log(error);
                        })
                    });
                });
        }
    };

    bootTable({
        id: 'theBootstraptable'
    });
    $('[rel="tooltip"]').tooltip();
});
Date.prototype.Format = function(fmt) {
    var o = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        "S": this.getMilliseconds()
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
    }
    return fmt;
};

function bootTable(d) {
    function randomString() {
        var string = "ABCDEFGHIGKLMNOPQRSTUVWXYZabcdefghijklmnopqrstquwxyz";
        var s = "";
        for (var i = 0; i < 10; i++) {
            s += string[parseInt(string.length * Math.random())];
        }
        return s;
    }

    function exportExcel(list) {
        var headData = $table.headData;
        var option = {},
            dataList = list;
        option.fileName = new Date().Format("yyyy-MM-dd") + "-" + new Date().valueOf();
        option.datas = [];
        option.datas[0] = {};
        option.datas[0].sheetHeader = [];
        option.datas[0].sheetName = 'sheet' + randomString();
        option.datas[0].sheetFilter = [];
        for (var k in headData) {
            option.datas[0].sheetHeader.push(headData[k]);
            option.datas[0].sheetFilter.push(k);
        }
        option.datas[0].sheetData = dataList;
        var toExcel = new ExportJsonExcel(option);
        toExcel.saveExcel();
    }

    function allDataProcessing(data) {
        var fragment = document.createDocumentFragment(),
            head = data.obj,
            pageId = data.pageId,
            id = data.pageId.split("_")[0];
        for (var k in head) {
            let v = head[k],str="";

            if(  k == "IS_ENT" ){
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
                //+'<input type="text" class="form-control" id="'+id+'_'+k+'" placeholder="请输入'+v+'">'
                /*+'<select class="form-control" id="'+ id +'_'+ k +'" >'+
                '<option value="0">可用</option>' +
                '<option value="1">不可用</option>' +
                '</select>'
                +'</div>'
                +'</div>';*/

            }else if(  k == "SEX" ){
                str=
                    '<div class="form-group">'
                    +'<label for="'+id+'_'+k+'" class="col-sm-3 control-label">'+v+'：</label>'
                    +'<div class="col-sm-9">'+

                    '<div class="radio radio-success col-sm-6">' +
                    '<input type="radio" name="'+ id +'_'+ k +'" id="'+ id +'_'+ k +'0" value="0">' +
                    '<label for="'+ id +'_'+ k +'0">' +
                    '男' +
                    '</label>' +
                    '</div>' +
                    '<div class="radio radio-success col-sm-6">' +
                    '<input type="radio" name="'+ id +'_'+ k +'" id="'+ id +'_'+ k +'1" value="1">' +
                    '<label for="'+ id +'_'+ k +'1">' +
                    '女' +
                    '</label>' +
                    '</div>' +
                    '<div class="radio radio-success col-sm-6">' +
                    '<input type="radio" name="' + id +'_'+ k + '" id="'+ id +'_'+ k +'2" value="2">' +
                    '<label for="'+ id +'_'+ k +'2">' +
                    '未知' +
                    '</label>' +
                    '</div>';
            }else if( k == "STATUS" ){
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
                    '</div>'+
                    '<div class="radio radio-danger col-sm-6">' +
                    '<input type="radio" name="' + id +'_'+ k + '" id="'+ id +'_'+ k +'2" value="2">' +
                    '<label for="'+ id +'_'+ k +'2">' +
                    '删除' +
                    '</label>' +
                    '</div>'+
                    '<div class="radio radio-danger col-sm-6">' +
                    '<input type="radio" name="' + id +'_'+ k + '" id="'+ id +'_'+ k +'3" value="3">' +
                    '<label for="'+ id +'_'+ k +'3">' +
                    '暂停' +
                    '</label>' +
                    '</div>';

            }else{

                str = '<div class="form-group"><label for="' + id + '_' + k + '" class="col-sm-3 control-label">' + v + '：</label><div class="col-sm-9"><input type="text" class="form-control" id="' + id + '_' + k + '" placeholder="请输入' + v + '"></div></div>';
                /*str=
                    '<div class="form-group">'
                    +'<label for="'+id+'_'+k+'" class="col-sm-3 control-label">'+v+'：</label>'
                    +'<div class="col-sm-9"><input type="text" class="form-control" id="'+id+'_'+k+'" placeholder="请输入'+v+'"></div>'
                    +'</div>';*/
            }
            /* if( k == "USER_ID"){
                str = '<div class="form-group"><label for="' + id + '_' + k + '" class="col-sm-3 control-label">' + v + '：</label><div class="col-sm-9"><input type="text" disabled class="form-control" id="' + id + '_' + k + '" placeholder="请输入' + v + '"></div></div>';

            }else*/



            $(fragment).append(str);
        }
        $("#" + pageId).append(fragment);
    }

    function transferAllDataProcessing(head) {
        var userPlus_data = {},
            getMsg_data = {},
            setMsg_data = {},
            main_data = {},
            excel_data = {},
            all_data = {};
        for (var k in head) {
            var s = head[k].split(",")[1];
            head[k] = head[k].split(",")[0];
            s = s.split("-");
            all_data[k] = "";
            if (s[0] == "1") {
                main_data[k] = head[k];
            }
            if (s[1] == "1") {
                getMsg_data[k] = head[k];
            }
            if (s[2] == "1") {
                userPlus_data[k] = head[k];
            }
            if (s[3] == "1") {
                setMsg_data[k] = head[k];
            }
        }
        allDataProcessing({
            pageId: "userPlus_from",
            obj: userPlus_data
        });
        $table.userPlus_data = userPlus_data;
        allDataProcessing({
            pageId: "getMsg_from",
            obj: getMsg_data
        });
        $table.getMsg_data = getMsg_data;
        allDataProcessing({
            pageId: "setMsg_from",
            obj: setMsg_data
        });
        $table.setMsg_data = setMsg_data;
        $table.excel_data = excel_data;
        $table.all_data = all_data;
        $table.headData = main_data;
        return main_data;
    }

    var $table = $('#' + d.id);
    var dataUrl = $table.attr("name");
    $($('#' + d.id).parent().children(".exportExcel")[0]).on("click", function() {
        exportExcel($table.bootstrapTable('getOptions').data);
    });
    console.log("###############加载allData");
    console.log(ajaxBaseURL + dataUrl);
    $.ajax({
        type: 'post',
        url: ajaxBaseURL + dataUrl,
        data: 'paramOfAll=&paramOfDate={"startTime":"","endTime":""}',
        success: function success(data) {
            try {
                if(data.code == "000"){
                    var obj = data;
                    var list = obj.value,
                        headList = [],
                        headData = transferAllDataProcessing(obj.head);
                    headList.push({
                        checkbox: true,
                        fieId: 'state',
                        title: 'checkBox'
                    });
                    headList.push({
                        field: 'action',
                        title: '操作',
                        halign: "center",
                        align: 'right',
                        textOverflow: "true",
                        formatter: "operateFormatter",
                        events: 'operateEvents'
                    });
                    for (var k in headData) {
                        headList.push({
                            field: k,
                            sortable: true,
                            title: headData[k]
                        });
                    }
                    for(var i=0;i<list.length;i++){
                        if( list[i].IS_ENT ){
                            if( list[i].IS_ENT == "0"){
                                list[i].IS_ENT = "可用";
                            }else if( list[i].IS_ENT == "1"){
                                list[i].IS_ENT = "不可用";
                            }
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
                        if( list[i].SEX ){
                            if( list[i].SEX == "0"){
                                list[i].SEX = "男";
                            }else if( list[i].SEX == "1"){
                                list[i].SEX = "女";
                            }

                        }
                    }
                    $table.bootstrapTable({
                        columns: headList,
                        data: list,
                        toolbar: ".toolbar",
                        striped: true,
                        search: true,
                        showToggle: true,
                        showColumns: true,
                        pagination: true,
                        uniqueId: obj.key,
                        searchAlign: 'left',
                        pageList: [5,10, 25, 50, 100],
                        pageSize: 5,
                        icons: {
                            refresh: 'fa fa-refresh',
                            toggle: 'fa fa-th-list',
                            columns: 'fa fa-columns',
                            detailOpen: 'fa fa-plus-circle',
                            detailClose: 'fa fa-minus-circle'
                        }
                    });
                    window.$table = $table;
                    window.$table.key = obj.key;
                    userBindRolesPageBind();

                }else{
                    swal("很抱歉抱歉，加载错误",'cose'+ data.code +","+data.msg+",尝试刷新或联系管理员。","error");
                }
            } catch (error) {
                console.log("【 bootstrapTable - 返回结果 - 报错 】");
                console.log(error);
            }
        },
        error: function(_error8) {
            function error(_x3) {
                return _error8.apply(this, arguments);
            }
            error.toString = function() {
                return _error8.toString();
            };
            return error;
        }(function(error) {
            console.log("【 bootstrapTable - 报错 】");
            console.log(error);
        })
    });
    $(window).resize(function() {
        $table.bootstrapTable('resetView');
    });
}