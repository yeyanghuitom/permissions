/**
 * Created by Administrator on 2018/8/7.
 */
/*得到传的值*/
var url = window.location.href;
url = decodeURI(url);
var param = url.split("?")[1];
var urlId = param.split("=")[1];
alert(urlId);
$("#navResult-leftBtn li a").click(function () {
    $("#navResult-leftBtn li a").removeClass("libg");
    $(this).addClass("libg");
})
/*声量趋势图*/
var slqst = echarts.init(document.getElementById("slqst"));
var slqst_option = option = {
    title: {
        text: '声量趋势图'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['全部', '客户端', '报刊', '论坛', '微博']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['2018-06-29', '2018-06-29', '2018-06-30', '2018-07-01', '2018-06-29', '2018-06-29', '2018-06-29']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: '全部',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '客户端',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: '报刊',
            type: 'line',
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
            name: '论坛',
            type: 'line',
            stack: '总量',
            data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
            name: '微博',
            type: 'line',
            stack: '总量',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
};
slqst.setOption(slqst_option);
/*调性分析*/
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
    legend: {
        data: ['正向', '中立', '负向']
    },
    series: [
        {
            name: '调性分析',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
                {value: 135, name: '正向'},
                {value: 10, name: '负向'},
                {value: 335, name: '中立'}
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
    return "1000";
}
var rand = "8000";
var rand1 = "5000";
var mydata = [
    {name: '北京', value: rand}, {name: '天津', value: randomData()},
    {name: '上海', value: rand}, {name: '重庆', value: randomData()},
    {name: '河北', value: rand1}, {name: '河南', value: rand1},
    {name: '云南', value: randomData()}, {name: '辽宁', value: randomData()},
    {name: '黑龙江', value: randomData()}, {name: '湖南', value: randomData()},
    {name: '安徽', value: randomData()}, {name: '山东', value: rand1},
    {name: '新疆', value: randomData()}, {name: '江苏', value: randomData()},
    {name: '浙江', value: randomData()}, {name: '江西', value: randomData()},
    {name: '湖北', value: randomData()}, {name: '广西', value: randomData()},
    {name: '甘肃', value: randomData()}, {name: '山西', value: rand1},
    {name: '内蒙古', value: randomData()}, {name: '陕西', value: rand1},
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
        max: 10000,
        text: ['高', '低'],
        realtime: false,
        calculable: true,
        inRange: {
            color: ['#f9f9f9', '#f1f105', '#ff700b']
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
    $("#dyfxTable table").append('<tr><td>' + obj.name + '</td><td>' + obj.value + '</td></tr>')
}
/*关键词*/
var gjcData = [
    {
        name: '好用',
        value: 10000,
        textStyle: {
            normal: {
                color: '#ff8a09'
            },
            emphasis: {
                color: 'ff8a09'
            }
        }
    },
    {
        name: '欢乐',
        value: 6181
    },
    {
        name: '流畅',
        value: 4386
    },
    {
        name: '好看',
        value: 4055
    },
    {
        name: '完美',
        value: 2467
    },
    {
        name: '升级',
        value: 2244
    },
    {
        name: '成功',
        value: 1898
    },
    {
        name: '解决',
        value: 1484
    },
    {
        name: '完美',
        value: 1112
    },
    {
        name: '不卡',
        value: 965
    },
    {
        name: '很好',
        value: 847
    },
    {
        name: '联通',
        value: 582
    },
    {
        name: '销毁',
        value: 555
    },
    {
        name: '移动',
        value: 550
    },
    {
        name: '好用',
        value: 462
    },
    {
        name: '棒',
        value: 366
    },
    {
        name: '一点通',
        value: 360
    },
    {
        name: '很棒',
        value: 282
    }
];
gjcytfun("gjcy", gjcData, "关键词云");
function gjcytfun(id, data, title) {
    var chart = echarts.init(document.getElementById(id));
    var option = {
        title: {
            text: title,
            x: 'left'
        },
        tooltip: {},
        series: [{
            type: 'wordCloud',
            gridSize: 2,
            sizeRange: [12, 50],
            rotationRange: [-90, 90],
            shape: 'pentagon',
            width: 600,
            height: 400,
            drawOutOfBound: true,
            textStyle: {
                normal: {
                    color: function () {
                        return 'rgb(' + [
                                Math.round(Math.random() * 160),
                                Math.round(Math.random() * 160),
                                Math.round(Math.random() * 160)
                            ].join(',') + ')';
                    }
                },
                emphasis: {
                    shadowBlur: 10,
                    shadowColor: 'ff8a09'
                }
            },
            data: data
        }]
    };
    chart.setOption(option);
    window.onresize = chart.resize;
}

