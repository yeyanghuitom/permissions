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
/*声量分析*/
var slfxT = echarts.init(document.getElementById("slfxT"));
var slfxT_option = {
    title: {
        text: '微博走势图'
    },
    xAxis: {
        type: 'category',
        data: ['2018-05-08', '2018-05-09', '2018-05-11', '2018-05-12', '2018-05-13', '2018-05-14', '2018-05-15']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [20, 932, 40, 934, 30, 1330, 1320],
        type: 'line'
    }]
};
slfxT.setOption(slfxT_option);
/*声量分析*/
var slfxData = {"zsl":"2000","content":[{"id":"1","name":"中国联通","sl":"500"},{"id":"2","name":"四川联通","sl":"800"},{"id":"2","name":"湖南联通","sl":"100"},{"id":"2","name":"江苏联通","sl":"300"}]};
slfxBtn("cblph");
slfxBtn("yxlph");
function slfxBtn(id) {
    var slfxHtml = "";
    var result = slfxData.content;
    for (var i = 0; i < result.length; i++) {
        var obj = result[i];
        var jdtChildW = (parseInt(obj.sl)/parseInt(slfxData.zsl)*100);
        slfxHtml +='<tr>'+
            '<td>'+(i+1)+'.</td>'+
            '<td class="rdfxtitle">'+obj.name+'</td>'+
            '<td class="rdfxjd">'+
            '<div class="progress" style="margin: 5px 0">'+
            '<div class="progress-bar progress-bar-danger progress-bar-striped active" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: '+jdtChildW+"%"+'">'+
            '</div>'+
            '</div>'+
            '</td>'+
            '</tr>';
    }
    $("#"+id+" .tableData").append('<table style="width: 100%">'+slfxHtml+'</table>');
}
/*评论分析*/
var plfxT = echarts.init(document.getElementById("plfxT"));
var plfxT_option = {
    title: {
        text: '评论走势图'
    },
    xAxis: {
        type: 'category',
        data: ['2018-05-08', '2018-05-09', '2018-05-11', '2018-05-12', '2018-05-13', '2018-05-14', '2018-05-15']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [20, 28, 40, 934, 30, 4, 2],
        type: 'line'
    }]
};
plfxT.setOption(plfxT_option);
/*用户分析*/
/*地域分析*/
var yhfxT = echarts.init(document.getElementById('yhfxT'));
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
yhfxT.showLoading();

yhfxT.hideLoading();
yhfxT.setOption(option = {
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
for (var i = 0; i < 5; i++) {
    var obj = mydata[i];
    $("#yhfx_sj table").append('<tr><td>' + obj.name + '</td><td>' + obj.value + '</td></tr>')
}
/*性别分析*/
var xbfxT = echarts.init(document.getElementById("xbfxT"));
var xbfxT_option = {
    title: {
        text: '性别',
        x: 'left'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        data: ['男', '女']
    },
    series: [
        {
            name: '性别分析',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
                {value: 335, name: '男'},
                {value: 10, name: '女'}
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
xbfxT.setOption(xbfxT_option);
