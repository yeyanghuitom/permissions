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
/*统计图表---舆情渠道趋势*/
var yqqdqs = echarts.init(document.getElementById("yqqdqs"));
var yqqdqs_option = {
    title: {
        text: '整体舆情趋势对比'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['腾讯网卡', '阿里云卡']
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
            name: '腾讯网卡',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '阿里云卡',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310]
        }
    ]
};
yqqdqs.setOption(yqqdqs_option);
/*统计图表---舆情渠道趋势*/
var txfxzs = echarts.init(document.getElementById("txfxzs"));
var txfxzs_option = {
    title: {
        text: '负面舆情走势对比'
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
        data: ['腾讯网卡', '阿里云卡']
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
            name: '腾讯网卡',
            type: 'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '阿里云卡',
            type: 'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data: [220, 182, 191, 234, 290, 330, 310]
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
gjcytfun("gjcyt1", gjcData, "腾讯网卡");
gjcytfun("gjcyt2", gjcData, "阿里王卡");
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
            color: ['#ffffff', '#f1f105', '#ff700b']
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
    $("#zm_sj table").append('<tr><td class="sjxh">' + (i + 1) + '</td><td>' + obj.name + '</td><td>' + obj.value + '</td></tr>')
    $("#fm_sj table").append('<tr><td class="sjxh">' + (i + 1) + '</td><td>' + obj.name + '</td><td>' + obj.value + '</td></tr>')
}
/*来源分析对比*/
var lyfxdb = echarts.init(document.getElementById("lyfxdb"));
var lyfxdb_option = {
    title: {
        text: '来源分析对比',
        x: 'left'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['腾讯网卡', '阿里云卡']
    },
    calculable: true,
    xAxis: [
        {
            type: 'category',
            data: ['新闻', '微博', '纸媒', '微信', 'app', '论坛', '博客']
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '腾讯网卡',
            type: 'bar',
            data: [32, 2, 30, 34, 30, 330, 320],
            markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            }
        },
        {
            name: '阿里云卡',
            type: 'bar',
            data: [20, 332, 1, 34, 90, 33, 320],
            markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            }
        }
    ]
};
lyfxdb.setOption(lyfxdb_option);




