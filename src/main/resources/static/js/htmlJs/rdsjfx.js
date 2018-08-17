/**
 * Created by Administrator on 2018/8/2.
 */
$("#navResult-leftBtn li").click(function () {
    $("#navResult-leftBtn li").removeClass("libg");
    $(".right-nav-content").addClass("hideMes");
    $(this).addClass("libg");
    $(".right-nav-content").eq($(this).index()).removeClass("hideMes");
    closeSjcy();
})
/*自定义时间*/
DatePicker("#datetimeStartFcj", "#datetimeEndFcj");
DatePicker("#datetimeStartCx", "#datetimeEndCx");
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

/*表格*/
var sqlData = [{
    field: 'id',
    title: '编号',
    align: "center"
}, {
    field: 'xxlb',
    title: '任务名称',
    align: "center",
    formatter: fxbgmc
}, {
    field: 'qgqx',
    title: '分析时间范围',
    align: "center"
}, {
    field: 'lywz',
    title: '状态',
    align: "center"
}, {
    field: 'fbsj',
    title: '完成时间',
    align: "center"
}, {
    field: 'button',
    title: '操作',
    align: "center",
    width: "200",
    formatter: actionFormatter
}];
$(function () {
    getTable("table", sqlData, "sjjson.json");
});
/*分析报告名称*/
function fxbgmc(value, row, index) {
    var html = "<a href='rdsjfxbg.html?id="+row.id+"' class='aUrl'>"+value+"</a>";
    return html;
}
/*操作*/
function actionFormatter(value, row, index) {
    var html = "<div class='operationA'><a href='javaScript:(0);' class='tableBtn'  onclick='xz_btn(" + row.id + ")'>下载</a>" + "<a href='javaScript:(0);' class='tableBtn' onclick='up_btn(" + row.id + ")'>修改</a>" + "<a href='javaScript:(0);' class='tableBtn' onclick='del_btn(" + row.id + ")'>删除</a></div>";
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
/*竞品任务创建验证*/
var validataJp = {rdsjfxmc: {required: true},timeStart: {required: true},timeEnd: {required: true},
    rdsjfxgjcy: {required: true}, rdsjfxpcfjc: {required: true}};
$(function () {
// 在键盘按下并释放及提交后验证提交表单
    $("#rdsjfxcjForm").validate({
        rules: validataJp,
        onkeyup: false,
        focusCleanup: true,
        success: "valid",
        submitHandler: function (form) {
            alert("创建成功")
        }
    });
});
/*创建竞品*/
$("#tjcyBtn").click(function () {
    $("#tjcy1 input").prop("checked", false);
    $("#tjcy1").css({
        'display': "block",
        'left': $(this).offset().left - 402 + "px",
        'top': $(this).offset().top + "px"
    });
    $("#tjcy1").show();
    $("#yyfa").hide();
    tjcFun("rdsjfxgjcy")
});
/*查询竞品*/
/*竞品任务状态*/
var jprwztG = $("#jprwztG input");
var jprwResult ="";
$("#jprwztG span").change(function () {
    var inputItem = $(this).index();
    if (inputItem == 0) {
        if (jprwztG.eq(inputItem).prop("checked") == true) {
            jprwztG.prop("checked", true);
        } else {
            jprwztG.prop("checked", false);
        }
    }
});
function jpgl_btn() {
    jprwResult = "";
    var datetimeStartC = $("#datetimeStartC .form-control").val();
    var datetimeEndC = $("#datetimeEndC .form-control").val();
    var jprwmcG = $("#jprwmcG").val();
    /*竞品任务状态*/
    for (var i = 1; i < jprwztG.length; i++) {
        if (jprwztG.eq(i).prop("checked") == true) {
            jprwResult += jprwztG.eq(i).val() + "、";
        }
    }
    jprwResult = jprwResult.substring(0, jprwResult.length - 1);
}
/*推荐词语1*/
var xzData = [];
var srData = [];
var inputData = [];
var subIdent = "、";

/*推荐词共用方法*/
function tjcFun(id) {
    xzData = [];
    srData = [];
    inputData = [];
    inputData = ($.trim($("#"+id).val())).split(subIdent);
    /*tjgjcArr*/
    for (var i = 0; i < inputData.length; i++) {
        var obj1 = inputData[i];
        var inArray = $.inArray(obj1, tjgjcArr);
        if (inArray == -1) {
            srData.push(obj1)
        } else {
            xzData.push(obj1);
        }
    }
    var checkboxs = $("#tjcy1 input");
    for (var j = 0; j < checkboxs.length; j++) {
        var inArray = $.inArray(xzData[j], tjgjcArr);
        if (inArray != -1) {
            checkboxs.eq(inArray).prop("checked", true);
        }
    }
}
function xzFun(zj,id) {
    debugger;
    if($(zj).prop("checked") == true){
        var inArray = $.inArray($(zj).val(), inputData);
        if (inArray==-1){
            inputData.push($(zj).val())
        }
    }else{
        var inArray = $.inArray($(zj).val(), inputData);
        if (inArray!=-1){
            inputData.splice(inArray,1);
        }
    }
    var inputresult = "";
    for (var i = 0; i < inputData.length; i++) {
        var obj1 = inputData[i];
        inputresult+=obj1+subIdent;
    }
    inputresult = inputresult.substring(0, inputresult.length - 1);
    if (inputresult.substr(0, 1)==subIdent){
        inputresult = inputresult.substring(1, inputresult.length);
    }
    $("#"+id).val(inputresult);

}
$(document).on("change", "#tjcy1 input", function () {
    xzFun(this,"rdsjfxgjcy");
});
/*引用方案*/
var curMenu = null, zTree_Menu = null;
var setting = {
    view: {
        showLine: false,
        showIcon: false,
        selectedMulti: false,
        dblClickExpand: false,
        addDiyDom: addDiyDom
    },
    data: {
        simpleData: {
            enable: true
        }
    },
    callback: {
        beforeClick: beforeClick
    }
};
var zNodes = [
    {id: 1, pId: 0, name: "联通冰淇淋"},
    {id: 11, pId: 1, name: "联通冰淇淋11"},
    {id: 111, pId: 11, name: "联通冰淇淋11"},
    {id: 2, pId: 0, name: "中国联通"},
    {id: 3, pId: 0, name: "联通4G"}
];

function addDiyDom(treeId, treeNode) {
    var spaceWidth = 5;
    var switchObj = $("#" + treeNode.tId + "_switch"),
        icoObj = $("#" + treeNode.tId + "_ico");
    switchObj.remove();
    icoObj.before(switchObj);

    if (treeNode.level > 1) {
        var spaceStr = "<span style='display: inline-block;width:" + (spaceWidth * treeNode.level) + "px'></span>";
        switchObj.before(spaceStr);
    }
}

function beforeClick(treeId, treeNode) {
    if (treeNode.level == 0) {
        var zTree = $.fn.zTree.getZTreeObj("treeDemo");
        zTree.expandNode(treeNode);
        return false;
    }
    if (!treeNode.isParent) {
        alert(treeNode.id)
    }
    return true;
}

$(document).ready(function () {
    var treeObj = $("#treeDemo");
    $.fn.zTree.init(treeObj, setting, zNodes);
    zTree_Menu = $.fn.zTree.getZTreeObj("treeDemo");
    curMenu = zTree_Menu.getNodes()[0].children[0].children[0];
    zTree_Menu.selectNode(curMenu);
    treeObj.addClass("showIcon");
});
/*引用方案*/
$("#tjfaBtn").click(function () {
    $("#yyfa").css({
        'display': "block",
        'left': $(this).offset().left - 202 + "px",
        'top': $(this).offset().top + "px"
    });
    $("#yyfa").show();
    $("#tjcy1").hide();
});
