/********
 * creat By xmh
 * 2018/03/14
 * *********/
var data = {  //todo base 初始话数据示例
    bootstrapTableId:"APITable",//todo 页面的tableId 同一页面初始化时的唯一标识！！！
    tableName:"$tableAPI",//todo eg:$table,$table1 等为数据的外部调用做准备
    buttonList:[ //todo table中的每一行添加定制按钮  需要添加几个数据就按示例添加
        {
            buttonName:"修改信息",//todo 按钮鼠标移入的中文提示
            buttonColor:"btn-info",//todo 按钮颜色： btn-warning btn-info
            buttonIcon:"fa fa-home",//todo 按钮图标：fa fa-trash ，fa fa-home
            actionToModalsId:"demo",//todo 点击事件需要倒开的模态框
            buttonEventName:"demo",//todo 按钮时间名称：remove，set，get 同一 table 内的事件名不能重复
            buttonFunction : function(e, value, row){ //todo 按钮点击后的执行调用方法（事件）
                console.log('当前按钮点击-并执行调用方法');
                swal("success","","success");
                //todo row :当前按钮所在行的全量数据
                console.log( JSON.stringify(row) );
            }
        },{
            buttonName:"",//todo 按钮鼠标移入的中文提示
            buttonColor:"btn-warning",//todo 按钮颜色： btn-warning
            buttonIcon:"fa fa-trash",//todo 按钮图标：fa fa-trash ，fa fa-home
            actionToModalsId:"demo1",//todo 点击事件需要倒开的模态框
            buttonEventName:"demo12",//todo 按钮时间名称：remove，set，get 同一 table 内的事件名不能重复
            buttonFunction : function(e, value, row){ //todo 按钮点击后的执行调用方法（事件）
                console.log('当前按钮点击-并执行调用方法');
                //todo row :当前按钮所在行的全量数据
                console.log( JSON.stringify(row) );
            }
        },{
            buttonName:"查询全部",//todo 按钮鼠标移入的中文提示
            buttonColor:"btn-warning",//todo 按钮颜色： btn-warning
            buttonIcon:"fa fa-trash",//todo 按钮图标：fa fa-trash ，fa fa-home
            actionToModalsId:"demo2",//todo 点击事件需要倒开的模态框
            buttonEventName:"demo12",//todo 按钮时间名称：remove，set，get 同一 table 内的事件名不能重复
            buttonFunction : function(e, value, row){ //todo 按钮点击后的执行调用方法（事件）
                console.log('当前按钮点击-并执行调用方法');
                //todo row :当前按钮所在行的全量数据
                swal("查询成功","!!!!","success");
                console.log( JSON.stringify(row) );
            }
        }
    ],
    //todo ** operateEventsName，operateFormatterName，以下两个字段必须传值，当一个页面需要初始话的时候必须保证同一个页面的两个table对应的这两个方法不重名！！！
    lineKey:"API_RESOURCE_ID",//todo 每一行的主键
    operateEventsName:"operateEventsAPI",//todo 页面操作 回调方法名称
    operateFormatterName:"operateFormatterAPI",//todo 页面操作 按钮样式 - 事件名称
    pageList:[ 5,10,30 ],//todo  [5,10,30] 每页显示数据数量
    dataList:[//todo 页面挂载的全量数据 数据格式[{state:true,name:'wang',age:18,value:"..."},{ name:'zhang',age:18,value:"..."},{ name:'li',age:18,value:"..."}]

    ],
};
function aipInit(list){
    data.dataList=list;
    bootTableBase( data );
}

//action 的 页面操作 事件绑定
$().ready(function(){
    //todo 初始化时间插件  "#datepicker" 时间元素ID
    $( "#datepicker" ).datepicker();
    //todo 调用方法~！！！！
    $.ajax({
        type:'post',
        url:"http://localhost:8080/permissions/api/getApiResourcesAll",
        data:'paramOfAll=&paramOfDate={"startTime":"","endTime":""}',
        success:function success(data){
            try{
                if(data.code=="000"){
                    //swal("数据成功删除！","","success");
                    console.log("打印成功数据");console.log(data);console.log( JSON.stringify(data) );
                    aipInit(data.value);

                }else{
                    //swal("数据删除失败！",JSON.stringify(data),"error");
                }
            }catch(error){
                console.log("【 bootstrapTable - 返回结果 - 报错 】");
                console.log(error);
            }
        },
        error:function(error){
            console.log("【 bootstrapTable - 报错 】");
            console.log(error);
        }
    });
    //activate the tooltips after the data table is initialized
    $('[rel="tooltip"]').tooltip();
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


function bootTableBase( data ){
    //todo action 的 页面操作 按钮样式
    var buttonList = data.buttonList,obj={},str="";

    for(var i=0;i<buttonList.length;i++){
        obj[ "click ." + buttonList[i].buttonEventName ] = buttonList[i].buttonFunction;
        str += '<a rel="tooltip" title="'+ buttonList[i].buttonName +'" class="btn btn-simple '+ buttonList[i].buttonColor +' btn-icon table-action '+ buttonList[i].buttonEventName +'" data-toggle="modal" data-target="#'+ buttonList[i].actionToModalsId +'">'+
            '<i class="'+ buttonList[i].buttonIcon +'"></i>'+
            '</a> ';
        //list.push( str );
    }

    window[data.operateFormatterName] = function(){
        return str;
    };

    //todo action 的 页面操作 回调方法
    window[data.operateEventsName] = obj ;

    //todo 主页面table - bootstrapTable插件加载数据
    var $_table = $( '#' + data.bootstrapTableId );
    //todo all数据
    $_table.bootstrapTable({
        //head
        //columns: headList,
        //body
        data : data.dataList,
        toolbar: ".toolbar",
        //clickToSelect: true,        //是否启用点击选中行
        //showRefresh: true,
        striped: true,
        search: true,
        showToggle: true,
        showColumns: true,
        pagination: true,
        uniqueId: obj.key,              //每一行的唯一标识，一般为主键列
        pageSize: data.pageList[0],  //每一页展示的信息数量
        //clickToSelect: false,
        searchAlign: 'left',
        //idField: "RESOURCE_ID",
        pageList: data.pageList,
        icons: {
            refresh: 'fa fa-refresh',
            toggle: 'fa fa-th-list',
            columns: 'fa fa-columns',
            detailOpen: 'fa fa-plus-circle',
            detailClose: 'fa fa-minus-circle'
        }
    });
    window[data.tableName] = $_table;
    window[data.tableName].key = data.lineKey;
}
