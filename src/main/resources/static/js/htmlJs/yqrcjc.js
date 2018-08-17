/**
 * Created by Administrator on 2018/7/31.
 */
/*声调属性--来源渠道数量*/
for (var i = 0; i < $(".xs_item").length; i++) {
    var obj = $(".xs_item").eq(i);
    obj.text(i+1);
}
var sqlData = [{
    field: 'id',
    title: 'ID',
    visible: false,
    align: "center"
}, {
    field: 'xxlb',
    title: '信息列表',
    formatter: xxlb
}, {
    field: 'bt',
    visible: false,
    title: 'bt',
    align: "center"
}, {
    field: 'wb',
    title: 'wb',
    visible: false,
    align: "center"
}, {
    field: 'con',
    title: 'con',
    visible: false,
    align: "center"
}, {
    field: 'sjc',
    title: 'sjc',
    visible: false,
    align: "center"
}, {
    field: 'qgqx',
    title: '情感倾向',
    align: "center",
    width: "100",
    valign: "middle"
}, {
    field: 'lywz',
    title: '来源网站',
    align: "center",
    width: "100",
    valign: "middle"
}, {
    field: 'fbsj',
    title: '发布时间',
    align: "center",
    width: "200",
    valign: "middle"
}, {
    field: 'xss',
    title: '相似数',
    align: "center",
    width: "100",
    valign: "middle"
}];
/*表格*/
$(function () {
    getTable("table", sqlData, "sjjson.json");
});
function xxlb(value, row, index) {
    var html = '<div class="table_data"><p  class="aUrl">' + row.bt + '</p>' +
        '<p style="text-align: center">' + row.wb + '</p><p>' + row.con + '</p>' +
        '<p style="text-align: center">涉及词：<span>' + row.sjc + '</span></p>' +
        '</div>';
    return html;
}

/*监测方案创建*/
/*输入表单验证*/
$(function () {
// 在键盘按下并释放及提交后验证提交表单
    $("#jcfacjForm").validate({
        rules: {
            fa_name: {
                required: true
            },
            fl_name: {
                required: true
            },
            fa_antistop: {
                required: true
            },
            pc_antistop: {
                required: true
            }
        },
        onkeyup: false,
        focusCleanup: true,
        success: "valid",
        submitHandler: function (form) {
            var addUrl = "";
            var addData={};
            addData.fa_name = $("#fa_name").val();
            addData.fl_name = $("#fl_name").val();
            addData.fa_antistop = $("#fa_antistop").val();
            addData.pc_antistop = $("#pc_antistop").val();
            addAjaxData(addUrl, addData)
        }
    });
    $("#xgForm").validate({
        rules: {
            fa_nameU: {
                required: true
            },
            fl_nameU: {
                required: true
            },
            fa_antistopU: {
                required: true
            },
            pc_antistopU: {
                required: true
            }
        },
        onkeyup: false,
        focusCleanup: true,
        success: "valid",
        submitHandler: function (form) {
            var updataUrl = "";
            var updataData={};
            updataData.fa_name = $("#fa_nameU").val();
            updataData.fl_name = $("#fl_nameU").val();
            updataData.fa_antistop = $("#fa_antistopU").val();
            updataData.pc_antistop = $("#pc_antistopU").val();
            debugger;
            updataAjaxData(updataUrl, updataData)
        }
    })
    $("#tjflForm").validate({
        rules: {
            tjfl: {
                required: true
            }
        },
        onkeyup: false,
        focusCleanup: true,
        success: "valid",
        submitHandler: function (form) {
            var addFlUrl = "";
            var addFlData={};
            addFlData.tjfl = $("#tjfl").val();
            addAjaxData(addFlUrl, addFlData)
        }
    })
});
function tjfalx_btn() {
    dqClick("tjfalx_btn");
}
/*推荐词语1*/
var tjcyItem = "";
var xzData = [];
var srData = [];
var inputData = [];
var faData = "";
var subIdent = "、";

