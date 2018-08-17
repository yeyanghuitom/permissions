$(".img").click(function (ev) {
  var oEvent = ev || event;
  var xx = oEvent.clientX;
  if (xx <= 120) {
    //网络
    $(".img1").show();
    $(".img2").hide();
    $(".img3").hide();
    $("#con1").show();
    $("#con2").hide();
    $("#con3").hide();
  } else if (xx > 120 && xx <= 220) {
    //业务
    $(".img1").hide();
    $(".img2").show();
    $(".img3").hide();
    $("#con1").hide();
    $("#con2").show();
    $("#con3").hide();
  } else if (xx > 220) {
    //服务
    $(".img1").hide();
    $(".img2").hide();
    $(".img3").show();
    $("#con1").hide();
    $("#con2").hide();
    $("#con3").show();
  }
})
$(".enter1").click(function () {
  window.location.href = "index.html";
});
var lineCacheData = {
  "LT": {
    nomalColor: "rgba(55, 130, 193",
    activeColor: "rgba(246, 179, 127"
  },
  "YD": {
    nomalColor: "rgba(55, 130, 193",
    activeColor: "rgba(42, 215, 237"
  },
  "DX": {
    nomalColor: "rgba(55, 130, 193",
    activeColor: "rgba(34, 172, 56"
  },
}
//网络
var chart1 = echarts.init(document.getElementById("chart1"));
var option1 = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      lineStyle: {
        color: '#57617B'
      }
    }
  },
  legend: {
    icon: 'rect',
    itemWidth: 14,
    itemHeight: 5,
    itemGap: 13,
    data: ['中国联通', '中国移动', '中国电信'],
    right: '4%',
    textStyle: {
      fontSize: 12,
      color: '#fff'
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [{
    type: 'category',
    boundaryGap: false,
    axisLine: {
      lineStyle: {
        color: '#57617B'
      }
    },
    axisLabel: {
      margin: 10,
      textStyle: {
        fontSize: 14,
        color: '#fff'
      }
    },
    //data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
    data: ['17Q1', '17Q2', '17Q3', '17Q4', '18Q1']
  }],
  yAxis: [{
    type: 'value',
    axisTick: {
      show: false
    },
    axisLine: {
      lineStyle: {
        color: '#57617B'
      }
    },
    axisLabel: {
      margin: 10,
      textStyle: {
        fontSize: 14,
        color: '#fff'
      }
    },
    splitLine: {
      show: false
    }
  }],
  series: [
    {
      name: '中国联通',
      type: 'line',
      smooth: false,
      lineStyle: {
        normal: {
          width: 1
        }
      },
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: lineCacheData.LT.nomalColor + ',0.3)'
          }, {
            offset: 0.8,
            color: lineCacheData.LT.nomalColor + ', 0)'
          }], false),
          shadowColor: 'rgba(0, 0, 0, 0.1)',
          shadowBlur: 10
        },
      },
      itemStyle: {
        normal: {
          color: lineCacheData.LT.activeColor + ')'
        },
      },
      data: [-1.2, -0.5, 0.6, 5, 5],
    }, {
      name: '中国移动',
      type: 'line',
      smooth: false,
      lineStyle: {
        normal: {
          width: 1
        }
      },
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: lineCacheData.YD.nomalColor + ', 0.3)'
          }, {
            offset: 0.8,
            color: lineCacheData.YD.nomalColor + ', 0)'
          }], false),
          shadowColor: 'rgba(0, 0, 0, 0.1)',
          shadowBlur: 10
        }
      },
      itemStyle: {
        normal: {
          color: lineCacheData.YD.activeColor + ')'
        }
      },
      data: [28.4, 23.4, 24.2, 26.9, 23.8],
    }, {
      name: '中国电信',
      type: 'line',
      smooth: false,
      lineStyle: {
        normal: {
          width: 1
        }
      },
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: lineCacheData.DX.nomalColor + ',0.3)'
          }, {
            offset: 0.8,
            color: lineCacheData.DX.nomalColor + ', 0)'
          }], false),
          shadowColor: 'rgba(0, 0, 0, 0.1)',
          shadowBlur: 10
        }
      },
      itemStyle: {
        normal: {
          color: lineCacheData.DX.activeColor + ')'
        }
      },
      data: [14.1, 13.9, 14.4, 17.9, 16.5],
    },
  ]

};
chart1.setOption(option1);

