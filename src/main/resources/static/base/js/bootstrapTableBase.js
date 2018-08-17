/********
 * creat By Bear
 * 2018/02/09
 * *********/

//todo 增加信息子页面，点击保存按钮触发的方法
$("#userPlus_submit").on("click",function (){
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
        function(){
            //all_data 每一字数据的全量字符，此方法当前没有 all_data ,并生成回传数据
            var headData = $table.headData,data = "",all_data = $table.all_data,obj={};
            for( var k in all_data ){
                let str = $("#userPlus_"+ k ).val();
                if( !regForInput(str) ){
                    swal("违规填写数据","填写数据只能含有汉字、大小写字母、“_”或是数字","error");
                    return "";
                }

                if( k == "CREATE_DATE" ){
                    data += ( k + "=now()&" );
                    obj[k] = new Date();
                }else if( k == "MODIFY_DATE"){
                    data += ( k + "=now()&" );

                }else if( k == "" || k == null || k == undefined ){
                    data += ( k + "=&" );
                    obj[k] = ""
                }else {
                    data += ( k + "="+ str +"&" );
                    obj[k] = str;
                }
            }
            data = data.slice(0,-1);
            console.log(data);
            $.ajax({
                type:'post',
                url: ajaxBaseURL + "/"+baseField+"/insert"+ baseField.slice(0,1).toUpperCase() + baseField.slice(1),
                data:data,
                success:function(data){
                    try{
                        if(data.code == "000"){
                            swal("成功新增数据！","","success");
                            console.log(JSON.stringify(data));
                            $table.bootstrapTable('prepend',[obj]);
                            $("#userPlus").modal('hide')  //关闭模态框
                        }else{
                            swal("新增数据失败！",JSON.stringify(data),"error");
                        }
                        //$("#getMsg").modal('hide')  //关闭模态框
                    }catch(error){
                        swal("  insert 返回值报错",JSON.stringify(data),"error");
                        console.log("【 bootstrapTable - 返回结果 - 报错 】");
                        console.log( error );
                    }

                },
                error:function(error){
                    swal("  insert 方法报错",JSON.stringify(data),"error");
                    console.log("【 insert 方法 - ajax 报错 】");
                    console.log(error);
                }
            });

        });
});
//todo 修改信息子页面，点击保存按钮
$("#setMsg_submit").on("click",function(){
    swal({
            title: "是否修改此条数据",
            text: "",
            type: "warning",
            confirmButtonText: "修改",
            cancelButtonText: "取消",
            showCancelButton: true,
            closeOnConfirm: false,
            showLoaderOnConfirm: true,
        },
        function(){
            var rowData = $table.rowData,
                headData = $table.setMsg_data,
                str = "";
            for(var k in headData ){
                let str = $( "#setMsg_" + k ).val();
                if( regForInput(str) ){
                    rowData[k] = str;
                }else{
                    swal("违规填写数据","填写数据只能含有汉字、大小写字母、“_”或是数字","error");
                    return ""
                }
            }

            for(var k in rowData ){
                if( k == "CREATE_DATE" ){
                    str += ( k + "=now()&" );
                }else  if( k == "MODIFY_DATE"){
                    str += ( k + "=now()&" );
                }else if( k == "" || k == null || k == undefined ){
                    str += ( k + "=&" )
                }else{
                    str += k + "=" + rowData[k] + "&";
                }
            }
            console.log("############");
            console.log(str.slice(0,-1));
            str = str.slice(0,-1);
            $.ajax({
                type:'post',
                url: ajaxBaseURL + "/"+ baseField +"/update"+ baseField.slice(0,1).toUpperCase()+ baseField.slice(1) +"ById",
                //url: ajaxBaseURL + "/roles/updateRolesById",
                data: str,
                success:function(data){
                    try{
                        if(data.code == "000"){
                            swal("成功修改数据！","","success");
                            $table.bootstrapTable('remove', { field: $table.key, values: [ rowData[$table.key] ]});
                            $table.bootstrapTable('prepend',[rowData]);
                            $("#setMsg").modal('hide');  //关闭模态框
                            console.log(JSON.stringify(data));
                        }else{
                            swal("修改数据失败！",JSON.stringify(data),"error");
                        }


                    }catch(error){
                        console.log("【 bootstrapTable - 返回结果 - 报错 】");
                        console.log( error );
                    }

                },
                error:function(error){
                    console.log("【 bootstrapTable - 报错 】");
                    console.log(error);
                }
            });
        })

});
//todo 点击新增一条按钮
$("#plusMsg").on("click",function(){
    clearChildrenPage({id:"userPlus"});
});