/*推荐次共用方法*/
function tjcFun(id) {
    xzData = [];
    srData = [];
    inputData = [];
    inputData = ($.trim($("#" + id).val())).split(subIdent);
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
function xzFun(zj, id) {
    debugger;
    if ($(zj).prop("checked") == true) {
        var inArray = $.inArray($(zj).val(), inputData);
        if (inArray == -1) {
            inputData.push($(zj).val())
        }
    } else {
        var inArray = $.inArray($(zj).val(), inputData);
        if (inArray != -1) {
            inputData.splice(inArray, 1);
        }
    }
    var inputresult = "";
    for (var i = 0; i < inputData.length; i++) {
        var obj1 = inputData[i];
        inputresult += obj1 + subIdent;
    }
    inputresult = inputresult.substring(0, inputresult.length - 1);
    if (inputresult.substr(0, 1) == subIdent) {
        inputresult = inputresult.substring(1, inputresult.length);
    }
    $("#" + id).val(inputresult);

}
/*添加*/
$("#tjcy1_btn").click(function () {
    tjcy_btn(this, "tjcy1", 402);
    tjcyItem = "1";
    tjcFun("fa_antistop");
});
/*修改*/
$("#tjcy2_btn").click(function () {
    tjcy_btn(this, "tjcy1", 402);
    tjcyItem = "2";
    tjcFun("fa_antistopU");
});
$("#tjcy1 input").change(function () {
    switch (tjcyItem) {
        case "1":
            xzFun(this, "fa_antistop");
            break;
        case "2":
            xzFun(this, "fa_antistopU");
            break;
    }
});

/*方案内容*/
$("#fa_btn").click(function () {
    if ($("#fa_content").is(':hidden')) {
        $("#fa_content").slideDown(100);
        $(this).html('<span class="glyphicon glyphicon-triangle-bottom" aria-hidden="true"></span>');
    } else {
        $("#fa_content").slideUp(100);
        $(this).html('<span class="glyphicon glyphicon-triangle-right" aria-hidden="true"></span>');
    }
});
/*注册方法*/
$(document).on("click", "#fa_ul li", function () {
    $("#fa_ul li").removeClass("libg");
    $(this).addClass("libg")
});
/*统计图表---舆情渠道趋势*/
var yqqdqs = echarts.init(document.getElementById("yqqdqs"));
var yqqdqs_option = {
    title: {
        text: '舆情渠道趋势'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        /*feature: {
         saveAsImage: {}
         }*/
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['2018-05-08', '2018-05-09', '2018-05-11', '2018-05-12', '2018-05-13', '2018-05-14', '2018-05-15']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
            name: '直接访问',
            type: 'line',
            stack: '总量',
            data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
            name: '搜索引擎',
            type: 'line',
            stack: '总量',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
};
yqqdqs.setOption(yqqdqs_option);
/*统计图表---舆情渠道趋势*/
var txfxzs = echarts.init(document.getElementById("txfxzs"));
var txfxzs_option = {
    title: {
        text: '调性分析走势'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data: ['负向', '正向', '中立']
    },
    toolbox: {
        // feature: {
        //     saveAsImage: {}
        // }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: ['2018-05-08', '2018-05-09', '2018-05-11', '2018-05-12', '2018-05-13', '2018-05-14', '2018-05-15']
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '负向',
            type: 'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '正向',
            type: 'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: '中立',
            type: 'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data: [150, 232, 201, 154, 190, 330, 410]
        }
    ]
};
txfxzs.setOption(txfxzs_option);
/*统计图表---重点媒体来源占比*/
var zdmtlyzb = echarts.init(document.getElementById("zdmtlyzb"));
var zdmtlyzb_option = {
    title: {
        text: '重点媒体来源占比',
        x: 'left'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        // orient: 'vertical',
        // left: 'center',
        data: ['新浪网', '腾讯网', '百度贴吧', '凤凰网', '人民网']
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
                {value: 335, name: '新浪网'},
                {value: 310, name: '腾讯网'},
                {value: 234, name: '百度贴吧'},
                {value: 135, name: '凤凰网'},
                {value: 1548, name: '人民网'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

zdmtlyzb.setOption(zdmtlyzb_option);
/*统计图表---来源类型统计*/
var lylx = echarts.init(document.getElementById("lylx"));
var lylx_option = {
    title: {
        text: '来源类型统计',
        x: 'left'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
                {value: 335, name: '新浪网'},
                {value: 310, name: '腾讯网'},
                {value: 234, name: '百度贴吧'},
                {value: 135, name: '凤凰网'},
                {value: 1548, name: '人民网'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

lylx.setOption(lylx_option);
/*统计图表---调性分析*/
var txfx = echarts.init(document.getElementById("txfx"));
var txfx_option = {
    title: {
        text: '调性分析',
        x: 'left'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
                {value: 335, name: '正向'},
                {value: 310, name: '负向'},
                {value: 234, name: '中立'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

txfx.setOption(txfx_option);
/*统计图表---地域分析*/
var myChart = echarts.init(document.getElementById('dyfx'));
function randomData() {
    return "3000";
}
var rand = "34000"
var mydata = [
    {name: '北京', value: rand}, {name: '天津', value: randomData()},
    {name: '上海', value: rand}, {name: '重庆', value: randomData()},
    {name: '河北', value: randomData()}, {name: '河南', value: randomData()},
    {name: '云南', value: randomData()}, {name: '辽宁', value: randomData()},
    {name: '黑龙江', value: randomData()}, {name: '湖南', value: randomData()},
    {name: '安徽', value: randomData()}, {name: '山东', value: randomData()},
    {name: '新疆', value: randomData()}, {name: '江苏', value: randomData()},
    {name: '浙江', value: randomData()}, {name: '江西', value: randomData()},
    {name: '湖北', value: randomData()}, {name: '广西', value: randomData()},
    {name: '甘肃', value: randomData()}, {name: '山西', value: randomData()},
    {name: '内蒙古', value: randomData()}, {name: '陕西', value: randomData()},
    {name: '吉林', value: randomData()}, {name: '福建', value: randomData()},
    {name: '贵州', value: randomData()}, {name: '广东', value: rand},
    {name: '青海', value: randomData()}, {name: '西藏', value: randomData()},
    {name: '四川', value: randomData()}, {name: '宁夏', value: randomData()},
    {name: '海南', value: randomData()}, {name: '台湾', value: randomData()},
    {name: '香港', value: randomData()}, {name: '澳门', value: randomData()}
];
myChart.showLoading();

myChart.hideLoading();
myChart.setOption(option = {
    title: {
        text: '地域分析'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{b}<br/>{c} (次)'
    },
    toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
            /* dataView: {readOnly: false},
             restore: {},
             saveAsImage: {}*/
        }
    },
    visualMap: {
        min: 500,
        max: 50000,
        text: ['高', '低'],
        realtime: false,
        calculable: true,
        inRange: {
            color: ['#f1f105', '#ff8a09']
        }
    },
    series: [{
        name: '数据',
        type: 'map',
        mapType: 'china',
        roam: true,
        label: {
            normal: {
                show: true  //省份名称
            },
            emphasis: {
                show: false
            }
        },
        data: mydata  //数据
    }]
});
for (var i = 0; i < 10; i++) {
    var obj = mydata[i];
    $("#dyfx_sj table").append('<tr><td>' + obj.name + '</td><td>' + obj.value + '</td></tr>')
}

$(".navResult-right-nav li").click(function () {
    $(".navResult-right-nav li").removeClass("menucur");
    $(".right-nav-content").addClass("hideMes");
    $(this).addClass("menucur");
    $(".right-nav-content").eq($(this).index()).removeClass("hideMes");
    window.onresize = yqqdqs.resize();
    window.onresize = txfxzs.resize();
    window.onresize = zdmtlyzb.resize();
    window.onresize = lylx.resize();
    window.onresize = txfx.resize();
    window.onresize = myChart.resize();
    $("#tjcy1").hide();
})
/*查询*/
/*时间范围*/
$("#sjfw .sjfw").click(function () {
    $("#sjfw .sjfw").removeClass("menucur");
    $(this).addClass("menucur");
    if ($(this).index() != 3) {
        $("#datetimeStart .form-control").val("");
        $("#datetimeEnd .form-control").val("");
    }
});
/*声调属性*/
$("#sdsx span").change(function () {
    var inputItem = $(this).index();
    if (inputItem == 0) {
        if ($("#sdsx input").eq(inputItem).prop("checked") == true) {
            $("#sdsx input").prop("checked", true);
        } else {
            $("#sdsx input").prop("checked", false);
        }
    }
});
/*来源渠道*/
$("#lyqd span").change(function () {
    var inputItem = $(this).index();
    if (inputItem == 0) {
        if ($("#lyqd input").eq(inputItem).prop("checked") == true) {
            $("#lyqd input").prop("checked", true);
        } else {
            $("#lyqd input").prop("checked", false);
        }
    }
});
var sjfwResult = "";
var sdsxResult = "";
var lyqdResult = "";
function cxxxjc_btn() {
    sjfwResult = "";
    sdsxResult = "";
    lyqdResult = "";
    /*时间范围*/
    for (var i = 0; i < $("#sjfw .sjfw").length; i++) {
        var obj = $("#sjfw .sjfw").eq(i);
        if (obj.is('.menucur')) {
            if (i != 3) {
                sjfwResult = obj.text();
            } else {
                var start = $("#datetimeStart .form-control").val();
                var end = $("#datetimeEnd .form-control").val();
                var es = "/";
                if (start == "" || end == "") {
                    es = "";
                }
                sjfwResult = start + es + end;
            }
        }
    }
    /*声调属性*/
    for (var i = 1; i < $("#sdsx input").length; i++) {
        if ($("#sdsx input").eq(i).prop("checked") == true) {
            sdsxResult += $("#sdsx input").eq(i).val() + "、";
        }
    }
    sdsxResult = sdsxResult.substring(0, sdsxResult.length - 1);

    /*来源渠道*/
    for (var i = 1; i < $("#lyqd input").length; i++) {
        if ($("#lyqd input").eq(i).prop("checked") == true) {
            lyqdResult += $("#lyqd input").eq(i).val() + "、";
        }
    }
    lyqdResult = lyqdResult.substring(0, lyqdResult.length - 1);
    alert("时间范围:" + sjfwResult + "---声调属性:" + sdsxResult + "---来源渠道:" + lyqdResult);
}
/*自定义时间*/
DatePicker("#datetimeStart", "#datetimeEnd");
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
        $("#sjfw .sjfw").removeClass("menucur");
        $("#sjfw .sjfw").eq(3).addClass("menucur");
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
        $("#sjfw .sjfw").removeClass("menucur");
        $("#sjfw .sjfw").eq(3).addClass("menucur");
    })
}
/*搜索检测方案*/
function ssjcfa_btn() {
    var ssjcfa = $.trim($("#ssjcfa").val());
    alert(ssjcfa)
}
/*方案树*/
var zTree_Menu = null;
var treeObj;
var setting = {
    edit: {
        enable: true,
        showRemoveBtn: setRemoveBtn,
        showRenameBtn: false
    },
    showTitle: false,
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
        beforeClick: beforeClick,
        beforeRemove: beforeRemove
    }
};
function setRemoveBtn(treeId, treeNode) {
    return !treeNode.isParent;
}
var zNodes = [
    {id: 1, pId: 0, name: "联通冰淇淋"},
    {id: 11, pId: 1, name: "联通冰淇淋11"},
    {id: 111, pId: 11, name: "联通冰淇淋12"},
    {id: 121, pId: 11, name: "联通冰淇淋13"},
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
$(document).ready(function () {
    treeObj = $("#treeDemo");
    $.fn.zTree.init(treeObj, setting, zNodes);
    zTree_Menu = $.fn.zTree.getZTreeObj("treeDemo");
    treeObj.addClass("showIcon");
});
function beforeClick(treeId, treeNode) {
    if (treeNode.level == 0) {
        var zTree = $.fn.zTree.getZTreeObj("treeDemo");
        zTree.expandNode(treeNode);
        return false;
    }
    /*判断有没有子元素*/
    if (!treeNode.isParent) {
        alert(treeNode.id)
    }
    return false;
}

var removeFaId;//点击id
function beforeRemove(treeId, treeNode) {
    removeFaId = treeNode.id;
    // hintMesModalFun("删除方案","确定要删除吗？","2");
    // return false;
}
/*删除方案*/
function removeFA() {
    for (var i = 0; i < zNodes.length; i++) {
        var obj = zNodes[i];
        if (obj.id == removeFaId){
            zNodes.splice(i,1);
            break;
        }
    }
    $.fn.zTree.init(treeObj, setting, zNodes);
}
/*确定提示信息*/
function hintqd_btn() {
    var str = $('#hintState').text();
    switch (str){
        case "2":
            $('#hintMesModal').modal('hide');
            break;
    }
}