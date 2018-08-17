$(".img").click(function (ev) {
  var ofx=$(".img").offset().left;
  var oEvent = ev || event;
  var xx = oEvent.clientX;
  if (xx <= (100+ofx)) {
    //整体
    $(".img1").show();
    $(".img2").hide();
    $(".img3").hide();
    $(".img4").hide();

  } else if (xx > (100+ofx) && xx <= (200+ofx)) {
    //业务
    $(".img1").hide();
    $(".img2").show();
    $(".img3").hide();
    $(".img4").hide();

  } else if (xx > (200+ofx)&&xx<=(300+ofx)) {
    //网络
    $(".img1").hide();
    $(".img2").hide();
    $(".img3").show();
    $(".img4").hide();

  }else if (xx>(300+ofx)){
    // 服务
    $(".img1").hide();
    $(".img2").hide();
    $(".img3").hide();
    $(".img4").show();

  }
})


$(".enter1").click(function () {
  window.location.href = "index.html"
})
$(".ywpng").click(function () {
  console.log("宽带数据");
  $(".kdpng").show();
  $(".ywpng").hide();
})
$(".kdpng").click(function () {
  console.log("移网数据");
  $(".ywpng").show();
  $(".kdpng").hide();
})

$("tr.parent").click(function () {
  console.log("parent");
  // $(this).toggleClass('selected');
  $(this)
    .siblings(".child_" + this.id)
    .slideToggle();
  var icon = $(this).find("i");
  console.log(icon);
  if (icon.hasClass("glyphicon-chevron-down")) {
    console.log("glyphicon-chevron-down");
    icon.removeClass("glyphicon-chevron-down");
    icon.addClass("glyphicon-chevron-up");
  } else {
    icon.removeClass("glyphicon-chevron-up");
    icon.addClass("glyphicon-chevron-down");
  }
});
/* chart1配置内容 start */

