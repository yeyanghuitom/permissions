/**
 * Created by Administrator on 2018/7/31.
 */
var sqlData = [{
    field: 'id',
    title: 'ID',
    align: "center"
}, {
    field: 'xxlb',
    title: '信息列表',
    align: "center"
}, {
    field: 'qgqx',
    title: '情感倾向',
    align: "center"
}, {
    field: 'lywz',
    title: '来源网站',
    align: "center"
}, {
    field: 'fbsj',
    title: '发布时间',
    align: "center"
}, {
    field: 'xss',
    title: '相似数',
    align: "center"
}];
/*表格*/
$(function () {
    getTable("table", sqlData, "sjjson.json");
});

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
            },
            onkeyup: false,
            focusCleanup: true,
            success: "valid",
            submitHandler: function (form) {
                alert("创建成功")
            }
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
            },
            onkeyup: false,
            focusCleanup: true,
            success: "valid",
            submitHandler: function (form) {
                alert("修改成功")
            }
        }
    })
});
$().ready(function () {
// 在键盘按下并释放及提交后验证提交表单
    $("#tjflForm").validate({
        rules: {
            tjfl: {
                required: true
            }
        }
    })
});
function cj_btn() {
    /* var fa_name = $("#fa_name").val();
     var fa_antistop = $("#fa_antistop").val();
     var pc_antistop = $("#pc_antistop").val();*/
    dqClick("cj_btn");
}
function tjfalx_btn() {
    dqClick("tjfalx_btn");
}
/*推荐词语1*/
var tjcyItem = "";
/*添加*/
$("#tjcy1_btn").click(function () {
    tjcy_btn(this, "tjcy1", 402);
    tjcyItem = "1"
});
/*修改*/
$("#tjcy2_btn").click(function () {
    tjcy_btn(this, "tjcy1", 402);
    tjcyItem = "2"
});
var faData = "";
$("#tjcy1").change(function () {
    switch (tjcyItem) {
        case "1":
            for (var i = 0; i < $("#tjcy1 input").length; i++) {
                if ($("#tjcy1 input").eq(i).prop("checked")==true){
                    faData+=$("#tjcy1 input").eq(i).val()+"、";
                }
            }
            faData=faData.substring(0,faData.length-1);
            $("#fa_antistop").val(faData);
            faData="";
            break;
        case "2":
            for (var i = 0; i < $("#tjcy1 input").length; i++) {
                if ($("#tjcy1 input").eq(i).prop("checked")==true){
                    faData+=$("#tjcy1 input").eq(i).val()+"、";
                }
            }
            faData=faData.substring(0,faData.length-1);
            $("#fa_antistopU").val(faData);
            faData="";
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
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
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
        feature: {
            saveAsImage: {}
        }
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
        x: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
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
    return Math.round(Math.random() * 500);
}
var mydata = [
    {name: '北京', value: '100'}, {name: '天津', value: randomData()},
    {name: '上海', value: randomData()}, {name: '重庆', value: randomData()},
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
    {name: '贵州', value: randomData()}, {name: '广东', value: randomData()},
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
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
        }
    },
    visualMap: {
        min: 500,
        max: 50000,
        text: ['高', '低'],
        realtime: false,
        calculable: true,
        inRange: {
            color: ['lightskyblue', 'yellow', 'orangered']
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
/*确定退出*/
function tc_btn() {
    alert("退出成功")
}
