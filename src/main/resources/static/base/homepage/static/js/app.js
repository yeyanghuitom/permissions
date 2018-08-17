//地图容器
var chart = echarts.init(document.getElementById('map'));
//34个省、市、自治区的名字拼音映射数组
var provinces = {
  //23个省
  "台湾": "taiwan",
  "河北": "hebei",
  "山西": "shanxi",
  "辽宁": "liaoning",
  "吉林": "jilin",
  "黑龙江": "heilongjiang",
  "江苏": "jiangsu",
  "浙江": "zhejiang",
  "安徽": "anhui",
  "福建": "fujian",
  "江西": "jiangxi",
  "山东": "shandong",
  "河南": "henan",
  "湖北": "hubei",
  "湖南": "hunan",
  "广东": "guangdong",
  "海南": "hainan",
  "四川": "sichuan",
  "贵州": "guizhou",
  "云南": "yunnan",
  "陕西": "shanxi1",
  "甘肃": "gansu",
  "青海": "qinghai",
  //5个自治区
  "新疆": "xinjiang",
  "广西": "guangxi",
  "内蒙古": "neimenggu",
  "宁夏": "ningxia",
  "西藏": "xizang",
  //4个直辖市
  "北京": "beijing",
  "天津": "tianjin",
  "上海": "shanghai",
  "重庆": "chongqing",
  //2个特别行政区
  "香港": "xianggang",
  "澳门": "aomen"
};

//直辖市和特别行政区-只有二级地图，没有三级地图
var special = ["北京", "天津", "上海", "重庆", "香港", "澳门"];
//临时数组，用来承载地图相关参数
var mapdata = [];
//绘制全国地图
$.getJSON('static/map/china.json', function (data) {
  console.log("加载全国地图执行了");
  d = [];
  //遍历json文件中的地图数据
  for (var i = 0; i < data.features.length; i++) {
    d.push({
      name: mapobj[i].PROVINCE_NAME,
    })
  }

  //mapdata数组中包含name和cp地理坐标
  mapdata = d;
  //注册地图
  echarts.registerMap('china', data);
  //绘制地图
  renderMap('china', d);
});
//地图点击事件

chart.on('click', function (params) {

  if (params.name in provinces) {
    console.log("第一级下钻到第二级");
    //如果点击的是34个省、市、自治区，绘制选中地区的二级地图
    //provinces[params.name]表示获取provinces的键值对中，params.name键对应的值
    $.getJSON('static/map/province/' + provinces[params.name] + '.json', function (data) {
      console.log("获取到省级json");

      //注册地图，两个参数，name和data
      echarts.registerMap(params.name, data);
      var d = [];
      for (var i = 0; i < data.features.length; i++) {
        d.push({
          name: data.features[i].properties.name,
          //value: data.features[i].properties.cp
        })
      }
      var url = provinces[params.name]
      //渲染地图，参数是当前的name，和d数组
      renderMap(params.name, d, 'provinces/' + url);
    });
  } else {
    renderMap('china', mapdata, "provinces");
  }

});


//初始化绘制全国地图配置
var option = {
  // backgroundColor: '#091C3D',
  tooltip: {
    trigger: 'item',
    formatter: function (params) {
      var str = '';
      for (var i = 0; i < mapobj.length; i++) {
        if (params.name == mapobj[i].name) {
          str = params.name + '</br>移网：' + mapobj[i].ywval + '</br>宽带：' + mapobj[i].kdval + '</br>'
        }
      }
      return str
    }
  },
};

// //数据的排序
// function NumDescSort(a, b) {
//   return a.value - b.value;
// }

/* 添加内容end */
function renderMap(map, data) {

  //数组，name为地区名称，value为值
  var jdata = []
  //y轴名称列表
  // var titledata = [];

  //绘制全国地图的时候，执行请求操作
  $.ajax({
    type: "post",
    dataType: "json",
    url: "json/provinces.json",
    success: function (result) {
      console.log("请求成功");
      //请求成功之后，将数据push到数组中
      for (var i = 0; i < result.length; i++) {
        if (result[i].value == 100) {
          result[i].value = 100
        } else if (result[i].value < 100 && result[i].value >= 50) {
          result[i].value = 50
        } else if (result[i].value < 50) {
          result[i].value = 0
        }
        jdata.push({
          name: result[i].name,
          value: result[i].value
        })

      }
      //将省份名称push到y轴的临时数组中
      // for (var i = 0; i < jdata.length; i++) {
      //   titledata.push(jdata[i].name)
      // }
      //按照数据的大小进行排序
      // jdata.sort(NumDescSort);
      //对chart的相关内容进行配置
      //渲染副标题的内容
      var subtext = map;
      if (subtext == "china") {
        subtext = "中国"
      }
      $("#text").html(subtext)
      var width = $("#text").width() / 2;
      $("#text").css("margin-right", -width)
      option.backgroundColor = '#090A29';
      option.series = [{
        z: 1,
        name: '全部',
        type: 'map',
        map: map,
        right: '2%',
        top: 10,
        height: '100%',
        width: '100%',
        zoom: 1,
        itemStyle: {
          normal: {
            // areaColor: '#323c48',
            borderColor: '#fff',
            borderWidth: 1,
            shadowColor: '#fff',
            shadowBlur: 5
          },
          emphasis: {
            areaColor: 'rgba(63, 218, 255, 0.5)'
          }
        },
        label: {
          normal: {
            show: false,
            textStyle: {
              color: "#fff",
              fontSize: 12,
              fontStyle: 'bold'
            },
          },
          emphasis: {
            show: true,
            textStyle: {
              color: "#fff",
              fontSize: 12
            }
          }
        },
        itemStyle: {
          normal: {
          },
          emphasis: {
            areaColor: 'rgba(63, 218, 255, 0.5)'
          }
        },
        //roam: true,
        data: jdata
      }];
      option.visualMap = {
        show: false,
        min: 0,
        max: 100,
        text: ['高', '低'],
        calculable: true,
        // colorLightness: [0.2, 100],
        // color: ['#40B298', '#F7DA98', '#D0130F'],
        color: ['#1A2867', '#254E8E', '#181B46'],
        dimension: 0,
        textStyle: {
          color: '#fff',
          fontSize: 12
        }
      },
        //渲染地图
        chart.setOption(option);

    },
    error: function () {
      console.log("请求失败");
    }
  })
}
var mapobj = [];
//请求地图数据
$.ajax({
  type: "post",
  dataType: "json",
  url: "json/index.json",
  success: function (result) {
    console.log("请求成功");
    for (var i = 0; i < result.province.length; i++) {
      mapobj.push({
        name: result.province[i].PROVINCE_NAME,
        ywval: result.province[i].U_NPS,
        kdval: result.province[i].U_K_NPS
      })
    }


  },
  error: function () {
    console.log("请求失败");
  }
})

