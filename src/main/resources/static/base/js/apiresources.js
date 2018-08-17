/********
 * creat By xmh
 * 2018/03/13
 * *********/

function show_modal() {
    $('#myModal').modal('show');
}

function showIBoxButton() {}

function getApiResourcesBindDetailById(str) {
    $.ajax({
        type: 'post',
        url: ajaxBaseURL + "/" + baseField + "/get" + baseField.slice(0, 1).toUpperCase() + baseField.slice(1) + "BindDetailById",
        data: $table.key + "=" + str,
        success: function(data) {
            try {
                if (data.code == "000") {
                    if (data.resourcesList.length == 0) {
                        swal("当前资源没有被占用！", "", "success");
                        deleteApiResourcesById(str);
                    } else {
                        swal({
                                title: "资源信息被占用",
                                text: "删除当前资源信息被占用",
                                type: "warning",
                                confirmButtonText: "删除",
                                cancelButtonText: "取消",
                                showCancelButton: true,
                                closeOnConfirm: false,
                                showLoaderOnConfirm: true,
                            },
                            function() {});
                    }


                    //最后删除
                    //$table.bootstrapTable('remove', {field: $table.key, values: [ row[$table.key] ]});
                    //swal("数据成功删除！");
                    //console.log(JSON.stringify(data));

                } else {
                    swal("数据删除失败！", /*JSON.stringify(data)*/ "", "error");
                }


                //alert(data);

            } catch (error) {
                console.log("【 bootstrapTable - 返回结果 - 报错 】");
                console.log(error);
            }

        },
        error: function() {
            console.log("【 bootstrapTable - 报错 】");
            console.log(error);
        }
    });

}

