/**
 * Created by Administrator on 2018/8/7.
 */
$("#navResult-leftBtn li").click(function () {
    $("#navResult-leftBtn li").removeClass("libg");
    $(".right-nav-content").addClass("hideMes");
    $(this).addClass("libg");
    $(".right-nav-content").eq($(this).index()).removeClass("hideMes");
})
/*自定义时间*/
DatePicker("#datetimeStart", "#datetimeEnd");
DatePicker("#datetimeStartG", "#datetimeEndG");
function DatePicker(beginSelector, endSelector) {
    // 仅选择日期
    $(beginSelector).datetimepicker(
        {
            format: "yyyy-mm-dd",
            autoclose: true,
            todayBtn: true,
            language: "zh-CN",
            startView: 2,
            minView: 'year',
            maxView: 'decade',
            endDate: new Date(),
            pickerPosition: "bottom-left"
        }).on('changeDate', function (ev) {
        if (ev.date) {
            $(endSelector).datetimepicker('setStartDate', new Date(ev.date.valueOf()))
        } else {
            $(endSelector).datetimepicker('setStartDate', null);
        }
    });

    $(endSelector).datetimepicker(
        {
            format: "yyyy-mm-dd",
            autoclose: true,
            todayBtn: true,
            language: "zh-CN",
            startView: 2,
            minView: 'year',
            maxView: 'decade',
            endDate: new Date(),
            pickerPosition: "bottom-left"
        }).on('changeDate', function (ev) {
        if (ev.date) {
            $(beginSelector).datetimepicker('setEndDate', new Date(ev.date.valueOf()))
        } else {
            $(beginSelector).datetimepicker('setEndDate', new Date());
        }
    })
}
/*输入表单验证*/
$(function () {
    $("#pgbgcjForm").validate({
        rules: {
            kssj: {
                required: true
            },
            jssj: {
                required: true
            },
            yxhdmc: {
                required: true
            },
            bggjc: {
                required: true
            },
            pcgjc: {
                required: true
            }
        },
        onkeyup: false,
        focusCleanup: true,
        success: "valid",
        submitHandler: function (form) {
            alert("创建成功")
        }
    });
});
var sqlData = [{
    field: 'id',
    align: "right",
    width: "80",
    formatter: idFormatter
}, {
    field: 'xxlb',
    title: '信息列表',
    align: "center",
    valign: "middle",
    formatter: xxlbFormatter
}, {
    field: 'bt',
    align: "center",
    visible: false,
    valign: "middle"
}, {
    field: 'wb',
    align: "center",
    visible: false,
    valign: "middle"
}, {
    field: 'fbsj',
    align: "center",
    visible: false,
    valign: "middle"
}, {
    field: 'button',
    title: '操作',
    align: "center",
    width: "250",
    formatter: actionFormatter
}];
/*表格*/
$(function () {
    getTable("table", sqlData, "sjjson.json");
});

function actionFormatter(value, row, index) {
    var html = "<div class='operationA' style='position:absolute;bottom: 8px'><a href='javaScript:(0);' onclick='xz_btn(" + row.id + ")' class='tableBtn'>查看详情</a>" + "<a href='javaScript:(0);' onclick='up_btn(" + row.id + ")' class='tableBtn'>重新分析 </a>" + "<a href='javaScript:(0);' onclick='del_btn(" + row.id + ")' class='tableBtn'>删除分析 </a></div>";
    return html;
}
function xxlbFormatter(value, row, index) {
    var html = '<div class="table_data">'+
        '<p><a class="aUrl" href="yxxgpgbg.html?id='+row.id+'">'+row.bt+'</a></p>'+
        '<p>关键词：<span>'+row.wb+'</span></p>'+
        '<p>分析时间：<span>'+row.fbsj+'</span></p>'+
        '</div>';
    return html;
}
function idFormatter(value, row, index) {
    var html = '<span class="idfor">'+value+'</span>';
    return html;
}
/*下载*/
function xz_btn(id) {
    alert(id)
}
/*修改*/
function up_btn(id) {
    alert(id)
}
/*删除*/
function del_btn(id) {
    alert(id)
}