var data = [
  { "value": 42.1, "name": "中国联通" },
  { "value": 29, "name": "中国移动" },
  { "value": 28.9, "name": "中国电信" }
];
data_name = [];
for (var n in data) {
  data[n]['name'] = data[n]['name'] + ' ' + data[n]['value'] + '%';
  data_name.push(data[n]['name'])
}
/* chart1配置内容 end */
var chart1 = echarts.init(document.getElementById("chart1"));
var option1 = {
  // title: {
  //   text: '中国联通\n20%',
  //   x: 'center',
  //   y: 'center',
  //   textStyle: {
  //     fontWeight: 'normal',
  //     color: '#0580f2',
  //     fontSize: '40'
  //   }
  // },
  tooltip: {
    trigger: 'item',
    formatter: "{b}"
  },
  legend: {
    orient: 'vertical',
    top: 'top',
    left: 'left',
    right: 60,
    data: data_name,
    textStyle: {
      color: "#fff",
      fontWeight: 'normal',
      fontFamily: '宋体'
    }
  },
  grid: {
    top: '3%',
    bottom: '3%',
    left: '6%',
    right: '6%'
  },
  series: [

    {
      name: '',
      type: 'pie',
      radius: ['40%', '55%'],
      data: data,
      itemStyle: {
        normal: {
          borderWidth: 5,
          // shadowBlur: 30,
          borderColor: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
            offset: 0,
            color: '#0A0A2D'
          }, {
            offset: 1,
            color: '#0A0A2D'
          }]),
          shadowColor: 'rgba(142, 152, 241, 0.6)'
        }
      },
    }
  ]
};
chart1.setOption(option1);
var chart2 = echarts.init(document.getElementById("chart2"));
var option2 = {
  color: ["#00C7FF"],
  // title: {
  //   text: '各年龄段占比',
  //   textStyle: {
  //       color: '#ccc'
  //   }
  // },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    },
    formatter: "{b} <br> 占比: {c}%"
  },
  /*legend: {
      data: [date]
  },*/
  grid: {
    left: '4%',
    right: '4%',
    bottom: '2%',
    containLabel: true
  },
  xAxis: {
    type: 'value',
    axisLabel: {
      formatter: '{value} %'
    },
    axisTick: {
      show: false,
    },
    axisLine: {
      show: false,
      lineStyle: {
        color: "#00c7ff",
        width: 1,
        type: "solid"
      },
    },
    splitLine: {
      lineStyle: {
        color: "#063374",
      }
    }
  },
  yAxis: {
    type: 'category',
    data: ['18-24', '25-34', '35-39', '40-44', '45-55', '55岁以上'],
    axisLabel: {
      show: true,
      margin: 10,
      inside: false,
      textStyle: {
        color: '#00c7ff',
        fontWeight: '50'
      }
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: "#063374",
        width: 1,
        type: "solid"
      }
    },
    axisTick: {
      show: false,
    },
  },
  series: [{
    type: 'bar',
    label: {
      normal: {
        show: true,
        // formatter: '{c}',
        formatter: function (v) {
          var val = v.data;
          if (val == 0) {
            return '';
          }
          return val;
        },
        color: '#fff'
      }
    },
    data: [20.78, 39.18, 10.28, 9.31, 13.31, 7.41]
  }]
}
chart2.setOption(option2)
var chart3 = echarts.init(document.getElementById("chart3"));
var option3 = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {
    data: ['17Q4', '18Q1'],
    align: 'right',
    right: 10,
    textStyle: {
      color: "#fff"
    },
    itemWidth: 10,
    itemHeight: 10,
    itemGap: 35
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '8%',
    containLabel: true
  },
  xAxis: [{
    type: 'category',
    data: ['纯语音\n用户',
      '有流量\n4G用户',
      '有流量\n非4G用户',
    ],
    axisLine: {
      show: true,
      lineStyle: {
        color: "#063374",
        width: 1,
        type: "solid"
      }
    },
    axisTick: {
      show: false,
    },
    axisLabel: {
      show: true,
      textStyle: {
        color: "#00c7ff",
      },
      // rotate: 10,
      interval: 0,
    },
  }],
  yAxis: [{
    type: 'value',
    axisLabel: {
      formatter: '{value} %'
    },
    axisTick: {
      show: false,
    },
    axisLine: {
      show: false,
      lineStyle: {
        color: "#00c7ff",
        width: 1,
        type: "solid"
      },
    },
    splitLine: {
      lineStyle: {
        color: "#063374",
      }
    }
  }],
  series: [{
    name: '17Q4',
    type: 'bar',
    data: [9.5, 15.6, 74.9],
    barWidth: 10, //柱子宽度
    barGap: 1, //柱子之间间距
    itemStyle: {
      normal: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: '#008cff'
        }, {
          offset: 1,
          color: '#005193'
        }]),
        opacity: 1,
      }
    }
  }, {
    name: '18Q1',
    type: 'bar',
    data: [8.8, 12.1, 79.1],
    barWidth: 10,
    barGap: 1,
    itemStyle: {
      normal: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: '#00da9c'
        }, {
          offset: 1,
          color: '#007a55'
        }]),
        opacity: 1,
      }
    }
  },]
}
chart3.setOption(option3)
var chart4 = echarts.init(document.getElementById("chart4"));
var option4 = {
  color: ["#8DBC92", "#FFFAC2", "#F6BEAD", "#B884AA", "#0B59A1"],

  tooltip: {
    trigger: "axis",
    axisPointer: {
      // 坐标轴指示器，坐标轴触发有效
      type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
    }
  },
  legend: {
    data: ["1星", "2星", "3星", "4星", "5星"],
    align: 'right',
    right: 10,
    textStyle: {
      color: "#fff"
    },
    itemWidth: 10,
    itemHeight: 10,
    itemGap: 5
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "8%",
    containLabel: true
  },
  yAxis: {
    type: "value",
    axisLabel: {
      formatter: '{value} %'
    },
    axisTick: {
      show: false,
    },
    axisLine: {
      show: false,
      lineStyle: {
        color: "#00c7ff",
        width: 1,
        type: "solid"
      },
    },
    splitLine: {
      lineStyle: {
        color: "#063374",
      }
    }
  },
  xAxis: {
    type: "category",
    data: ["联通各类用户\n数量实际占比", "调研样本\n量占比"],
    axisLine: {
      show: true,
      lineStyle: {
        color: "#063374",
        width: 1,
        type: "solid"
      }
    },
    axisTick: {
      show: false,
    },
    axisLabel: {
      show: true,
      textStyle: {
        color: "#00c7ff",
      },
      // rotate: 10,
      interval: 0,
    },
  },
  series: [
    {
      name: "1星",
      type: "bar",
      stack: "总量",
      label: {
        normal: {
          show: true,
          position: "insideRight"
        }
      },
      data: [20.5, 33.5],
      label: {
        normal: {
          show: true,
          textStyle: {
            color: "#000"
          }
        }
      },
    },
    {
      name: "2星",
      type: "bar",
      stack: "总量",
      label: {
        normal: {
          show: true,
          position: "insideRight"
        }
      },
      data: [29.1, 33.6],
      label: {
        normal: {
          show: true,
          textStyle: {
            color: "#000"
          }
        }
      },
    },
    {
      name: "3星",
      type: "bar",
      stack: "总量",
      label: {
        normal: {
          show: true,
          position: "insideRight"
        }
      },
      data: [11.3, 17.0],
      label: {
        normal: {
          show: true,
          textStyle: {
            color: "#000"
          }
        }
      },
    },
    {
      name: "4星",
      type: "bar",
      stack: "总量",
      label: {
        normal: {
          show: true,
          position: "insideRight"
        }
      },
      data: [7.6, 13.7],
      label: {
        normal: {
          show: true,
          textStyle: {
            color: "#000"
          }
        }
      },
    },
    {
      name: "5星",
      type: "bar",
      stack: "总量",
      label: {
        normal: {
          show: true,
          position: "insideRight"
        }
      },
      data: [3.0, 3.0],
      label: {
        normal: {
          show: true,
          textStyle: {
            color: "#000"
          }
        }
      },
    }
  ]

}
chart4.setOption(option4)