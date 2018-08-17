/**
 * Created by Administrator on 2018/8/9.
 */
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
/*统计图表---舆情渠道趋势*/
var yqslztqs = echarts.init(document.getElementById("yqslztqs"));
var yqslztqs_option = {
    title: {
        text: '舆情走势图'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['正向', '负向']
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
        data: ['05-08', '05-09', '05-11', '05-12', '05-13', '05-14', '05-15']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: '正向',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '负向',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310]
        }
    ]
};
yqslztqs.setOption(yqslztqs_option);
/*统计图表---地域分析*/
var myChart = echarts.init(document.getElementById('qwdyfbfx'));
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
        text: '舆情地域分布图'
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
        orient: "horizontal",
        left: "0",
        bottom: "0",
        text: ['高', '低'],
        realtime: false,
        inRange: {
            color: ['#f1f105','#85daef', '#ff8a09']
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
for (var i = 0; i < 5; i++) {
    var obj = mydata[i];
    $("#qwdyfbfx_sj table").append('<tr><td>' + obj.name + '</td><td>' + obj.value + '</td></tr>')
}
/*热点话题重点分析*/
var sqlData = [{
    field: 'id',
    title: '编号',
    width: "40",
    align: "center"
}, {
    field: 'xxlb',
    width: "60",
    title: '任务名称'
}, {
    field: 'qgqx',
    title: '时间',
    align: "center",
    width: "60",
    valign: "middle"
}, {
    field: 'lywz',
    title: '来源',
    align: "center",
    width: "40",
    valign: "middle"
}, {
    field: 'fbsj',
    title: '相似文章数',
    align: "center",
    width: "40",
    valign: "middle"
}];
/*表格*/
$(function () {
    getTable("table", sqlData, "sjjson.json");
});
/*专业线深度分析*/
var zyxsdfx = echarts.init(document.getElementById("zyxsdfx"));
var zyxsdfx_option = option = {
    title: {
        text: "来源分析对比",
        x: 'left'
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data : ['网络','业务','服务']
    },
    grid: {
        left: '5%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['网络','业务','服务']
        }
    ],
    yAxis : [
        {
            type : 'value',
            name: '声量',
            nameLocation:"middle",
            nameGap:45
        }
    ],
    series :[{
        type:'bar',
        data:[2900, 1200, 300],
        itemStyle: {
            //通常情况下：
            normal:{
                //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                color: function (params){
                    var colorList = ['rgb(164,205,238)','rgb(42,170,227)','rgb(25,46,94)','rgb(195,229,235)'];
                    return colorList[params.dataIndex];
                }
            },
            //鼠标悬停时：
            emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        },
    }]


};
zyxsdfx.setOption(zyxsdfx_option);
/*舆情渠道占比分析*/
var yqqdzbfx = echarts.init(document.getElementById("yqqdzbfx"));
var yqqdzbfx_option = {
    title: {
        text: '舆情渠道占比分析',
        x: 'left'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'right',
        data:['微博','微信','博客','论坛','新闻','app','纸媒']
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:335, name:'微博'},
                {value:310, name:'微信'},
                {value:234, name:'博客'},
                {value:135, name:'论坛'},
                {value:1548, name:'新闻'},
                {value:158, name:'app'},
                {value:548, name:'纸媒'}
            ]
        }
    ]
};
yqqdzbfx.setOption(yqqdzbfx_option);
/*重点媒体声量分析*/
var zdmtslfx = echarts.init(document.getElementById("zdmtslfx"));
var zdmtslfx_option = {
    title: {
        text: '重点媒体声量分析'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['负向', '正向', '全向']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['人民网','网易新闻','央视网','凤凰资讯','新华网','今日头条']
    },
    series: [
        {
            name: '负向',
            type: 'bar',
            data: [18203, 23489, 29034, 104970, 131744, 530230]
        },
        {
            name: '正向',
            type: 'bar',
            data: [19325, 23438, 31000, 121594, 134141, 481807]
        },
        {
            name:'全向',
            type:'line',
            data:[200000,300000, 350000, 140000,300000, 550000]
        }
    ]
};

zdmtslfx.setOption(zdmtslfx_option);
/*跳转页面*/
$(".qwyqjc_table .tx_title").eq(0).click(function () {
    window.location.href = "qwyqjc-page/yqslztqs.html";
});
$(".qwyqjc_table .tx_title").eq(1).click(function () {
    window.location.href = "qwyqjc-page/qwdyfbfx.html";
});
$(".qwyqjc_table .tx_title").eq(2).click(function () {
    window.location.href = "qwyqjc-page/rdhtzdfx.html";
});
$(".qwyqjc_table .tx_title").eq(3).click(function () {
    window.location.href = "qwyqjc-page/zyxsdfx.html";
});
$(".qwyqjc_table .tx_title").eq(4).click(function () {
    window.location.href = "qwyqjc-page/yqqdzbfx.html";
});
$(".qwyqjc_table .tx_title").eq(5).click(function () {
    window.location.href = "qwyqjc-page/zdmtslfx.html";
});
