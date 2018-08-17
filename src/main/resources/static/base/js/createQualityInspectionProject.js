/**
 * Created by Bear on 2018/3/13.
 */

//createQualityInspectionProject
var data_sd = {  //todo base 初始话数据示例
    bootstrapTableId:"theBootstraptable_SD",//todo 页面的tableId 同一页面初始化时的唯一标识！！！
    tableName:"$table_SD",//todo eg:$table,$table1 等为数据的外部调用做准备
    buttonList:[ //todo table中的每一行添加定制按钮  需要添加几个数据就按示例添加
    ],
    lineKey:"",//todo 每一行的主键
    operateEventsName:"operateEvents",//todo 页面操作 回调方法名称
    operateFormatterName:"operateFormatter",//todo 页面操作 按钮样式 - 事件名称
    pageList:[ 10 ],//todo  [5,10,30] 每页显示数据数量
    headList:[
        [
            {
                "title": "山东呼叫中心",
                "halign":"center",
                "align":"center",
                "colspan": 10
            }
        ],
        [
            {
                field: 'uploadDate',
                title: "上传日期",
                valign:"middle",
                align:"center"
            },
            {
                field: 'examinationType',
                title: '卷型',
                valign:"middle",
                align:"center"
            },
            {
                field: 'uploadDataCount',
                title: '上传数据量',
                valign:"middle",
                align:"center"
            },
            {
                field: 'evaluation',
                title: '评价情况',
                valign:"middle",
                align:"center"
            },
            {
                field: 'projectUnassignedCount',
                title: '活动未检数量',
                valign:"middle",
                align:"center"
            },
            {
                field: 'planAssignedCount',
                title: '计划分配量	',
                valign:"middle",
                align:"center"
            },
            {
                field: 'samplingInspectionCount',
                title: '抽检分配量（质检中心）',
                valign:"middle",
                align:"center"
            },
            {
                field: 'mutualInspectionCount',
                title: '互检分配量（呼叫中心）',
                valign:"middle",
                align:"center"
            },
            {
                field: 'arrearsCount',
                title: '已释放拖欠数量',
                valign:"middle",
                align:"center"
            },{
            field: 'saveCache',
            title: '操作',
            valign:"middle",
            align:"center"
        },
            /*{
                field: 'action',
                title: '操作',
                halign : "center",
                align : 'right',
                formatter : "operateFormatter",
                events : 'operateEvents'
            }
            ,{
             field: 'samplingInspection',
             title: '抽检已分配量',
             valign:"middle",
             align:"center"
             },
             {
             field: 'samplingInspection',
             title: '互检已分配量',
             valign:"middle",
             align:"center"
             }*/
        ]
    ],
    dataList:[
        {
            "key":"1",
            'uploadDate':'2018-03-11',
            'examinationType':'移网',
            'uploadDataCount':'1500',
            'evaluation':'推荐',
            'projectUnassignedCount':'400',
            'planAssignedCount':'40',
            'samplingInspectionCount':'<input type="text" class="input-group SDMobileSave_sampling">',
            'mutualInspectionCount':'<input type="text" class="input-group SDMobileSave_mutual">',
            'arrearsCount':'50',
            'saveCache':'<button id="SDMobileSave" class="btn btn-primary"> 保 存 </button>'
        },
        {
            "key":"2",
            'uploadDate':'2018-03-11',
            'examinationType':'移网',
            'uploadDataCount':'1500',
            'evaluation':'中立',
            'projectUnassignedCount':'700',
            'planAssignedCount':'60',
            'samplingInspectionCount':'<input type="text" class="input-group SDMobileSave_sampling">',
            'mutualInspectionCount':'<input type="text" class="input-group SDMobileSave_mutual">',
            'arrearsCount':'50',
            'saveCache':''
        },
        {
            "key":"3",
            'uploadDate':'2018-03-11',
            'examinationType':'移网',
            'uploadDataCount':'1500',
            'evaluation':'贬损',
            'projectUnassignedCount':'400',
            'planAssignedCount':'200',
            'samplingInspectionCount':'<input type="text" class="input-group SDMobileSave_sampling">',
            'mutualInspectionCount':'<input type="text" class="input-group SDMobileSave_mutual">',
            'arrearsCount':'50',
            'saveCache':''
        },
        {
            "key":"4",
            'uploadDate':'2018-03-11',
            'examinationType':'宽带',
            'uploadDataCount':'1500',
            'evaluation':'推荐',
            'projectUnassignedCount':'400',
            'planAssignedCount':'40',
            'samplingInspectionCount':'<input type="text" class="input-group SDBroadbandSave_sampling">',
            'mutualInspectionCount':'<input type="text" class="input-group SDBroadbandSave_mutual">',
            'arrearsCount':'50',
            'saveCache':'<button id="SDBroadbandSave" class="btn btn-primary"> 保 存 </button>'
        },
        {
            "key":"5",
            'uploadDate':'2018-03-11',
            'examinationType':'宽带',
            'uploadDataCount':'1500',
            'evaluation':'中立',
            'projectUnassignedCount':'700',
            'planAssignedCount':'60',
            'samplingInspectionCount':'<input type="text" class="input-group SDBroadbandSave_sampling">',
            'mutualInspectionCount':'<input type="text" class="input-group SDBroadbandSave_mutual">',
            'arrearsCount':'50',
            'saveCache':''
        },
        {
            "key":"6",
            'uploadDate':'2018-03-11',
            'examinationType':'宽带',
            'uploadDataCount':'1500',
            'evaluation':'贬损',
            'projectUnassignedCount':'400',
            'planAssignedCount':'200',
            'samplingInspectionCount':'<input type="text" class="input-group SDBroadbandSave_sampling">',
            'mutualInspectionCount':'<input type="text" class="input-group SDBroadbandSave_mutual">',
            'arrearsCount':'50',
            'saveCache':''
        }
    ]
};