//业务
var chart3 = echarts.init(document.getElementById("chart3"));
var option3 = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      lineStyle: {
        color: '#57617B'
      }
    }
  },
  legend: {
    icon: 'rect',
    itemWidth: 14,
    itemHeight: 5,
    itemGap: 13,
    data: ['中国联通', '中国移动', '中国电信'],
    right: '4%',
    textStyle: {
      fontSize: 12,
      color: '#fff'
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [{
    type: 'category',
    boundaryGap: false,
    axisLine: {
      lineStyle: {
        color: '#57617B'
      }
    },
    axisLabel: {
      margin: 10,
      textStyle: {
        fontSize: 14,
        color: '#fff'
      }
    },
    //data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
    data: ['17Q1', '17Q2', '17Q3', '17Q4', '18Q1']
  }],
  yAxis: [{
    type: 'value',
    axisTick: {
      show: false
    },
    axisLine: {
      lineStyle: {
        color: '#57617B'
      }
    },
    axisLabel: {
      margin: 10,
      textStyle: {
        fontSize: 14,
        color: '#fff'
      }
    },
    splitLine: {
      show: false
    }
  }],
  series: [
    {
      name: '中国联通',
      type: 'line',
      smooth: false,
      lineStyle: {
        normal: {
          width: 1
        }
      },
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: lineCacheData.LT.nomalColor + ',0.3)'
          }, {
            offset: 0.8,
            color: lineCacheData.LT.nomalColor + ', 0)'
          }], false),
          shadowColor: 'rgba(0, 0, 0, 0.1)',
          shadowBlur: 10
        },
      },
      itemStyle: {
        normal: {
          color: lineCacheData.LT.activeColor + ')'
        },
      },
      data: [4.6, 3.4, 9.8, 12.3, 19.6],
    }, {
      name: '中国移动',
      type: 'line',
      smooth: false,
      lineStyle: {
        normal: {
          width: 1
        }
      },
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: lineCacheData.YD.nomalColor + ', 0.3)'
          }, {
            offset: 0.8,
            color: lineCacheData.YD.nomalColor + ', 0)'
          }], false),
          shadowColor: 'rgba(0, 0, 0, 0.1)',
          shadowBlur: 10
        }
      },
      itemStyle: {
        normal: {
          color: lineCacheData.YD.activeColor + ')'
        }
      },
      data: [4.6, -9.2, -4.7, -3, -4.9],
    }, {
      name: '中国电信',
      type: 'line',
      smooth: false,
      lineStyle: {
        normal: {
          width: 1
        }
      },
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: lineCacheData.DX.nomalColor + ',0.3)'
          }, {
            offset: 0.8,
            color: lineCacheData.DX.nomalColor + ', 0)'
          }], false),
          shadowColor: 'rgba(0, 0, 0, 0.1)',
          shadowBlur: 10
        }
      },
      itemStyle: {
        normal: {
          color: lineCacheData.DX.activeColor + ')'
        }
      },
      data: [9.5, 6.6, 9.8, 7.9, 25.2],
    },
  ]
};
chart3.setOption(option3);

