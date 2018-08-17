/**
 * Created by Bear on 2018/4/10.
 */


/********
 * creat By Bear
 * 2018/03/08
 * *********/
var datac = {  //todo base 初始话数据示例
    bootstrapTableId:"bsTable",//todo 页面的tableId 同一页面初始化时的唯一标识！！！
    tableName:"$table",//todo eg:$table,$table1 等为数据的外部调用做准备
    buttonList:[ //todo table中的每一行添加定制按钮  需要添加几个数据就按示例添加
    ],
    //todo ** operateEventsName，operateFormatterName，以下两个字段必须传值，当一个页面需要初始话的时候必须保证同一个页面的两个table对应的这两个方法不重名！！！
    lineKey:"",//todo 每一行的主键
    operateEventsName:"",//todo 页面操作 回调方法名称
    operateFormatterName:"",//todo 页面操作 按钮样式 - 事件名称
    pageList:[30,50],//todo  [5,10,30] 每页显示数据数量
    headList:[/*表头*/

    ],//todo table 表头数据
    dataList:[

    ],
};



function bootTable(data){

    //todo action 的 页面操作 按钮样式
    var buttonList = data.buttonList,obj={},str="";

    for(var i=0;i<buttonList.length;i++){
        obj[ "click ." + buttonList[i].buttonEventName ] = buttonList[i].buttonFunction;
        str += '<a rel="tooltip" title="'+ buttonList[i].buttonName +'" class="btn btn-simple '+ buttonList[i].buttonColor +' btn-icon table-action '+ buttonList[i].buttonEventName +'" data-toggle="modal" data-target="#'+ buttonList[i].actionToModalsId +'">'+
            '<i class="'+ buttonList[i].buttonIcon +'"></i>'+
            '</a> ';
    };


    window[data.operateFormatterName] = function(){
        return str;
    };

    //todo action 的 页面操作 回调方法
    window[data.operateEventsName] = obj ;

    //todo 主页面table - bootstrapTable插件加载数据
    var $_table = $( '#' + data.bootstrapTableId );
    $_table.bootstrapTable('destroy');
    //todo all数据
    $_table.bootstrapTable({
        //todo tableHead
        columns: data.headList,
        //todo tableBody
        data : data.dataList,

        toolbar: ".toolbar",
        clickToSelect: true,        //是否启用点击选中行
        striped: true,
        search: true,
        showColumns: true,           //是否显示所有的列控制
        pagination: true,
        uniqueId: obj.key,              //每一行的唯一标识，一般为主键列
        pageSize: data.pageList[0],  //每一页展示的信息数量
        searchAlign: 'left',
        pageList: data.pageList,
        silent: true,  //刷新事件必须设置
        fixedColumns:true, //todo  冻结列
        fixedNumber:1,  //todo  冻结列数量
        height:500 , //todo 冻结表头
        icons: {
            refresh: 'fa fa-refresh',
            toggle: 'fa fa-th-list',
            columns: 'fa fa-columns',
            detailOpen: 'fa fa-plus-circle',
            detailClose: 'fa fa-minus-circle'
        }
    });

    $_table.headData = data.headList;
    window[data.tableName] = $_table;
    window[data.tableName].key = data.lineKey;





}

var vueData = {
    vueName :"vueApp", //todo Vue元素外放名称
    vueControl:"",
    methods:{
        changeAllSelected:function(key){
            if(this.data[key].selectedFirst == '0'){
                this.data[key].showSecondAndThird = false;
            }else{
                this.data[key].showSecondAndThird = true;
            }
        }
    },
    data:{
        data:[
            {//todo 指标（ 标签 ）
                quota:{
                    name:"quota",
                },
                //todo 初始时间
                initial :{
                    name:"initial",
                },
                //todo 比较
                comparing :{
                    name:"comparing",
                },
                //todo 区域
                region :{
                    name:"region",
                },
                //todo 用户类型
                userType :{
                    name:"userType",
                },
                //todo 部门
                department :{
                    name:"department",
                },

                selectedFirst:'',
                selectedSecond:'',
                selectedThird:'',
                showSecondAndThird:false,
                /*checkedAll : false,*/
            }
        ]

    },
    computed :{
    },
    watch : {
    },

    el:"myVue_filter"
};


function createVue(data){
    console.log("进入创建Vue方法");
    window[data.vueName ] = new Vue({
        el: '#'+data.el,// todo vue的view 模块ID
        data:data.data ,
        methods:data.methods,
        computed :data.computed,
        watch :data.watch
    });
}

//action 的 页面操作 事件绑定
/*$().ready(function(){
    bootTable( datac );
    //activate the tooltips after the data table is initialized
    $('[rel="tooltip"]').tooltip();
    createVue( vueData );
});*/

