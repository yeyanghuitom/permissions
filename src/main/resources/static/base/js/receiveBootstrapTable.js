/**
 * Created by Bear on 2018/1/25.
 *
 * bootstrapTable 前台页面配置好Table - head 之后的加载
 */


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
    var thead = d.thead;
    function randomString(){
        var string = "ABCDEFGHIGKLMNOPQRSTUVWXYZabcdefghijklmnopqrstquwxyz";
        var s ="";
        for(var i=0;i<10;i++){
            s += string[parseInt( string.length * Math.random() )]
        }
        return s;
    }
    //导出Excel文件
    function exportExcel(list){
        var option={},dataList = list;

        option.fileName = (new Date()).Format("yyyy-MM-dd") + "-" + randomString();

        option.datas=[];
        option.datas[0]={};
        option.datas[0].sheetHeader=[];
        option.datas[0].sheetName= 'sheet' + randomString();
        option.datas[0].sheetFilter = [];
        for(var k in thead){
            option.datas[0].sheetHeader.push( thead[k] );
            option.datas[0].sheetFilter.push( k );
        }
        option.datas[0].sheetData = dataList;
        //console.log("############打印:option" );
        //console.log(option);
        //console.log(thead);
        var toExcel=new ExportJsonExcel(option);
        toExcel.saveExcel();
    }


    var $table = $( '#' + d.id );
    var dataUrl = $table.attr("name");
    $( $( '#' + d.id ).parent().children(".exportExcel")[0] ).on("click",function(){
        //console.log("点击导出");
        exportExcel( $table.bootstrapTable('getOptions').data );
    });

    $table.bootstrapTable({
        /*columns: [
         {

         checkbox : true,
         fieId : 'checkBox',
         title : 'checkBox'
         },
         {
         field: 'id',
         title: 'Item ID'
         }, {
         field: 'name',
         title: 'Item Name'
         }, {
         field: 'price',
         title: 'Item Price'
         }, {
         field: 'action',
         title: '操作',
         halign : "center",
         align : 'right',
         formatter : "operateFormatter",
         events : 'operateEvents'
         }
         ],*/
        toolbar: ".toolbar",
        clickToSelect: true,        //是否启用点击选中行
        //showRefresh: true,
        search: true,
        showToggle: true,
        showColumns: true,
        pagination: true,
        uniqueId: "index",              //每一行的唯一标识，一般为主键列
        //pageSize: 8,  //每一页展示的信息数量
        //clickToSelect: false,
        searchAlign: 'left',
        idField: "index",
        pageList: [10,25,50,100],
        icons: {
            refresh: 'fa fa-refresh',
            toggle: 'fa fa-th-list',
            columns: 'fa fa-columns',
            detailOpen: 'fa fa-plus-circle',
            detailClose: 'fa fa-minus-circle'
        }
    });
    $.ajax({
        type:'post',
        url:dataUrl,
        success:function(data){
            try{
                var obj =  JSON.parse( data );
                var list = obj.value;
                $table.bootstrapTable('load', list );
                window.$table = $table;

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


    $(window).resize(function () {
        $table.bootstrapTable('resetView');


    });


}