var data_sx = {  //todo base 初始话数据示例
    bootstrapTableId:"theBootstraptable_SX",//todo 页面的tableId 同一页面初始化时的唯一标识！！！
    tableName:"$table_SX",//todo eg:$table,$table1 等为数据的外部调用做准备
    buttonList:[
    ],
    lineKey:"",//todo 每一行的主键
    operateEventsName:"operateEvents",//todo 页面操作 回调方法名称
    operateFormatterName:"operateFormatter",//todo 页面操作 按钮样式 - 事件名称
    pageList:[ 10 ],//todo  [5,10,30] 每页显示数据数量
    headList:[
        [
            {
                "title": "陕西呼叫中心",
                "halign":"center",
                "align":"center",
                "colspan": 10
            }
        ],
        [
            {
                field: 'uploadDate',
                title: "上传日期",
                valign:"middle",
                align:"center"
            },
            {
                field: 'examinationType',
                title: '卷型',
                valign:"middle",
                align:"center"
            },
            {
                field: 'uploadDataCount',
                title: '上传数据量',
                valign:"middle",
                align:"center"
            },
            {
                field: 'evaluation',
                title: '评价情况',
                valign:"middle",
                align:"center"
            },
            {
                field: 'projectUnassignedCount',
                title: '活动未检数量',
                valign:"middle",
                align:"center"
            },
            {
                field: 'planAssignedCount',
                title: '计划分配量	',
                valign:"middle",
                align:"center"
            },
            {
                field: 'samplingInspectionCount',
                title: '抽检分配量（质检中心）',
                valign:"middle",
                align:"center"
            },
            {
                field: 'mutualInspectionCount',
                title: '互检分配量（呼叫中心）',
                valign:"middle",
                align:"center"
            },
            {
                field: 'arrearsCount',
                title: '已释放拖欠数量',
                valign:"middle",
                align:"center"
            },{
            field: 'saveCache',
            title: '操作',
            valign:"middle",
            align:"center"
        },
            /*{
                field: 'action',
                title: '操作',
                halign : "center",
                align : 'right',
                formatter : "operateFormatter",
                events : 'operateEvents'
            }
            ,{
             field: 'samplingInspection',
             title: '抽检已分配量',
             valign:"middle",
             align:"center"
             },
             {
             field: 'samplingInspection',
             title: '互检已分配量',
             valign:"middle",
             align:"center"
             }*/
        ]
    ],
    dataList:[
        {
            "key":"1",
            'uploadDate':'2018-03-11',
            'examinationType':'联通移网',
            'uploadDataCount':'1500',
            'evaluation':'推荐',
            'projectUnassignedCount':'400',
            'planAssignedCount':'40',
            'samplingInspectionCount':'<input type="text" class="input-group SXMobileSave_sampling">',
            'mutualInspectionCount':'<input type="text" class="input-group SXMobileSave_mutual">',
            'arrearsCount':'50',
            'saveCache':'<button  id="SXMobileSave" class="btn btn-primary"> 保 存 </button>'
        },
        {
            "key":"2",
            'uploadDate':'2018-03-11',
            'examinationType':'联通移网',
            'uploadDataCount':'1500',
            'evaluation':'中立',
            'projectUnassignedCount':'700',
            'planAssignedCount':'60',
            'samplingInspectionCount':'<input type="text" class="input-group SXMobileSave_sampling">',
            'mutualInspectionCount':'<input type="text" class="input-group SXMobileSave_mutual">',
            'arrearsCount':'50',
            'saveCache':''
        },
        {
            "key":"3",
            'uploadDate':'2018-03-11',
            'examinationType':'联通移网',
            'uploadDataCount':'1500',
            'evaluation':'贬损',
            'projectUnassignedCount':'400',
            'planAssignedCount':'200',
            'samplingInspectionCount':'<input type="text" class="input-group SXMobileSave_sampling">',
            'mutualInspectionCount':'<input type="text" class="input-group SXMobileSave_mutual">',
            'arrearsCount':'50',
            'saveCache':''
        },
        {
            "key":"4",
            'uploadDate':'2018-03-11',
            'examinationType':'竞品移网',
            'uploadDataCount':'1500',
            'evaluation':'推荐',
            'projectUnassignedCount':'400',
            'planAssignedCount':'40',
            'samplingInspectionCount':'<input type="text" class="input-group SXMobileSave_sampling">',
            'mutualInspectionCount':'<input type="text" class="input-group SXMobileSave_mutual">',
            'arrearsCount':'50',
            'saveCache':'<button  id="SXMobileSave" class="btn btn-primary"> 保 存 </button>'
        },
        {
            "key":"5",
            'uploadDate':'2018-03-11',
            'examinationType':'竞品移网',
            'uploadDataCount':'1500',
            'evaluation':'中立',
            'projectUnassignedCount':'700',
            'planAssignedCount':'60',
            'samplingInspectionCount':'<input type="text" class="input-group SXMobileSave_sampling">',
            'mutualInspectionCount':'<input type="text" class="input-group SXMobileSave_mutual">',
            'arrearsCount':'50',
            'saveCache':''
        },
        {
            "key":"6",
            'uploadDate':'2018-03-11',
            'examinationType':'竞品移网',
            'uploadDataCount':'1500',
            'evaluation':'贬损',
            'projectUnassignedCount':'400',
            'planAssignedCount':'200',
            'samplingInspectionCount':'<input type="text" class="input-group SXMobileSave_sampling">',
            'mutualInspectionCount':'<input type="text" class="input-group SXMobileSave_mutual">',
            'arrearsCount':'50',
            'saveCache':''
        },
        {
            "key":"7",
            'uploadDate':'2018-03-11',
            'examinationType':'联通宽带',
            'uploadDataCount':'1500',
            'evaluation':'推荐',
            'projectUnassignedCount':'400',
            'planAssignedCount':'40',
            'samplingInspectionCount':'<input type="text" class="input-group SXBroadbandSave_sampling">',
            'mutualInspectionCount':'<input type="text" class="input-group SXBroadbandSave_mutual">',
            'arrearsCount':'50',
            'saveCache':'<button id="SXBroadbandSave" class="btn btn-primary"> 保 存 </button>'
        },
        {
            "key":"8",
            'uploadDate':'2018-03-11',
            'examinationType':'联通宽带',
            'uploadDataCount':'1500',
            'evaluation':'中立',
            'projectUnassignedCount':'700',
            'planAssignedCount':'60',
            'samplingInspectionCount':'<input type="text" class="input-group SXBroadbandSave_sampling">',
            'mutualInspectionCount':'<input type="text" class="input-group SXBroadbandSave_mutual">',
            'arrearsCount':'50',
            'saveCache':''
        },
        {
            "key":"9",
            'uploadDate':'2018-03-11',
            'examinationType':'联通宽带',
            'uploadDataCount':'1500',
            'evaluation':'贬损',
            'projectUnassignedCount':'400',
            'planAssignedCount':'200',
            'samplingInspectionCount':'<input type="text" class="input-group SXBroadbandSave_sampling">',
            'mutualInspectionCount':'<input type="text" class="input-group SXBroadbandSave_mutual">',
            'arrearsCount':'50',
            'saveCache':''
        },
        {
            "key":"10",
            'uploadDate':'2018-03-11',
            'examinationType':'竞品宽带',
            'uploadDataCount':'1500',
            'evaluation':'推荐',
            'projectUnassignedCount':'400',
            'planAssignedCount':'40',
            'samplingInspectionCount':'<input type="text" class="input-group SXBroadbandSave_sampling">',
            'mutualInspectionCount':'<input type="text" class="input-group SXBroadbandSave_mutual">',
            'arrearsCount':'50',
            'saveCache':'<button id="SXBroadbandSave" class="btn btn-primary"> 保 存 </button>'
        },
        {
            "key":"11",
            'uploadDate':'2018-03-11',
            'examinationType':'竞品宽带',
            'uploadDataCount':'1500',
            'evaluation':'中立',
            'projectUnassignedCount':'700',
            'planAssignedCount':'60',
            'samplingInspectionCount':'<input type="text" class="input-group SXBroadbandSave_sampling">',
            'mutualInspectionCount':'<input type="text" class="input-group SXBroadbandSave_mutual">',
            'arrearsCount':'50',
            'saveCache':''
        },
        {
            "key":"12",
            'uploadDate':'2018-03-11',
            'examinationType':'竞品宽带',
            'uploadDataCount':'1500',
            'evaluation':'贬损',
            'projectUnassignedCount':'400',
            'planAssignedCount':'200',
            'samplingInspectionCount':'<input type="text" class="input-group SXBroadbandSave_sampling">',
            'mutualInspectionCount':'<input type="text" class="input-group SXBroadbandSave_mutual">',
            'arrearsCount':'50',
            'saveCache':''
        }
    ]
};