//todo 清空子页面的信息；
function clearChildrenPage(data){
    var id = data.id;
    var obj = $table[ data.id + "_data"] ;
    for(var k in obj ){
        $( "#" + id + "_" + k ).val("");
    }
}
//todo 校验input数据是否符合约定形式
function regForInput(str){
    return !/[^\w\u4e00-\u9fa5\.]/g.test(str);
}
/*******
 * getOrsetShowMsg  //在子页面加载数据
 * getOrsetShowMsg({id:"setMsg or getMsg",rowData:row});
 * ******/
function getOrsetShowMsg( data ){
    var id = data.id,obj={},rowData = data.rowData;
    if( id == "setMsg"){
        obj = $table.setMsg_data;
    }else if( id == "getMsg" ){
        obj = $table.getMsg_data;
    }//else if(){}
    for(var k in obj){
        $("#"+ id + "_" + k ).val( rowData[k] )
    }

}

function deleteOrganizationBindAllById(){

    $.ajax({
        type:'post',
        url: ajaxBaseURL + "/"+baseField+"/deleteOrganizationBindAllById",
        data: $table.key + "=" + $table.rowData[$table.key],
        success:function(data){
            try{
                if(data.code == "000"){
                    swal("数据成功删除！","","success");
                    $table.bootstrapTable('remove', {field: $table.key, values: [ $table.rowData[$table.key] ]});
                }else{
                    swal("数据删除失败！",JSON.stringify(data),"error");
                }


                //alert(data);

            }catch(error){
                console.log("【 bootstrapTable - 返回结果 - 报错 】");
                console.log( error );
            }

        },
        error:function(){
            console.log("【 bootstrapTable - 报错 】");
            console.log(error);
        }
    });

}
//action 的 页面操作 事件绑定
$().ready(function(){
    //todo 初始化时间插件
    //$( "#datepicker" ).datepicker();

    //todo action 的 页面操作 按钮样式
    window.operateFormatter = function (value, row,USER_ID ) {
        return [
            '<a rel="tooltip" title="查看信息" class="btn btn-simple btn-info btn-icon table-action getMsg" data-toggle="modal" data-target="#getMsg">',
            '<i class="fa fa-search"></i>',
            '</a> ',

            ' <a rel="tooltip" title="修改信息" class="btn btn-simple btn-warning btn-icon table-action setMsg" data-toggle="modal" data-target="#setMsg">',
            '<i class="fa fa-pencil"></i>',
            '</a> ',

            ' <a rel="tooltip" title="删除信息" class="btn btn-simple btn-danger btn-icon table-action remove">',
            '<i class="fa fa-trash"></i>',
            '</a> '
        ].join('');
    };


    window.operateEvents = {
        //TODO 查看一条
        'click .getMsg': function (e, value, row, RESOURCE_ID) {

            clearChildrenPage({id:"getMsg"});
            $table.rowData = row;

            /*******
             * getOrsetShowMsg  //在子页面加载数据
             * getOrsetShowMsg({id:"setMsg or getMsg",rowData:row});
             * ******/
            getOrsetShowMsg({id:"getMsg",rowData:row });
            //查看一条数据信息
            $.ajax({
                type:'post',
                url: ajaxBaseURL + "/"+baseField+"/getOne"+ baseField.slice(0,1).toUpperCase() + baseField.slice(1) +"ById",

                data: $table.key + "=" + row[$table.key],
                success:function(data){
                    try{
                        console.log(data);
                        window.str = JSON.stringify(data);
                        var objData = $table["getMsg_data"],value = data.value ;
                        for(var k in objData ){
                            $( "#getMsg_data_" + objData[k] ).val(value[k]);
                        }

                    }catch(error){
                        console.log("【 bootstrapTable - 返回结果 - 报错 】");
                        console.log( error );
                    }

                },
                error:function(){
                    console.log("【 bootstrapTable - 报错 】");
                    console.log(error);
                }
            });
        },
        //TODO 修改一条
        'click .setMsg': function (e, value, row, index) {
            clearChildrenPage({id:"setMsg"});
            $table.rowData = row;
            /*******
             * getOrsetShowMsg  //在子页面加载数据
             * getOrsetShowMsg({id:"setMsg or getMsg",rowData:row});
             * ******/
            getOrsetShowMsg({ id:"setMsg",rowData:row });
        },
        //TODO 删除一条
        'click .remove': function (e, value, row) {
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
                function(){
                    $table.bootstrapTable('remove', {
                        field: 'id',
                        values: [row.id]
                    });
                    // getResourcesBindDetailById( row[$table.key] );
                    // 不查询直接删除的方法
                    $.ajax({
                        type:'post',
                        url: ajaxBaseURL + "/"+baseField+"/getOrganizationBindDetailById",
                        data: $table.key + "=" + row[$table.key],
                        success:function(data){
                            try{
                                if(data.code == "000"){
                                    if(data.organizationList.length == 0){
                                        deleteOrganizationBindAllById();
                                    }else{
                                        swal({
                                                title: "当前部门已经绑定用户",
                                                text: "是否删除数据",
                                                type: "error",
                                                confirmButtonText: "删除",
                                                cancelButtonText: "取消",
                                                showCancelButton: true,
                                                closeOnConfirm: false,
                                                showLoaderOnConfirm: true,
                                            },
                                            function(){
                                                deleteOrganizationBindAllById();
                                            });

                                    }


                                    $table.bootstrapTable('remove', {field: $table.key, values: [ row[$table.key] ]});
                                }else{
                                    swal("数据删除失败！",JSON.stringify(data),"error");
                                }


                                //alert(data);

                            }catch(error){
                                console.log("【 bootstrapTable - 返回结果 - 报错 】");
                                console.log( error );
                            }

                        },
                        error:function(){
                            console.log("【 bootstrapTable - 报错 】");
                            console.log(error);
                        }
                    });

                });
        },

    };


    bootTable( { id:'theBootstraptable' } );


    //activate the tooltips after the data table is initialized
    $('[rel="tooltip"]').tooltip();

    /**/


});