//服务
var chart5 = echarts.init(document.getElementById("chart5"));
var option5 = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      lineStyle: {
        color: '#57617B'
      }
    }
  },
  legend: {
    icon: 'rect',
    itemWidth: 14,
    itemHeight: 5,
    itemGap: 13,
    data: ['中国联通', '中国移动', '中国电信'],
    right: '4%',
    textStyle: {
      fontSize: 12,
      color: '#fff'
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [{
    type: 'category',
    boundaryGap: false,
    axisLine: {
      lineStyle: {
        color: '#57617B'
      }
    },
    axisLabel: {
      margin: 10,
      textStyle: {
        fontSize: 14,
        color: '#fff'
      }
    },
    //data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
    data: ['17Q1', '17Q2', '17Q3', '17Q4', '18Q1']
  }],
  yAxis: [{
    type: 'value',
    axisTick: {
      show: false
    },
    axisLine: {
      lineStyle: {
        color: '#57617B'
      }
    },
    axisLabel: {
      margin: 10,
      textStyle: {
        fontSize: 14,
        color: '#fff'
      }
    },
    splitLine: {
      show: false
    }
  }],
  series: [
    {
      name: '中国联通',
      type: 'line',
      smooth: false,
      lineStyle: {
        normal: {
          width: 1
        }
      },
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: lineCacheData.LT.nomalColor + ',0.3)'
          }, {
            offset: 0.8,
            color: lineCacheData.LT.nomalColor + ', 0)'
          }], false),
          shadowColor: 'rgba(0, 0, 0, 0.1)',
          shadowBlur: 10
        },
      },
      itemStyle: {
        normal: {
          color: lineCacheData.LT.activeColor + ')'
        },
      },
      data: [23.6, 21.2, 26.1, 27.1, 25.1],
    }, {
      name: '中国移动',
      type: 'line',
      smooth: false,
      lineStyle: {
        normal: {
          width: 1
        }
      },
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: lineCacheData.YD.nomalColor + ', 0.3)'
          }, {
            offset: 0.8,
            color: lineCacheData.YD.nomalColor + ', 0)'
          }], false),
          shadowColor: 'rgba(0, 0, 0, 0.1)',
          shadowBlur: 10
        }
      },
      itemStyle: {
        normal: {
          color: lineCacheData.YD.activeColor + ')'
        }
      },
      data: [54.6, 51, 54.5, 58, 50.7],
    }, {
      name: '中国电信',
      type: 'line',
      smooth: false,
      lineStyle: {
        normal: {
          width: 1
        }
      },
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: lineCacheData.DX.nomalColor + ',0.3)'
          }, {
            offset: 0.8,
            color: lineCacheData.DX.nomalColor + ', 0)'
          }], false),
          shadowColor: 'rgba(0, 0, 0, 0.1)',
          shadowBlur: 10
        }
      },
      itemStyle: {
        normal: {
          color: lineCacheData.DX.activeColor + ')'
        }
      },
      data: [30, 28, 26.3, 32.1, 27.5],
    },
  ]
};
chart5.setOption(option5);

// $("tr.parent").click(function () {
//   console.log("parent");
//   // $(this).toggleClass('selected');
//   $(this)
//     .siblings(".child_" + this.id)
//     .slideToggle();
//   var icon = $(this).find("i");
//   console.log(icon);
//   if (icon.hasClass("glyphicon-chevron-down")) {
//     console.log("glyphicon-chevron-down");
//     icon.removeClass("glyphicon-chevron-down");
//     icon.addClass("glyphicon-chevron-up");
//   } else {
//     icon.removeClass("glyphicon-chevron-up");
//     icon.addClass("glyphicon-chevron-down");
//   }
// });
function redraw(chart, option, t) {
  if (option && typeof option === "object") {
    chart.setOption(option, true);
    chart.on("click", function (e) {
      var tName = e.seriesName;

      console.log(e);
      console.log(e.seriesId);
      console.log(e.seriesName);
      //console.log(this);

      for (var i = 0; i < option.series.length; i++) {
        console.log("#########");
        console.log(option.series[i].name);
        if (option.series[i].name == tName) {
          option.series[i].areaStyle.normal.color =
            new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: lineCacheData[t[tName]].activeColor + ', 1)'
            }, {
              offset: 0.8,
              color: lineCacheData[t[tName]].activeColor + ',0.5 )'
            }], false)
        } else {
          option.series[i].areaStyle.normal.color =
            new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: lineCacheData[t[option.series[i].name]].nomalColor + ',0.3)'
            }, {
              offset: 0.8,
              color: lineCacheData[t[option.series[i].name]].nomalColor + ',0)'
            }], false)
        }
      }

      chart.clear();
      chart.setOption(option, true);

      e.color = "#005aa0";
    });
  }


}
t1 = { "中国联通": "LT", "中国移动": "YD", "中国电信": "DX" };
t3 = { "中国联通": "LT", "中国移动": "YD", "中国电信": "DX" };
t5 = { "中国联通": "LT", "中国移动": "YD", "中国电信": "DX" };
redraw(chart1, option1, t1);
redraw(chart3, option3, t3);
redraw(chart5, option5, t5);