var data_xxdh = {  //todo base 初始话数据示例
    bootstrapTableId:"theBootstraptable_XXDH",//todo 页面的tableId 同一页面初始化时的唯一标识！！！
    tableName:"$table_XXDH",//todo eg:$table,$table1 等为数据的外部调用做准备
    buttonList:[
    ],
    lineKey:"",//todo 每一行的主键
    operateEventsName:"operateEvents",//todo 页面操作 回调方法名称
    operateFormatterName:"operateFormatter",//todo 页面操作 按钮样式 - 事件名称
    pageList:[ 10 ],//todo  [5,10,30] 每页显示数据数量
    headList:[
        [
            {
                "title": "信息导航呼叫中心",
                "halign":"center",
                "align":"center",
                "colspan": 10
            }
        ],
        [
            {
                field: 'uploadDate',
                title: "上传日期",
                valign:"middle",
                align:"center"
            },
            {
                field: 'examinationType',
                title: '卷型',
                valign:"middle",
                align:"center"
            },
            {
                field: 'uploadDataCount',
                title: '上传数据量',
                valign:"middle",
                align:"center"
            },
            {
                field: 'evaluation',
                title: '评价情况',
                valign:"middle",
                align:"center"
            },
            {
                field: 'projectUnassignedCount',
                title: '活动未检数量',
                valign:"middle",
                align:"center"
            },
            {
                field: 'planAssignedCount',
                title: '计划分配量	',
                valign:"middle",
                align:"center"
            },
            {
                field: 'samplingInspectionCount',
                title: '抽检分配量（质检中心）',
                valign:"middle",
                align:"center"
            },
            {
                field: 'mutualInspectionCount',
                title: '互检分配量（呼叫中心）',
                valign:"middle",
                align:"center"
            },
            {
                field: 'arrearsCount',
                title: '已释放拖欠数量',
                valign:"middle",
                align:"center"
            },{
            field: 'saveCache',
            title: '操作',
            valign:"middle",
            align:"center"
        },
            /*{
                field: 'action',
                title: '操作',
                halign : "center",
                align : 'right',
                formatter : "operateFormatter",
                events : 'operateEvents'
            }
            ,{
             field: 'samplingInspection',
             title: '抽检已分配量',
             valign:"middle",
             align:"center"
             },
             {
             field: 'samplingInspection',
             title: '互检已分配量',
             valign:"middle",
             align:"center"
             }*/
        ]
    ],
    dataList:[
        {
            "key":"1",
            'uploadDate':'2018-03-11',
            'examinationType':'移网',
            'uploadDataCount':'1500',
            'evaluation':'推荐',
            'projectUnassignedCount':'400',
            'planAssignedCount':'40',
            'samplingInspectionCount':'<input type="text" class="input-group XXMobileSave_sampling">',
            'mutualInspectionCount':'<input type="text" class="input-group XXMobileSave_mutual">',
            'arrearsCount':'50',
            'saveCache':'<button id="XXMobileSave" class="btn btn-primary"> 保 存 </button>'
        },
        {
            "key":"2",
            'uploadDate':'2018-03-11',
            'examinationType':'移网',
            'uploadDataCount':'1500',
            'evaluation':'中立',
            'projectUnassignedCount':'700',
            'planAssignedCount':'60',
            'samplingInspectionCount':'<input type="text" class="input-group XXMobileSave_sampling">',
            'mutualInspectionCount':'<input type="text" class="input-group XXMobileSave_mutual">',
            'arrearsCount':'50',
            'saveCache':''
        },
        {
            "key":"3",
            'uploadDate':'2018-03-11',
            'examinationType':'移网',
            'uploadDataCount':'1500',
            'evaluation':'贬损',
            'projectUnassignedCount':'400',
            'planAssignedCount':'200',
            'samplingInspectionCount':'<input type="text" class="input-group XXMobileSave_sampling">',
            'mutualInspectionCount':'<input type="text" class="input-group XXMobileSave_mutual">',
            'arrearsCount':'50',
            'saveCache':''
        },
        {
            "key":"4",
            'uploadDate':'2018-03-11',
            'examinationType':'宽带',
            'uploadDataCount':'1500',
            'evaluation':'推荐',
            'projectUnassignedCount':'400',
            'planAssignedCount':'40',
            'samplingInspectionCount':'<input type="text" class="input-group XXBroadbandSave_sampling">',
            'mutualInspectionCount':'<input type="text" class="input-group XXBroadbandSave_mutual">',
            'arrearsCount':'50',
            'saveCache':'<button id="XXBroadbandSave" class="btn btn-primary"> 保 存 </button>'
        },
        {
            "key":"5",
            'uploadDate':'2018-03-11',
            'examinationType':'宽带',
            'uploadDataCount':'1500',
            'evaluation':'中立',
            'projectUnassignedCount':'700',
            'planAssignedCount':'60',
            'samplingInspectionCount':'<input type="text" class="input-group XXBroadbandSave_sampling">',
            'mutualInspectionCount':'<input type="text" class="input-group XXBroadbandSave_mutual">',
            'arrearsCount':'50',
            'saveCache':''
        },
        {
            "key":"6",
            'uploadDate':'2018-03-11',
            'examinationType':'宽带',
            'uploadDataCount':'1500',
            'evaluation':'贬损',
            'projectUnassignedCount':'400',
            'planAssignedCount':'200',
            'samplingInspectionCount':'<input type="text" class="input-group XXBroadbandSave_sampling">',
            'mutualInspectionCount':'<input type="text" class="input-group XXBroadbandSave_mutual">',
            'arrearsCount':'50',
            'saveCache':''
        }
    ]
};
//action 的 页面操作 事件绑定