function deleteApiResourcesById() {
    $.ajax({
        type: 'post',
        url: ajaxBaseURL + "/api/deleteApiResourcesById",
        data: "API_RESOURCE_ID=" + $table.rowData[$table.key],
        success: function(data) {
            try {
                if (data.code == "000") {
                    swal("删除数据成功！", /*JSON.stringify(data)*/ "", "success");
                    $table.bootstrapTable('remove', {
                        field: $table.key,
                        values: [$table.rowData[$table.key]]
                    });
                } else {
                    swal("删除数据失败！", /*JSON.stringify(data)*/ "", "error");
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
$("#closeIBoxOfButtonTable").on("click", function() {
    $("#iBoxTable").fadeIn("1000");
    $("#iBoxOfButtonTable").addClass("hidden");
});
$("#userPlus_submit").on("click", function() {
    swal({
            title: "是否新增数据",
            text: "此条数据将同步数据库",
            type: "warning",
            confirmButtonText: "新增",
            cancelButtonText: "取消",
            showCancelButton: true,
            closeOnConfirm: false,
            showLoaderOnConfirm: true,
        },
        function() {
            var headData = $table.headData,
                data = "",
                all_data = $table.all_data,
                obj = {};
            for(var k in all_data){
                let str=$("#userPlus_"+k).val();
                if(!regForInput(str)){swal("违规填写数据","填写数据只能含有汉字、大小写字母、“_”或是数字","error");return"";}

                if( k == "API_RESOURCE_NAME" && str == "" ){
                    swal("请填写资源名","资源名字段不可为空","warning");
                    return "";
                }else if( k == "API_RESOURCE_ID"){
                    data+= k+"="+ uuid() +"&";
                }else if(k=="CREATE_DATE"){
                    data+=(k+"=now()&");
                    obj[k]=new Date();
                }else if(k=="MODIFY_DATE"){
                    data+=(k+"=now()&");
                }else if( k == "STATUS"  ){
                    data+= k+"=";
                    if( !$("#userPlus_"+k+"0").prop('checked') && !$("#userPlus_"+k+"1").prop('checked') && !$("#userPlus_"+k+"2").prop('checked') && !$("#userPlus_"+k+"3").prop('checked')  ){
                        swal("请勾选用户状态","","error");
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
                }else  if(k==""||k==null||k==undefined){
                    data+=(k+"=&");
                    obj[k]="";
                }else{
                    data+=(k+"="+str+"&");
                    obj[k]=str;
                }
            }
            data = data.slice(0, -1);
            console.log(data);
            $.ajax({
                type: 'post',
                url: ajaxBaseURL + "/api/insertApiResources",
                data: data,
                success: function(data) {
                    try {
                        if (data.code == "000") {
                            swal("成功新增数据！", "", "success");
                            console.log(JSON.stringify(data));
                            $table.bootstrapTable('prepend', [obj]);
                            $("#userPlus").modal('hide')
                        } else {
                            swal("新增数据失败！", /*JSON.stringify(data)*/ "", "error");
                        }
                    } catch (error) {
                        console.log("【 bootstrapTable - 返回结果 - 报错 】");
                        console.log(error);
                    }
                },
                error: function() {
                    console.log("【 bootstrapTable - 报错 】");
                    console.log(error);
                }
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
        showLoaderOnConfirm: true,
    }, function() {
        var rowData = $table.rowData,
            headData = $table.setMsg_data,
            str = "";
        for(var k in headData){
            let str=$("#setMsg_"+k).val();
            if(regForInput(str)){
                rowData[k]=str;
            }else{
                swal("违规填写数据","填写数据只能含有汉字、大小写字母、“_”或是数字","error");
                return""
            }
        }
        for(var k in rowData){
            let str=$("#setMsg_"+k).val();
            if( k == "API_RESOURCE_NAME" && str == "" ){
                swal("请填写资源名","资源名字段不可为空","warning");
                return "";
            }else if(k=="CREATE_DATE"){
                str+=(k+"=now()&");
            }else if(k=="MODIFY_DATE"){
                str+=(k+"=now()&");
            }else if( k == "STATUS"){
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
            }else if( k == "RESOURCE_ID" ){
                str+= k+"=" + rowData[$table.key] + "&";
            }else if(k==""||k==null||k==undefined){
                str+= k+"=&";
            }else{
                str+=k+"="+rowData[k]+"&";
            }
        }
        console.log("############");
        console.log(str.slice(0, -1));
        str = str.slice(0, -1);
        $.ajax({
            type: 'post',
            url: ajaxBaseURL + "/api/updateApiResourcesById",
            data: str,
            success: function(data) {
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
            error: function(error) {
                console.log("【 bootstrapTable - 报错 】");
                console.log(error);
            }
        });
    })
});
$("#plusMsg").on("click", function() {
    clearChildrenPage({
        id: "userPlus"
    });
});

function clearChildrenPage(data) {
    var id = data.id;
    var obj = $table[data.id + "_data"];
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
    }
}

function regForInput(str) {
    return !/[^\w\u4e00-\u9fa5\.]/g.test(str);
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

        }else{
            $("#"+id+"_"+k).val(rowData[k])
        }
    }
}

function ajaxData() {}
$().ready(function() {
    resourcesBindButtonTable();
    window.operateFormatter = function(value, row, USER_ID) {
        return ['<a rel="tooltip" title="查看信息" class="btn btn-simple btn-info btn-icon table-action getMsg" data-toggle="modal" data-target="#getMsg">', '<i class="fa fa-search"></i>', '</a> ', '' +
        '<a rel="tooltip" title="修改信息" class="btn btn-simple btn-warning btn-icon table-action setMsg" data-toggle="modal" data-target="#setMsg">', '<i class="fa fa-pencil"></i>', '</a> ', '' +
        '<a rel="tooltip" title="删除信息" class="btn btn-simple btn-danger btn-icon table-action remove">', '<i class="fa fa-trash"></i>', '</a> '
        ].join('');
    };
    window.operateEvents = {
        'click .getMsg': function(e, value, row, API_RESOURCE_ID) {
            clearChildrenPage({
                id: "getMsg"
            });
            $table.rowData = row;
            getOrsetShowMsg({
                id: "getMsg",
                rowData: row
            });
            $.ajax({
                type: 'post',
                url: ajaxBaseURL + "/" + baseField + "/getOne" + baseField.slice(0, 1).toUpperCase() + baseField.slice(1) + "ById",
                data: $table.key + "=" + row[$table.key],
                success: function(data) {
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
                error: function() {
                    console.log("【 bootstrapTable - 报错 】");
                    console.log(error);
                }
            });
        },
        'click .setMsg': function(e, value, row, index) {
            clearChildrenPage({
                id: "setMsg"
            });
            $table.rowData = row;
            getOrsetShowMsg({
                id: "setMsg",
                rowData: row
            });
        },
        'click .remove': function(e, value, row, API_RESOURCE_ID) {
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
                    showLoaderOnConfirm: true,
                },
                function() {
                    $table.bootstrapTable('remove', {
                        field: 'id',
                        values: [row.id]
                    });
                    getApiResourcesBindDetailById(row[$table.key]);
                });
        },
        'click .resourcesBindButton': function(e, value, row) {
            $table.rowData = row;
            $("#iBoxTable").fadeOut("500");
            $("#iBoxOfButtonTable").removeClass("hidden");
            $table1.bootstrapTable('removeAll');
            $.ajax({
                type: 'post',
                url: ajaxBaseURL + "/api/getApiResourcesAll",
                data: $table.key + "=" + row[$table.key],
                success: function(data) {
                    try {
                        var list = data.value;
                        if (list.length == 0) {
                            swal("查询成功！-- 当前页面没有绑定", /*JSON.stringify(data)*/ "", "success");
                        } else {
                            $table1.bootstrapTable('prepend', list);
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
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
};

function bootTable(d) {
    function randomString() {
        var string = "ABCDEFGHIGKLMNOPQRSTUVWXYZabcdefghijklmnopqrstquwxyz";
        var s = "";
        for (var i = 0; i < 10; i++) {
            s += string[parseInt(string.length * Math.random())]
        }
        return s;
    }

    function exportExcel(list) {
        var headData = $table.headData;
        var option = {},
            dataList = list;
        option.fileName = (new Date()).Format("yyyy-MM-dd") + "-" + (new Date()).valueOf();
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
        for(var k in head){
            let v=head[k],str="";
            if( k == "IS_ENT" ){
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
                    '<input type="radio" name="'+ id +'_'+ k +'" id="'+ id +'_'+ k +'1" value="1">' +
                    '<label for="'+ id +'_'+ k +'1">' +
                    '不可用' +
                    '</label>' +
                    '</div>' +
                    '<div class="radio radio-danger col-sm-6">' +
                    '<input type="radio" name="'+ id +'_'+ k +'" id="'+ id +'_'+ k +'2" value="2">' +
                    '<label for="'+ id +'_'+ k +'2">' +
                    '删除' +
                    '</label>' +
                    '</div>' +
                    '<div class="radio radio-danger col-sm-6">' +
                    '<input type="radio" name="' + id +'_'+ k + '" id="'+ id +'_'+ k +'3" value="3">' +
                    '<label for="'+ id +'_'+ k +'3">' +
                    '暂停' +
                    '</label>' +
                    '</div>';

            }else if( k == "RESOURCE_ID"){//todo 资源ID

            }else if( k == "CREATE_DATE"){//todo 创建时间

            }else{
                str=
                    '<div class="form-group">'+
                    '<label for="'+id+'_'+k+'" class="col-sm-3 control-label">'+v+'：</label>'+
                    '<div class="col-sm-9"><input type="text" class="form-control" id="'+id+'_'+k+'" placeholder="请输入'+v+'"></div>'+
                    '</div>';
            }


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
            let s = head[k].split(",")[1];
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
        success: function(data) {
            try {
                var obj = data;
                console.log(JSON.stringify(data.value));
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
                    //console.log('进入循环');
                    if( list[i].IS_ENT ){
                        if(list[i].IS_ENT  == "0"){
                            list[i].IS_ENT = "可用" ;
                        }else if( list[i].IS_ENT  == "1" ){
                            list[i].IS_ENT = "不可用"
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
                    pageList: [10, 25, 50, 100],
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
    $(window).resize(function() {
        $table.bootstrapTable('resetView');
    });
}

function resourcesBindButtonTable() {
    var $_table = $("#buttonTable");
    window["$table1"] = $_table;

    function uuid() {
        var s = [];
        var hexDigits = "0123456789abcdef";
        for (var i = 0; i < 6; i++) {
            s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
        }
        var uuid = new Date().valueOf() + "_" + s.join("");
        return uuid;
    }
    $("#createOneButtonMsg_submit").on("click", function() {
        var list = ["SORT_CODE", "API_RESOURCE_ID", "BUTTON_NAME", "REMARK", "BUTTON_URL"],
            str = "";
        for (var i = 0; i < list.length; i++) {
            str += "&" + list[i] + "=" + $("#createOneButtonMsg_" + list[i]).val();
        }
        swal({
            title: "确认创建当前按钮信息",
            text: "将创建当前按钮信息",
            type: "warning",
            confirmButtonText: "确认",
            cancelButtonText: "取消",
            showCancelButton: true,
            closeOnConfirm: false,
            showLoaderOnConfirm: true,
        }, function() {
            var BUTTON_ID = uuid();
            $.ajax({
                type: 'post',
                url: ajaxBaseURL + "/api/insertApiResources",
                data: "API_RESOURCE_ID=" + BUTTON_ID + "&" + str,
                success: function(data) {
                    try {
                        if (data.code == "000") {
                            swal("创建按钮成功！", "", "success");
                            $("#createOneButtonMsg").modal('hide');
                            var inputObj = {
                                BUTTON_ID: BUTTON_ID
                            };
                            for (var i = 0; i < list.length; i++) {
                                inputObj[list[i]] = $("#createOneButtonMsg_" + list[i]).val();
                            }
                            $table1.bootstrapTable('prepend', [inputObj]);
                        } else {
                            swal("数据修改失败！", /*JSON.stringify(data)*/ "", "error");
                        }
                    } catch (error) {
                        console.log("【 bootstrapTable - $.ajax - 返回结果 - 报错 】");
                        console.log(error);
                    }
                },
                error: function() {
                    console.log("【 bootstrapTable - $.ajax - 报错 】");
                    console.log(error);
                }
            });
        });
    });
    $("#createOneButton").on("click", function() {
        $("#createOneButtonMsg_RESOURCE_ID").val($table.rowData[$table.key]);
    });
    $("#setOneButtonMsg_submit").on("click", function() {
        var id = $table1.rowId;
        swal({
            title: "是否修改 API 数据",
            text: "将删除此条 API 数据的所有信息",
            type: "warning",
            confirmButtonText: "修改",
            cancelButtonText: "取消",
            showCancelButton: true,
            closeOnConfirm: false,
            showLoaderOnConfirm: true,
        }, function() {
            var list = ["SORT_CODE", "API_RESOURCE_ID", "API_RESOURCE_NAME", "REMARK", "API_URL"],
                str = "";
            for (var i = 0; i < list.length; i++) {
                str += "&" + list[i] + "=" + $("#setOneButtonMsg_" + list[i]).val();
            }
            $.ajax({
                type: 'post',
                url: ajaxBaseURL + "/api/updateApiResourcesById",
                data: "API_RESOURCE_ID=" + id + str,
                success: function(data) {
                    try {
                        if (data.code == "000") {
                            swal("数据修改成功！", "", "success");
                            $table1.bootstrapTable('remove', {
                                field: "API_RESOURCE_ID",
                                values: [$table1.rowId]
                            });
                            $("#setOneButtonMsg").modal('hide');
                        } else {
                            swal("数据修改失败！", /*JSON.stringify(data)*/ "", "error");
                        }
                    } catch (error) {
                        console.log("【 bootstrapTable - 返回结果 - 报错 】");
                        console.log(error);
                    }
                },
                error: function() {
                    console.log("【 bootstrapTable - 报错 】");
                    console.log(error);
                }
            });
        });
    });

    function loadTableAllMsg() {
        $.ajax({
            type: 'post',
            url: ajaxBaseURL + "/api/getApiResourcesAll",
            data: $table.key + "=" + row[$table.key],
            success: function(data) {
                try {
                    var list = data.value;
                    if (list.length == 0) {
                        swal("查询成功！-- 当前页面没有绑定", /*JSON.stringify(data)*/ "", "success");
                    } else if (list.code == "000") {
                        swal("创建按钮成功！", "", "success");
                        $table1.bootstrapTable('removeAll');
                        $table1.bootstrapTable('load', list);
                    } else {
                        swal("获取数据失败！", /*JSON.stringify(data)*/ "", "error");
                    }
                } catch (error) {
                    console.log("【 bootstrapTable - $.ajax - 返回结果 - 报错 】");
                    console.log(error);
                }
            },
            error: function() {
                console.log("【 bootstrapTable - $.ajax - 报错 】");
                console.log(error);
            }
        });
    }
    window.operateFormatterOfButtonTable = function(value, row, USER_ID) {
        return ['<a rel="tooltip" title="修改 API 信息" class="btn btn-simple btn-warning btn-icon table-action setOneButtonMsg" data-toggle="modal" data-target="#setOneButtonMsg">', '<i class="fa fa-pencil"></i>', '</a> ', '<a rel="tooltip" title="删除 API 信息" class="btn btn-simple btn-danger btn-icon table-action removeOneButtonMsg">', '<i class="fa fa-trash"></i>', '</a> '].join('');
    };
    window.operateEventsOfButtonTable = {
        'click .getMsg': function(e, value, row, API_RESOURCE_ID) {
            clearChildrenPage({
                id: "getMsg"
            });
            $table.rowData = row;
            getOrsetShowMsg({
                id: "getMsg",
                rowData: row
            });
            $.ajax({
                type: 'post',
                url: ajaxBaseURL + "/" + baseField + "/getOne" + baseField.slice(0, 1).toUpperCase() + baseField.slice(1) + "ById",
                data: $table.key + "=" + row[$table.key],
                success: function(data) {
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
                error: function(error) {
                    console.log("【 bootstrapTable - 报错 】");
                    console.log(error);
                }
            });
        },
        'click .setMsg': function(e, value, row, index) {
            clearChildrenPage({
                id: "setMsg"
            });
            $table.rowData = row;
            getOrsetShowMsg({
                id: "setMsg",
                rowData: row
            });
        },
        'click .remove': function(e, value, row, API_RESOURCE_ID) {
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
                showLoaderOnConfirm: true,
            }, function() {
                $table.bootstrapTable('remove', {
                    field: 'id',
                    values: [row.id]
                });
            });
        },
        'click .removeOneButtonMsg': function(e, value, row, API_RESOURCE_ID) {
            $table1.key = "BUTTON_ID";
            $table1.rowData = row;
            swal({
                title: "是否删除按钮信息",
                text: "将删除此条按钮的所有信息",
                type: "warning",
                confirmButtonText: "删除",
                cancelButtonText: "取消",
                showCancelButton: true,
                closeOnConfirm: false,
                showLoaderOnConfirm: true,
            }, function() {
                $.ajax({
                    type: 'post',
                    url: ajaxBaseURL + "/api/deleteApiResourcesById",
                    data: $table1.key + "=" + row[$table1.key],
                    success: function(data) {
                        try {
                            if (data.code == "000") {
                                swal("数据成功删除！", "", "success");
                                $table1.bootstrapTable('remove', {
                                    field: $table1.key,
                                    values: [row[$table1.key]]
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
                    error: function(error) {
                        console.log("【 bootstrapTable - 报错 】");
                        console.log(error);
                    }
                });
            });
        },
        'click .setOneButtonMsg': function(e, value, row) {
            window["$table1"].rowId = row.BUTTON_ID;
            console.log("row.BUTTON_ID");
            console.log(row.BUTTON_ID);
            $.ajax({
                type: 'post',
                url: ajaxBaseURL + "/api/getOneApiResourcesById",
                data: "API_RESOURCE_ID=" + row.BUTTON_ID,
                success: function(data) {
                    try {
                        if (data.code == "000") {
                            swal("获取数据成功！", /*JSON.stringify(data)*/ "", "success");
                            var obj = data.value;
                            for (var key in obj) {
                                $("#setOneButtonMsg_" + key).val(obj[key]);
                            }
                        } else {
                            swal("获取数据失败！", /*JSON.stringify(data)*/ "", "error");
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
        },
    };
    $_table.bootstrapTable({
        toolbar: ".toolbar",
        striped: true,
        search: true,
        showToggle: true,
        showColumns: true,
        pagination: true,
        searchAlign: 'left',
        pageList: [5, 10],
        icons: {
            refresh: 'fa fa-refresh',
            toggle: 'fa fa-th-list',
            columns: 'fa fa-columns',
            detailOpen: 'fa fa-plus-circle',
            detailClose: 'fa fa-minus-circle'
        }
    });
}