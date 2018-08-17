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
DatePicker("#datetimeStartF", "#datetimeEndF");
DatePicker("#datetimeStartC", "#datetimeEndC");
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
/*增加加竞品*/
var jpid = 3;
function zjjp_btn() {
    if (jpid > 5) {
        $('#deljp').modal('show');
        return false;
    }
    $("#jp").append(' <li>' +
        '<p>竞品<span class="jpid">' + jpid + '</span><span class="glyphicon glyphicon-trash del_jp" aria-hidden="true"></span></p>' +
        '<table style="width: 100%">' +
        '<tr>' +
        '<td>竞品名称</td>' +
        '<td>' +
        '<input name="jpmc' + jpid + '" type="text" class="form-control jpmc">' +
        '</td>' +
        '<td></td>' +
        '</tr>' +
        '<tr>' +
        '<td>关键词语</td>' +
        '<td>' +
        '<textarea name="gjcy' + jpid + '" class="form-control gjcy" rows="4"></textarea>' +
        '</td>' +
        '<td>' +
        '<button type="button" class="btn btn-default btn-sm tjfaBtn">引用方案</button>' +
        '<p></p>' +
        '<button type="button" class="btn btn-default btn-sm tjcyBtn" dataItem="'+jpid+'">推荐词语</button>' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td>排除关键词</td>' +
        '<td>' +
        '<input name="pcgjc' + jpid + '" type="text" class="form-control pcgjc">' +
        '</td>' +
        '<td></td>' +
        '</tr>' +
        '</table>' +
        '</li>');
    jpid++;
    jpidpx();
}
/*删除竞品*/
$(document).on("click", "#jp .del_jp", function () {
    $(this).parent().parent().remove();
    jpid--;
    jpidpx();
    for (var i = 0; i < $(".jpmc").length; i++) {
        $(".jpmc").eq(i).attr("name", "jpmc" + (i + 1));
    }
    for (var i = 0; i < $(".gjcy").length; i++) {
        $(".gjcy").eq(i).attr("name", "gjcy" + (i + 1));
        $(".tjcyBtn").eq(i).attr("dataItem", i+1);
    }
    for (var i = 0; i < $(".pcgjc").length; i++) {
        $(".pcgjc").eq(i).attr("name", "pcgjc" + (i + 1));
    }
});
/*重新排序*/
function jpidpx() {
    for (var i = 0; i < $("#jp li").length; i++) {
        $("#jp li .jpid").eq(i).text(i + 1);
    }
}
/*表格*/
var sqlData = [{
    field: 'id',
    title: '编号',
    align: "center"
}, {
    field: 'xxlb',
    title: '分析报告名称',
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
    var html = "<a href='jpdbfxbg.html?id="+row.id+"' class='aUrl'>"+value+"</a>";
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
    $('#updataModal').modal('show');
}
$(function () {
// 在键盘按下并释放及提交后验证提交表单
    $("#xgjpForm").validate({
        rules: {
            fxbgmc: {
                required: true
            },
            fxsjfw: {
                required: true
            },
            zt: {
                required: true
            },
            wcfj: {
                required: true
            }
        },
        onkeyup: false,
        focusCleanup: true,
        success: "valid",
        submitHandler: function (form) {

        }
    });
});
/*删除*/
function del_btn(id) {
    alert(id)
}
/*竞品任务创建验证*/
var validataJp = {jprwmc: {required: true},timeStart: {required: true},timeEnd: {required: true},
    jpmc1: {required: true}, gjcy1: {required: true}, pcgjc1: {required: true},
    jpmc2: {required: true}, gjcy2: {required: true}, pcgjc2: {required: true},
    jpmc3: {required: true}, gjcy3: {required: true}, pcgjc3: {required: true},
    jpmc4: {required: true}, gjcy4: {required: true}, pcgjc4: {required: true},
    jpmc5: {required: true}, gjcy5: {required: true}, pcgjc5: {required: true}
};
$(function () {
    $("#jprwcjForm").validate({
        rules: validataJp,
        onkeyup: false,
        focusCleanup: true,
        success: "valid",
        submitHandler: function (form) {
            for (var i = 0; i < $(".jpmc").length; i++) {
                var addData={};
                addData.timeStart = $("#timeStart").val();
                addData.timeEnd = $("#timeEnd").val();
                addData.jpmc = $(".jpmc").eq(i).val();
                addData.gjcy = $(".gjcy").eq(i).val();
                addData.pcgjc = $(".pcgjc").eq(i).val();
                addAjaxData("url", addData)
            }
        }
    });
});
/*创建竞品*/
var tjcyIndex;
$(document).on("click", "#jp .tjcyBtn", function () {
    $("#tjcy1 input").prop("checked", false);
    $("#tjcy1").css({
        'display': "block",
        'left': $(this).offset().left - 402 + "px",
        'top': $(this).offset().top + "px"
    });
    tjcyIndex = $(this).attr("dataItem")-1;
    $("#tjcy1").show();
    $("#yyfa").hide();
    tjcFun("gjcy")
});
function cjjp_btn() {
    for (var i = 0; i < $(".jpmc").length; i++) {
        $(".jpmc").eq(i).attr("name", "jpmc" + (i + 1));
    }
    for (var i = 0; i < $(".gjcy").length; i++) {
        $(".gjcy").eq(i).attr("name", "gjcy" + (i + 1));
        $(".tjcyBtn").eq(i).attr("dataItem", i+1);
    }
    for (var i = 0; i < $(".pcgjc").length; i++) {
        $(".pcgjc").eq(i).attr("name", "pcgjc" + (i + 1));
    }
    $('#cjjp_btn').trigger('click');
}
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
    alert(jprwResult)
}
/*推荐词语1*/
var xzData = [];
var srData = [];
var inputData = [];
var subIdent = "、";

/*推荐次共用方法*/
function tjcFun(id) {
    xzData = [];
    srData = [];
    inputData = [];
    inputData = ($.trim($("."+id).eq(tjcyIndex).val())).split(subIdent);
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
    $("."+id).eq(tjcyIndex).val(inputresult);

}
$(document).on("change", "#tjcy1 input", function () {
    xzFun(this,"gjcy");
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
$(document).on("click", "#jp .tjfaBtn", function () {
    $("#yyfa").css({
        'display': "block",
        'left': $(this).offset().left - 202 + "px",
        'top': $(this).offset().top + "px"
    });
    $("#yyfa").show();
    $("#tjcy1").hide();

});