$().ready(function(){
    //todo 初始化时间插件  "#datepicker" 时间元素ID
    $( "#datepicker" ).datepicker();
    //todo 初始化下一步样式
    $('#rootwizard').bootstrapWizard({'tabClass': 'bwizard-steps'});
    bootTable( data_sd );
    bootTable( data_sx );
    bootTable( data_xxdh );

    //todo
    $table_SD.bootstrapTable('mergeCells', {index:"0", field: 'uploadDate', rowspan: 6})
        .bootstrapTable('mergeCells', {index:"0", field: 'examinationType', rowspan: 3})
        .bootstrapTable('mergeCells', {index:"3", field: 'examinationType', rowspan: 3})
        .bootstrapTable('mergeCells', {index:"0", field: 'uploadDataCount', rowspan: 3})
        .bootstrapTable('mergeCells', {index:"3", field: 'uploadDataCount', rowspan: 3})
        .bootstrapTable('mergeCells', {index:"0", field: 'saveCache', rowspan: 3})
        .bootstrapTable('mergeCells', {index:"3", field: 'saveCache', rowspan: 3});
    $table_SX.bootstrapTable('mergeCells', {index:"0", field: 'uploadDate', rowspan: 12})
        .bootstrapTable('mergeCells', {index:"0", field: 'examinationType', rowspan: 3})
        .bootstrapTable('mergeCells', {index:"3", field: 'examinationType', rowspan: 3})
        .bootstrapTable('mergeCells', {index:"6", field: 'examinationType', rowspan: 3})
        .bootstrapTable('mergeCells', {index:"9", field: 'examinationType', rowspan: 3})

        .bootstrapTable('mergeCells', {index:"0", field: 'uploadDataCount', rowspan: 3})
        .bootstrapTable('mergeCells', {index:"3", field: 'uploadDataCount', rowspan: 3})
        .bootstrapTable('mergeCells', {index:"6", field: 'uploadDataCount', rowspan: 3})
        .bootstrapTable('mergeCells', {index:"9", field: 'uploadDataCount', rowspan: 3})
        .bootstrapTable('mergeCells', {index:"0", field: 'saveCache', rowspan: 3})
        .bootstrapTable('mergeCells', {index:"3", field: 'saveCache', rowspan: 3})
        .bootstrapTable('mergeCells', {index:"6", field: 'saveCache', rowspan: 3})
        .bootstrapTable('mergeCells', {index:"9", field: 'saveCache', rowspan: 3});
    $table_XXDH.bootstrapTable('mergeCells', {index:"0", field: 'uploadDate', rowspan: 6})
        .bootstrapTable('mergeCells', {index:"0", field: 'examinationType', rowspan: 3})
        .bootstrapTable('mergeCells', {index:"3", field: 'examinationType', rowspan: 3})
        .bootstrapTable('mergeCells', {index:"0", field: 'uploadDataCount', rowspan: 3})
        .bootstrapTable('mergeCells', {index:"3", field: 'uploadDataCount', rowspan: 3})
        .bootstrapTable('mergeCells', {index:"0", field: 'saveCache', rowspan: 3})
        .bootstrapTable('mergeCells', {index:"3", field: 'saveCache', rowspan: 3});
    //activate the tooltips after the data table is initialized
    $('[rel="tooltip"]').tooltip();
    $("#SDMobileSave").on("click",function(){
        var SDMobileSave_sampling = $(".SDMobileSave_sampling"),SDMobileSave_mutual= $(".SDMobileSave_mutual");
        $(SDMobileSave_sampling[0]).attr("disabled","disabled");
        $(SDMobileSave_sampling[1]).attr("disabled","disabled");
        $(SDMobileSave_sampling[2]).attr("disabled","disabled");
        $(SDMobileSave_mutual[0]).attr("disabled","disabled");
        $(SDMobileSave_mutual[1]).attr("disabled","disabled");
        $(SDMobileSave_mutual[2]).attr("disabled","disabled");
    });
    $("#SDBroadbandSave").on("click",function(){
        var SDBroadbandSave_sampling = $(".SDBroadbandSave_sampling"),SDBroadbandSave_mutual= $(".SDBroadbandSave_mutual");
        $(SDBroadbandSave_sampling[0]).attr("disabled","disabled");
        $(SDBroadbandSave_sampling[1]).attr("disabled","disabled");
        $(SDBroadbandSave_sampling[2]).attr("disabled","disabled");
        $(SDBroadbandSave_mutual[0]).attr("disabled","disabled");
        $(SDBroadbandSave_mutual[1]).attr("disabled","disabled");
        $(SDBroadbandSave_mutual[2]).attr("disabled","disabled");
    });
    $("#SXMobileSave").on("click",function(){
        var SXMobileSave_sampling = $(".SXMobileSave_sampling"),SXMobileSave_mutual= $(".SXMobileSave_mutual");
        $(SXMobileSave_sampling[0]).attr("disabled","disabled");
        $(SXMobileSave_sampling[1]).attr("disabled","disabled");
        $(SXMobileSave_sampling[2]).attr("disabled","disabled");
        $(SXMobileSave_mutual[0]).attr("disabled","disabled");
        $(SXMobileSave_mutual[1]).attr("disabled","disabled");
        $(SXMobileSave_mutual[2]).attr("disabled","disabled");
    });
    $("#SXBroadbandSave").on("click",function(){
        var SXBroadbandSave_sampling = $(".SXBroadbandSave_sampling"),SXBroadbandSave_mutual= $(".SXBroadbandSave_mutual");
        $(SXBroadbandSave_sampling[0]).attr("disabled","disabled");
        $(SXBroadbandSave_sampling[1]).attr("disabled","disabled");
        $(SXBroadbandSave_sampling[2]).attr("disabled","disabled");
        $(SXBroadbandSave_mutual[0]).attr("disabled","disabled");
        $(SXBroadbandSave_mutual[1]).attr("disabled","disabled");
        $(SXBroadbandSave_mutual[2]).attr("disabled","disabled");
    });
    $("#XXMobileSave").on("click",function(){
        var XXMobileSave_sampling = $(".XXMobileSave_sampling"),XXMobileSave_mutual= $(".XXMobileSave_mutual");
        $(XXMobileSave_sampling[0]).attr("disabled","disabled");
        $(XXMobileSave_sampling[1]).attr("disabled","disabled");
        $(XXMobileSave_sampling[2]).attr("disabled","disabled");
        $(XXMobileSave_mutual[0]).attr("disabled","disabled");
        $(XXMobileSave_mutual[1]).attr("disabled","disabled");
        $(XXMobileSave_mutual[2]).attr("disabled","disabled");
    });
    $("#XXBroadbandSave").on("click",function(){
        var XXBroadbandSave_sampling = $(".XXBroadbandSave_sampling"),XXBroadbandSave_mutual= $(".XXBroadbandSave_mutual");
        $(XXBroadbandSave_sampling[0]).attr("disabled","disabled");
        $(XXBroadbandSave_sampling[1]).attr("disabled","disabled");
        $(XXBroadbandSave_sampling[2]).attr("disabled","disabled");
        $(XXBroadbandSave_mutual[0]).attr("disabled","disabled");
        $(XXBroadbandSave_mutual[1]).attr("disabled","disabled");
        $(XXBroadbandSave_mutual[2]).attr("disabled","disabled");
    });

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


function bootTable( data ){

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
        cache: false,
        toolbar: ".toolbar",
        columns:data.headList,
        data :data.dataList,
        striped: true,
        editable:true,
        uniqueId: "key",              //每一行的唯一标识，一般为主键列
        pageSize: data.pageList[0],  //每一页展示的信息数量
        //clickToSelect: false,
        idField: "key",
        pageList: data.pageList,  //每页显示数据量
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