//日期格式
Date.prototype.Format = function(fmt) { //author: meizz
    var o = {
        "M+" : this.getMonth()+1,                 //月份
        "d+" : this.getDate(),                    //日
        "h+" : this.getHours(),                   //小时
        "m+" : this.getMinutes(),                 //分
        "s+" : this.getSeconds(),                 //秒
        "q+" : Math.floor((this.getMonth()+3)/3), //季度
        "S"  : this.getMilliseconds()             //毫秒
    };
    if(/(y+)/.test(fmt))
        fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
    for(var k in o)
        if(new RegExp("("+ k +")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
    return fmt;
};

function bootTable( d ){

    //todo excel随机命名字段
    function randomString(){
        var string = "ABCDEFGHIGKLMNOPQRSTUVWXYZabcdefghijklmnopqrstquwxyz";
        var s ="";
        for(var i=0;i<10;i++){
            s += string[parseInt( string.length * Math.random() )]
        }
        return s;
    }
    //todo 导出Excel文件
    function exportExcel(list){
        //导出文件的字段还需要更改
        var headData = $table.headData;
        var option={},dataList = list;

        option.fileName = ( new Date() ).Format("yyyy-MM-dd") + $table + "-" + ( new Date() ).valueOf();//randomString();

        option.datas=[];
        option.datas[0]={};
        option.datas[0].sheetHeader=[];
        option.datas[0].sheetName= 'sheet' + randomString();
        option.datas[0].sheetFilter = [];
        for(var k in headData){
            option.datas[0].sheetHeader.push( headData[k] );
            option.datas[0].sheetFilter.push( k );
        }
        option.datas[0].sheetData = dataList;
        //console.log("############打印:option" );
        //console.log(option);
        //console.log(headData);
        var toExcel=new ExportJsonExcel(option);
        toExcel.saveExcel();
    }
    //todo 挂载子页面的方法
    function allDataProcessing(data){
        var fragment = document.createDocumentFragment(),
            head = data.obj,
            pageId= data.pageId,
            id =data.pageId.split("_")[0];

        for(var k in head){
            let v = head[k];
            var str='<div class="form-group"><label for="'+ id +'_'+ k +'" class="col-sm-3 control-label">' + v + '：</label><div class="col-sm-9"><input type="text" class="form-control" id="'+ id +'_'+ k + '" placeholder="请输入'+ v +'"></div></div>';
            $( fragment ).append(str);
        }
        $( "#" + pageId ).append( fragment );

    }
    //数据处理后调用挂载子页面的方法
    function transferAllDataProcessing ( head ){
        var userPlus_data = {},getMsg_data = {},setMsg_data = {},main_data={},excel_data={},all_data={};
        for(var k in head){
            //console.log(head.k);
            let s = head[k].split(",")[1];
            head[k] = head[k].split(",")[0];
            s = s.split("-");
            all_data[k]= "";
            //console.log(k);
            if( s[0] == "1"){
                main_data[k] = head[k];
            }
            if( s[1] == "1" ){  //查询
                //console.log("1");
                getMsg_data[k] = head[k];
            }
            if( s[2] == "1" ){  //增加
                //console.log("2");
                userPlus_data[k] = head[k];
            }
            if( s[3] == "1" ){  //修改
                //console.log("3");
                setMsg_data[k] = head[k];
            }
        }
        //todo userPlus   //增加一条 userPlus_from
        allDataProcessing({ pageId : "userPlus_from", obj : userPlus_data});
        $table.userPlus_data = userPlus_data;
        //todo getMsg     //查询单个数据
        allDataProcessing({ pageId : "getMsg_from", obj : getMsg_data});
        $table.getMsg_data = getMsg_data;
        //todo setMsg     //修改一条数据
        allDataProcessing({ pageId : "setMsg_from", obj : setMsg_data});
        $table.setMsg_data = setMsg_data;
        $table.excel_data = excel_data;
        $table.all_data = all_data;

        $table.headData = main_data;

        return main_data;
    }


    var $table = $( '#' + d.id );
    var dataUrl = $table.attr("name");
    $( $( '#' + d.id ).parent().children(".exportExcel")[0] ).on("click",function(){
        //console.log("点击导出");
        exportExcel( $table.bootstrapTable('getOptions').data );
    });

    // 请求服务器 allData 加载插件
/*    console.log("###############加载allData");
    console.log(ajaxBaseURL + dataUrl);*/
    $.ajax({
        type:'post',
        url:  ajaxBaseURL + dataUrl,
        data:'paramOfAll=&paramOfDate={"startTime":"","endTime":""}',
        success:function(data){
            try{
                //打印ajax 之后 allData
                //window.str = data;
                //window.allStr = JSON.stringify(data);
                var obj =  data;
                //console.log(JSON.stringify(data.value));
                var list = obj.value,
                    headList = [],
                    headData = transferAllDataProcessing(obj.head);

                headList.push({

                    checkbox : true,
                    fieId : 'state',
                    title : 'checkBox'
                });
                headList.push({
                    field: 'action',
                    title: '操作',
                    halign : "center",
                    align : 'right',
                    textOverflow :"true",
                    formatter : "operateFormatter",
                    events : 'operateEvents'
                });

                for(var k in headData ){
                    headList.push({
                        field: k,
                        sortable : true,
                        title: headData[k]
                    });
                }
                //todo 主页面table - bootstrapTable插件加载数据

                //todo all数据
                $table.bootstrapTable({
                    //head
                    columns: headList,
                    //body
                    data : list,
                    toolbar: ".toolbar",
                    //clickToSelect: true,        //是否启用点击选中行
                    //showRefresh: true,
                    striped: true,
                    search: true,
                    showToggle: true,
                    showColumns: true,
                    pagination: true,
                    uniqueId: obj.key,              //每一行的唯一标识，一般为主键列
                    //pageSize: 8,  //每一页展示的信息数量
                    //clickToSelect: false,
                    searchAlign: 'left',
                    //idField: "RESOURCE_ID",
                    pageList: [10,25,50,100],
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
            }catch(error){
                console.log("【 bootstrapTable - 返回结果 - 报错 】");
                console.log( error );
            }

        },
        error:function(error){
            console.log("【 bootstrapTable - 报错 】");
            console.log(error);
        }
    });


    $(window).resize(function () {
        $table.bootstrapTable('resetView');


    });
    //window.transferAllDataProcessing = transferAllDataProcessing;

}
