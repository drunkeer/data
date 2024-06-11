(function(){
  var chartDom = document.getElementById('chart1');
  var myChart = echarts.init(chartDom);
  var option;
  
  const updateFrequency = 2000;
  const dimension = 0;
  const countryColors = {
    Australia: '#00008b',
    Canada: '#f00',
    China: '#ffde00',
    Cuba: '#002a8f',
    Finland: '#003580',
    France: '#ed2939',
    Germany: '#000',
    Iceland: '#003897',
    India: '#f93',
    Japan: '#bc002d',
    'North Korea': '#024fa2',
    'South Korea': '#000',
    'New Zealand': '#00247d',
    Norway: '#ef2b2d',
    Poland: '#dc143c',
    Russia: '#d52b1e',
    Turkey: '#e30a17',
    'United Kingdom': '#00247d',
    'United States': '#b22234'
  };
  $.when(
    $.getJSON('https://fastly.jsdelivr.net/npm/emoji-flags@1.3.0/data.json'),
    $.getJSON('data.json')
  ).done(function (res0, res1) {
    const flags = res0[0];
    const data = res1[0];
    const years = [];
    for (let i = 0; i < data.length; ++i) {
      if (years.length === 0 || years[years.length - 1] !== data[i][4]) {
        years.push(data[i][4]);
      }
    }
    function getFlag(countryName) {
      if (!countryName) {
        return '';
      }
      return (
        flags.find(function (item) {
          return item.name === countryName;
        }) || {}
      ).emoji;
    }
    let startIndex = 10;
    let startYear = years[startIndex];
    option = {
      grid: {
        top: 10,
        bottom: 30,
        left: 150,
        right: 80
      },
      xAxis: {
        max: 'dataMax',
        axisLabel: {
          formatter: function (n) {
            return Math.round(n) + '';
          }
        }
      },
      dataset: {
        source: data.slice(1).filter(function (d) {
          return d[4] === startYear;
        })
      },
      yAxis: {
        type: 'category',
        inverse: true,
        max: 10,
        axisLabel: {
          show: true,
          fontSize: 14,
          formatter: function (value) {
            return value + '{flag|' + getFlag(value) + '}';
          },
          rich: {
            flag: {
              fontSize: 25,
              padding: 5
            }
          }
        },
        animationDuration: 300,
        animationDurationUpdate: 300
      },
      series: [
        {
          realtimeSort: true,
          seriesLayoutBy: 'column',
          type: 'bar',
          itemStyle: {
            color: function (param) {
              return countryColors[param.value[3]] || '#5470c6';
            }
          },
          encode: {
            x: dimension,
            y: 3
          },
          label: {
            show: true,
            precision: 1,
            position: 'right',
            valueAnimation: true,
            fontFamily: 'monospace'
          }
        }
      ],
      // Disable init animation.
      animationDuration: 0,
      animationDurationUpdate: updateFrequency,
      animationEasing: 'linear',
      animationEasingUpdate: 'linear',
      graphic: {
        elements: [
          {
            type: 'text',
            right: 160,
            bottom: 60,
            style: {
              text: startYear,
              font: 'bolder 80px monospace',
              fill: 'rgba(100, 100, 100, 0.25)'
            },
            z: 100
          }
        ]
      }
    };
    // console.log(option);
    myChart.setOption(option);
    for (let i = startIndex; i < years.length - 1; ++i) {
      (function (i) {
        setTimeout(function () {
          updateYear(years[i + 1]);
        }, (i - startIndex) * updateFrequency);
      })(i);
    }
    function updateYear(year) {
      let source = data.slice(1).filter(function (d) {
        return d[4] === year;
      });
      option.series[0].data = source;
      option.graphic.elements[0].style.text = year;
      myChart.setOption(option);
    }
  });
  
  option && myChart.setOption(option);

})();
(function(){
    var chartDom = document.getElementById('chart2');
var myChart = echarts.init(chartDom);
var option;

const data = [];
for (let i = 0; i <= 360; i++) {
  let t = (i / 180) * Math.PI;
  let r = Math.sin(2 * t) * Math.cos(2 * t);
  data.push([r, i]);
}
option = {
  title: {
    text: 'Two Value-Axes in Polar'
  },
  legend: {
    data: ['line']
  },
  polar: {
    center: ['50%', '54%']
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross'
    }
  },
  angleAxis: {
    type: 'value',
    startAngle: 0
  },
  radiusAxis: {
    min: 0
  },
  series: [
    {
      coordinateSystem: 'polar',
      name: 'line',
      type: 'line',
      showSymbol: false,
      data: data
    }
  ],
  animationDuration: 2000
};

option && myChart.setOption(option);
   
}

)();
(
    function(){
      var myChart = echarts.init(document.getElementById('chart3'))
      // 飞机图形
      var planePath =
        'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z'
      var carPath =
        'path://M912.832 467.104h-22.272l-6.624-22.464h60.928a32 32 0 1 0 0-64h-79.808l-35.584-120.544C815.168 221.28 771.52 192 728 192H302.592c-43.52 0-87.136 29.28-102.112 70.112l-34.944 118.528H96a32 32 0 0 0 0 64h50.624l-6.624 22.464H128c-35.296 0-64 28.704-64 64v282.944h51.104v34.816a32 32 0 1 0 64 0v-34.816h690.528v34.816a32 32 0 1 0 64 0v-34.816h43.232v-282.944a64.128 64.128 0 0 0-64.032-64zM128 750.016v-104.96h73.792c26.464 0 50.528-16.672 59.872-41.408l24.064-63.712c1.088-2.912 1.216-5.888 1.44-8.832h450.528c0.224 2.944 0.352 5.92 1.44 8.832l24.064 63.648a64.256 64.256 0 0 0 59.872 41.472h89.76v104.96H128z m784.832-168.96l-89.76-0.032-18.848-49.952h108.608v49.984zM218.528 426.944a30.944 30.944 0 0 0 2.816-9.568L261.184 282.24c4.48-12.16 23.52-26.24 41.408-26.24H728c17.888 0 36.928 14.08 40.736 24.192l55.104 186.88H206.72l11.808-40.128z m2.144 104.16l-18.88 49.984H128v-49.984h92.672z'
       // 火车图形
        var trainPath =
        'path://M850.464 32.128H164.96a68.768 68.768 0 0 0-68.544 68.544V786.24c0 37.696 30.848 68.544 68.544 68.544h75.968L183.808 938.24a34.24 34.24 0 0 0 28.256 53.632c0.992 0 1.984-0.288 3.008-0.352 1.184 0.128 2.336 0.32 3.552 0.32H803.392c0.448 0 0.896-0.16 1.312-0.192 3.68-0.16 7.264-0.96 10.688-2.24 0.896-0.384 1.728-0.832 2.56-1.28 1.6-0.736 3.232-1.216 4.736-2.24a34.24 34.24 0 0 0 8.928-47.648l-57.12-83.488h75.968a68.768 68.768 0 0 0 68.576-68.544V100.672a68.768 68.768 0 0 0-68.576-68.544zM199.232 683.392a68.544 68.544 0 1 1 137.088 0 68.544 68.544 0 0 1-137.088 0z m539.136 239.936H277.056l46.912-68.576h367.488l46.912 68.576z m9.28-171.392a68.544 68.544 0 1 1 0-137.12 68.544 68.544 0 0 1 0 137.12z m68.544-308.48A68.768 68.768 0 0 1 747.648 512H267.776a68.768 68.768 0 0 1-68.544-68.544v-68.576c0-37.696 30.848-68.544 68.544-68.544h479.872c37.696 0 68.544 30.848 68.544 68.544v68.576z m-34.24-239.936H233.472c-18.88 0-34.272-15.424-34.272-34.272 0-18.88 15.424-34.272 34.272-34.272h548.416c18.88 0 34.272 15.424 34.272 34.24 0 18.88-15.424 34.304-34.24 34.304z'
      var option = {
        legend: {
          orient: "vertical",
          top: '50%',
          right: "right",
          data: [
            '2023年西北大环线',
          ],
          textStyle: {
            color: "#fff"
          },
  
        },
        tooltip: {
          trigger: 'item',
          enterable: true,
          formatter: function (params, ticket, callback) {
            if (params.seriesType == 'effectScatter') {
              // return '线路：' + params.data.name + '' + params.data.value[2]
              return '地点：' + params.data.name
            } else if (params.seriesType == 'lines') {
              return params.data.fromName + ' -> ' + params.data.toName + '<br />' + params.data.value
            } else {
              return params.name
            }
          }
        },
        bmap: {
          center: [117.233674, 31.826972],
          zoom: 1,
          roam: true,
          mapStyleV2: {
            styleId: '78114c88f21bd7450bbc686171aeb56a'
          }
        },
        series: [
          // 此处画航线、轨迹线
          {
            name: '2023年西北大环线',
            type: 'lines',
            coordinateSystem: 'bmap',
            zlevel: 2,
            // symbol: ['none', 'arrow'],
            effect: {
              show: true,
              period: 5,
              trailLength: 0,
              color: 'white', // arrow箭头的颜色
              symbol: trainPath,
              symbolSize: 15
            },
            lineStyle: {
              normal: {
                color: '#a6c84c',
                width: 1,
                curveness: 0.2
              }
            },
            data: [
              // 一个大括号里是一条线
              {
                fromName: '合肥',
                toName: '兰州',
              //   起始地坐标
                coords: [
                  [117.233674, 31.826972],
                  [103.840755, 36.066746]
                ],
              //   路线值：根据实际情况选择相应的数据类型
                value: '2023年8月3日'
              },
              {
                fromName: '兰州',
                toName: '合肥',
                coords: [
                  [103.840755, 36.066746],
                  [117.233674, 31.826972]
                ],
                value: '2023年8月3日'
              },
            ]
          },
          {
            name: '2024海南之行',
            type: 'lines',
            coordinateSystem: 'bmap',
            zlevel: 2,
            // symbol: ['none', 'arrow'],
            effect: {
              show: true,
              period: 5,
              trailLength: 0,
              color: 'white', // arrow箭头的颜色
              symbol: planePath,
              symbolSize: 15
            },
            lineStyle: {
              normal: {
                color: '#a6c84c',
                width: 1,
                curveness: 0.2
              }
            },
            data: [
              // 一个大括号里是一条线
              {
                fromName: '合肥',
                toName: '三亚',
              //   起始地坐标
                coords: [
                  [117.233674, 31.826972],
                  [109.51626,18.260933]
                ],
              //   路线值：根据实际情况选择相应的数据类型
                value: '2024年5月20日'
              },
              {
                fromName: '三亚',
                toName: '合肥',
              //   起始地坐标
                coords: [
                  [109.51626,18.260933],
                  [117.233674, 31.826972]
                ],
              //   路线值：根据实际情况选择相应的数据类型
                value: '2024年5月20日'
              },
              
            ]
          },
          {
            name: '2023年西北大环线',
            type: 'lines',
            coordinateSystem: 'bmap',
            zlevel: 2,
            // symbol: ['none', 'arrow'],
            effect: {
              show: true,
              period: 5,
              trailLength: 0,
              color: 'white', // arrow箭头的颜色
              symbol: carPath,
              symbolSize: 15
            },
            lineStyle: {
              normal: {
                color: '#a6c84c',
                width: 1,
                curveness: 0.2
              }
            },
            data: [
              // 一个大括号里是一条线
              {
                fromName: '合肥',
                toName: '北京',
              //   起始地坐标
                coords: [
                  [117.233674, 31.826972],
                  [116.418561,39.88834]
                ],
              //   路线值：根据实际情况选择相应的数据类型
                value: '2024年5月19日'
              },
             
            ]
          },
          // 此处画点
          {
            name: '西北大环线',
            type: 'effectScatter',
            coordinateSystem: 'bmap',
            zlevel: 1,
            rippleEffect: {
              brushType: 'stroke'
            },
            label: {
              normal: {
                show: false,
                position: 'right',
                formatter: '{b}'
              }
            },
            symbolSize: function (val) {
              return val[2] / 1
            },
            itemStyle: {
              normal: {
                color: '#a6c84c'
              },
              emphasis: {
                areaColor: '#2B91B7'
              }
            },
            // 这里是地理位置上的新闻数据
            data: [
              // 一个大括号里是一个点，value的值[经度,纬度,新闻数据（如工资水平、人口数量等）]
              { name: '合肥', value: [117.233674, 31.826972, 10] },
              { name: '兰州', value: [103.840755, 36.066746, 9] },
              { name: '北京', value: [116.418561,39.88834, 20] },
              { name: '三亚', value: [109.51626, 18.260933, 30] },
  
            ]
          },
  
        ]
      }
      myChart.setOption(option);
  
   }
  )();
(
  function(){
    var dom = document.getElementById('chart4');
    var myChart = echarts.init(dom, null, {
      renderer: 'canvas',
      useDirtyRect: false
    });
    var app = {};
    // var ROOT_PATH = 'https://echarts.apache.org/examples';
    var option;

    $.getJSON('flights.json', function (data) {
  function getAirportCoord(idx) {
    return [data.airports[idx][3], data.airports[idx][4]];
  }
  var routes = data.routes.map(function (airline) {
    return [getAirportCoord(airline[1]), getAirportCoord(airline[2])];
  });
  myChart.setOption({
    backgroundColor: '#000',
    globe: {
      baseTexture: 'img/world.topo.bathy.200401.jpg',
      heightTexture:
        'img/bathymetry_bw_composite_4k.jpg',
      shading: 'lambert',
      light: {
        ambient: {
          intensity: 0.4
        },
        main: {
          intensity: 0.4
        }
      },
      viewControl: {
        autoRotate: false
      }
    },
    series: {
      type: 'lines3D',
      coordinateSystem: 'globe',
      blendMode: 'lighter',
      lineStyle: {
        width: 1,
        color: 'rgb(50, 50, 150)',
        opacity: 0.1
      },
      data: routes
    }
  });
});

    if (option && typeof option === 'object') {
      myChart.setOption(option);
    }

    window.addEventListener('resize', myChart.resize);
  }
)();

(function(){

  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('chart5'));
  // 指定图表的配置项和数据
  var option = {};

  //=============== start ===============//
  /**
   * 🚨🚨非常重要🚨🚨
   * 下面是 网站左侧代码，核心代码
   */
  // var uploadedDataURL = "data2.json";

//geoCoordMap把所有可能出现的城市加到数组里面
var geoCoordMap = {
"杭州": [119.5313, 29.8773],
"苏州": [118.8062, 31.9208],
'上海': [121.4648, 31.2891],
"天津": [117.4219, 39.4189],
'深圳': [114.072026, 22.552194],
"成都": [103.9526, 30.7617],
"郑州": [113.4668, 34.6234],
"宁波": [121.640618, 29.86206],
"合肥": [117.29, 32.0581],
"重庆": [108.384366, 30.439702],
"广州": [113.12244, 23.009505],
"大连": [123.1238, 42.1216],
"青岛": [117.1582, 36.8701],
'北京': [116.4551, 40.2539],
'义乌': [120.067209, 29.346921],
'东莞': [113.764742, 23.02039],
"长沙": [113.0823, 28.2568],
"贵阳": [106.6992, 26.7682],
'珠海': [113.556111, 22.250876],
'威海': [122.109148, 37.516889],
"泉州": [118.58, 24.93],
"赤峰": [118.87, 42.28],
"厦门": [118.1, 24.46],
"福州": [119.3, 26.08],
"抚顺": [123.97, 41.97],
"汕头": [116.69, 23.39],
"宁波": [121.56, 29.86],
"海口": [110.35, 20.02],
"岳阳": [113.09, 29.37],
"武汉": [114.31, 30.52],
"义乌": [120.06, 29.32],
"唐山": [118.02, 39.63],
"石家庄": [114.48, 38.03],
"哈尔滨": [126.63, 45.75],
"兰州": [103.73, 36.03],
"贵阳": [106.71, 26.57],
"呼和浩特": [111.65, 40.82],
"南昌": [115.89, 28.68],
"佛山": [113.11, 23.05],
"汕头": [116.69, 23.39],
"烟台": [121.39, 37.52],
"威海": [122.1, 37.5],
};

//2013年数据
var d1 = {
"杭州": 10,
"苏州": 2,
'上海': 21,
"天津": 4,
'深圳': 7,
"郑州":7,
"成都":5,
"宁波":2,
"合肥": 1,
"重庆": 3,
"广州": 19,
"大连": 1,
"青岛": 2,
'北京': 16,
'义乌': 2,
'东莞': 1,
"长沙": 3,
"贵阳": 0,
'珠海': 0,
'威海': 0,
'南昌': 1,
'西安': 2,
'南京': 6,
'海口': 0,
'厦门': 3,
'沈阳': 3,
'无锡': 0,
'呼和浩特':0,
'长春':0,
'哈尔滨':1,
'武汉':5,
'南宁':1,
'昆明':1,
'兰州':0,
'唐山':0,
'石家庄':2,
'太原':1,
'赤峰':0,
'抚顺':0,
'珲春':0,
'绥芬河':0,
'徐州':0,
'南通':1,
'温州':2,
'绍兴':0,
'芜湖':0,
'福州':5,
'泉州':2,
'赣州':2,
'济南':3,
'烟台':0,
'洛阳':1,
'黄石':0,
'岳阳':0,
'汕头':0,
'佛山':0,
'泸州':0,
'海东':0,
'银川':0,
};

//2014年数据
var d2 = {
"杭州": 131,
"苏州": 51,
'上海': 114,
"天津": 58,
'深圳': 104,
"郑州":66,
"成都":35,
"宁波":59,
"合肥": 28,
"重庆": 68,
"广州": 120,
"大连": 24,
"青岛": 58,
'北京': 118,
'义乌': 36,
'东莞': 46,
"长沙": 34,
"贵阳": 8,
'珠海': 11,
'威海': 7,
'南昌': 24,
'西安': 35,
'南京': 42,
'海口': 6,
'厦门': 59,
'沈阳': 18,
'无锡': 21,
'呼和浩特':7,
'长春':13,
'哈尔滨':16,
'武汉':52,
'南宁':14,
'昆明':10,
'兰州':5,
'唐山':3,
'石家庄':24,
'太原':13,
'赤峰':0,
'抚顺':0,
'珲春':1,
'绥芬河':3,
'徐州':5,
'南通':12,
'温州':32,
'绍兴':11,
'芜湖':3,
'福州':72,
'泉州':47,
'赣州':3,
'济南':40,
'烟台':14,
'洛阳':7,
'黄石':1,
'岳阳':1,
'汕头':8,
'佛山':31,
'泸州':0,
'海东':0,
'银川':37,
};
//2015年数据
var d3 = {
"杭州": 311,
"苏州": 174,
'上海': 308,
"天津": 192,
'深圳': 304,
"郑州":194,
"成都":179,
"宁波":191,
"合肥": 130,
"重庆": 189,
"广州": 345,
"大连": 139,
"青岛": 182,
'北京': 336,
'义乌': 136,
'东莞': 159,
"长沙": 151,
"贵阳": 81,
'珠海': 96,
'威海': 80,
'南昌': 112,
'西安': 163,
'南京': 155,
'海口': 59,
'厦门': 170,
'沈阳': 102,
'无锡': 110,
'呼和浩特':54,
'长春':76,
'哈尔滨':113,
'武汉':187,
'南宁':104,
'昆明':100,
'兰州':48,
'唐山':48,
'石家庄':110,
'太原':80,
'赤峰':8,
'抚顺':7,
'珲春':19,
'绥芬河':16,
'徐州':63,
'南通':78,
'温州':111,
'绍兴':88,
'芜湖':29,
'福州':189,
'泉州':148,
'赣州':31,
'济南':161,
'烟台':85,
'洛阳':49,
'黄石':10,
'岳阳':15,
'汕头':74,
'佛山':153,
'泸州':10,
'海东':0,
'银川':34,
};
//2016年数据
var d4 = {
"杭州": 296,
"苏州": 184,
'上海': 332,
"天津": 136,
'深圳': 327,
"郑州":208,
"成都":235,
"宁波":200,
"合肥": 142,
"重庆": 191,
"广州": 327,
"大连": 154,
"青岛": 168,
'北京': 358,
'义乌': 133,
'东莞': 166,
"长沙": 159,
"贵阳": 81,
'珠海': 86,
'威海': 58,
'南昌': 118,
'西安': 180,
'南京': 170,
'海口': 78,
'厦门': 160,
'沈阳': 114,
'无锡': 119,
'呼和浩特':80,
'长春':92,
'哈尔滨':123,
'武汉':190,
'南宁':122,
'昆明':128,
'兰州':69,
'唐山':60,
'石家庄':118,
'太原':93,
'赤峰':16,
'抚顺':9,
'珲春':21,
'绥芬河':16,
'徐州':78,
'南通':93,
'温州':122,
'绍兴':95,
'芜湖':36,
'福州':187,
'泉州':148,
'赣州':47,
'济南':161,
'烟台':87,
'洛阳':55,
'黄石':11,
'岳阳':26,
'汕头':78,
'佛山':150,
'泸州':10,
'海东':0,
'银川':45,
};
//2017年数据
var d5 = {
"杭州": 334,
"苏州": 185,
'上海': 313,
"天津": 181,
'深圳': 379,
"郑州":231,
"成都":215,
"宁波":183,
"合肥": 145,
"重庆": 205,
"广州": 344,
"大连": 166,
"青岛": 170,
'北京': 351,
'义乌': 150,
'东莞': 176,
"长沙": 174,
"贵阳": 89,
'珠海': 91,
'威海': 61,
'南昌': 135,
'西安': 181,
'南京': 183,
'海口': 80,
'厦门': 167,
'沈阳': 130,
'无锡': 121,
'呼和浩特':89,
'长春':122,
'哈尔滨':139,
'武汉':219,
'南宁':138,
'昆明':125,
'兰州':71,
'唐山':71,
'石家庄':136,
'太原':127,
'赤峰':47,
'抚顺':9,
'珲春':30,
'绥芬河':21,
'徐州':88,
'南通':90,
'温州':138,
'绍兴':92,
'芜湖':26,
'福州':283,
'泉州':158,
'赣州':30,
'济南':171,
'烟台':81,
'洛阳':86,
'黄石':15,
'岳阳':41,
'汕头':96,
'佛山':165,
'泸州':49,
'海东':0,
'银川':70,

};
//2018年数据
var d6 = {
"杭州": 365,
"苏州": 213,
'上海': 352,
"天津": 187,
'深圳': 430,
"郑州":251,
"成都":226,
"宁波":196,
"合肥": 165,
"重庆": 234,
"广州": 364,
"大连": 151,
"青岛": 193,
'北京': 358,
'义乌': 162,
'东莞': 197,
"长沙": 212,
"贵阳": 94,
'珠海': 108,
'威海': 70,
'南昌': 167,
'西安': 188,
'南京': 203,
'海口': 102,
'厦门': 187,
'沈阳': 148,
'无锡': 133,
'呼和浩特':88,
'长春':121,
'哈尔滨':143,
'武汉':224,
'南宁':153,
'昆明':144,
'兰州':77,
'唐山':98,
'石家庄':150,
'太原':147,
'赤峰':16,
'抚顺':16,
'珲春':31,
'绥芬河':18,
'徐州':98,
'南通':106,
'温州':153,
'绍兴':112,
'芜湖':36,
'福州':196,
'泉州':178,
'赣州':71,
'济南':165,
'烟台':88,
'洛阳':78,
'黄石':14,
'岳阳':39,
'汕头':115,
'佛山':185,
'泸州':12,
'海东':1,
'银川':49,
};
//2019年数据
var d7 = {
"杭州": 352,
"苏州": 204,
'上海': 331,
"天津": 168,
'深圳': 421,
"郑州":271,
"成都":231,
"宁波":199,
"合肥": 172,
"重庆": 141,
"广州": 365,
"大连": 132,
"青岛": 205,
'北京': 239,
'义乌': 147,
'东莞': 193,
"长沙": 213,
"贵阳": 105,
'珠海': 99,
'威海': 76,
'南昌': 163,
'西安': 184,
'南京': 193,
'海口': 109,
'厦门': 170,
'沈阳': 147,
'无锡': 138,
'呼和浩特':81,
'长春':126,
'哈尔滨':141,
'武汉':241,
'南宁':154,
'昆明':145,
'兰州':89,
'唐山':103,
'石家庄':146,
'太原':137,
'赤峰':33,
'抚顺':12,
'珲春':22,
'绥芬河':23,
'徐州':101,
'南通':100,
'温州':134,
'绍兴':102,
'芜湖':52,
'福州':190,
'泉州':156,
'赣州':80,
'济南':161,
'烟台':81,
'洛阳':100,
'黄石':24,
'岳阳':48,
'汕头':118,
'佛山':164,
'泸州':14,
'海东':0,
'银川':61,
};

var colors = [
["#1DE9B6", "#F46E36", "#04B9FF", "#5DBD32", "#FFC809", "#FB95D5", "#BDA29A", "#6E7074", "#546570", "#C4CCD3"],
["#37A2DA", "#67E0E3", "#32C5E9", "#9FE6B8", "#FFDB5C", "#FF9F7F", "#FB7293", "#E062AE", "#E690D1", "#E7BCF3", "#9D96F5", "#8378EA", "#8378EA"],
["#DD6B66", "#759AA0", "#E69D87", "#8DC1A9", "#EA7E53", "#EEDD78", "#73A373", "#73B9BC", "#7289AB", "#91CA8C", "#F49F42"],
];
var colorIndex = 0;
$(function() {
var year = ["2013", "2014", "2015", "2016", "2017", "2018","2019"];
var mapData = [
  [],
  [],
  [],
  [],
  [],
  [],
  []
];

/*柱子Y名称*/
var categoryData = [];
var barData = [];

for (var key in geoCoordMap) {
  mapData[0].push({
      "year": '2013',
      "name": key,
      "value": d1[key],
  });
  mapData[1].push({
      "year": '2014',
      "name": key,
      "value": d2[key],
  });
  mapData[2].push({
      "year": '2015',
      "name": key,
      "value": d3[key],
  });
  mapData[3].push({
      "year": '2016',
      "name": key,
      "value": d4[key],
  });
  mapData[4].push({
      "year": '2017',
      "name": key,
      "value": d5[key],
  });
  mapData[5].push({
      "year": '2018',
      "name": key,
      "value": d6[key],
  });
    mapData[6].push({
      "year": '2019',
      "name": key,
      "value": d7[key],
  });
}

for (var i = 0; i < mapData.length; i++) {
  mapData[i].sort(function sortNumber(a, b) {
      return a.value - b.value
  });
  barData.push([]);
  categoryData.push([]);
  for (var j = 0; j < mapData[i].length; j++) {
      barData[i].push(mapData[i][j].value);
      categoryData[i].push(mapData[i][j].name);
  }
}

$.getJSON('data2.json', function(geoJson) {

  echarts.registerMap('china', geoJson);
  var convertData = function(data) {
      var res = [];
      for (var i = 0; i < data.length; i++) {
          var geoCoord = geoCoordMap[data[i].name];
          if (geoCoord) {
              res.push({
                  name: data[i].name,
                  value: geoCoord.concat(data[i].value)
              });
          }
      }
      return res;
  };
  
  optionXyMap01 = {
      timeline: {
          data: year,
          axisType: 'category',
          autoPlay: true,
          playInterval: 3000,
          left: '10%',
          right: '10%',
          bottom: '3%',
          width: '80%',
          label: {
              normal: {
                  textStyle: {
                      color: '#ddd'
                  }
              },
              emphasis: {
                  textStyle: {
                      color: '#fff'
                  }
              }
          },
          symbolSize: 10,
          lineStyle: {
              color: '#555'
          },
          checkpointStyle: {
              borderColor: '#777',
              borderWidth: 2
          },
          controlStyle: {
              showNextBtn: true,
              showPrevBtn: true,
              normal: {
                  color: '#666',
                  borderColor: '#666'
              },
              emphasis: {
                  color: '#aaa',
                  borderColor: '#aaa'
              }
          },

      },
      baseOption: {
          animation: true,
          animationDuration: 1000,
          animationEasing: 'cubicInOut',
          animationDurationUpdate: 1000,
          animationEasingUpdate: 'cubicInOut',
          grid: {
              right: '1%',
              top: '15%',
              bottom: '10%',
              width: '20%'
          },
          tooltip: {
              trigger: 'axis', // hover触发器
              axisPointer: { // 坐标轴指示器，坐标轴触发有效
                  type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
                  shadowStyle: {
                      color: 'rgba(150,150,150,0.1)' //hover颜色
                  }
              }
          },
          geo: {
              show: true,
              map: 'china',
              roam: true,
              zoom: 1,
              center: [113.83531246, 34.0267395887],
              label: {
                  emphasis: {
                      show: false
                  }
              },
              itemStyle: {
                  normal: {
                      borderColor: 'rgba(147, 235, 248, 1)',
                      borderWidth: 1,
                      areaColor: {
                          type: 'radial',
                          x: 0.5,
                          y: 0.5,
                          r: 0.8,
                          colorStops: [{
                              offset: 0,
                              color: 'rgba(147, 235, 248, 0)' // 0% 处的颜色
                          }, {
                              offset: 1,
                              color: 'rgba(147, 235, 248, .2)' // 100% 处的颜色
                          }],
                          globalCoord: false // 缺省为 false
                      },
                      shadowColor: 'rgba(128, 217, 248, 1)',
                      // shadowColor: 'rgba(255, 255, 255, 1)',
                      shadowOffsetX: -2,
                      shadowOffsetY: 2,
                      shadowBlur: 10
                  },
                  emphasis: {
                      areaColor: '#389BB7',
                      borderWidth: 0
                  }
              }
          },
      },
      options: []

  };

  for (var n = 0; n < year.length; n++) {
      optionXyMap01.options.push({
          backgroundColor: '#013954',
          title:
              [{
                      text: '跨境电商百度指数',
                      left: '25%',
                      top: '7%',
                      textStyle: {
                          color: '#fff',
                          fontSize: 25
                      }
                  },
                  {
                      id: 'statistic',
                      text: year[n] + "数据统计情况",
                      left: '75%',
                      top: '8%',
                      textStyle: {
                          color: '#fff',
                          fontSize: 25
                      }
                  }
              ],
          xAxis: {
              type: 'value',
              scale: true,
              position: 'top',
              min: 0,
              boundaryGap: false,
              splitLine: {
                  show: false
              },
              axisLine: {
                  show: false
              },
              axisTick: {
                  show: false
              },
              axisLabel: {
                  margin: 2,
                  textStyle: {
                      color: '#aaa'
                  }
              },
          },
          yAxis: {
              type: 'category',
              //  name: 'TOP 20',
              nameGap: 16,
              axisLine: {
                  show: true,
                  lineStyle: {
                      color: '#ddd'
                  }
              },
              axisTick: {
                  show: false,
                  lineStyle: {
                      color: '#ddd'
                  }
              },
              axisLabel: {
                  interval: 0,
                  textStyle: {
                      color: '#ddd'
                  }
              },
              data: categoryData[n]
          },

          series: [
              //地图
              {
                  type: 'map',
                  map: 'china',
                  geoIndex: 0,
                  aspectScale: 0.75, //长宽比
                  showLegendSymbol: false, // 存在legend时显示
                  label: {
                      normal: {
                          show: false
                      },
                      emphasis: {
                          show: false,
                          textStyle: {
                              color: '#fff'
                          }
                      }
                  },
                  roam: true,
                  itemStyle: {
                      normal: {
                          areaColor: '#031525',
                          borderColor: '#FFFFFF',
                      },
                      emphasis: {
                          areaColor: '#2B91B7'
                      }
                  },
                  animation: false,
                  data: mapData
              },
              //地图中闪烁的点
              {
                  //  name: 'Top 5',
                  type: 'effectScatter',
                  coordinateSystem: 'geo',
                  data: convertData(mapData[n].sort(function(a, b) {
                      return b.value - a.value;
                  }).slice(0, 20)),
                  symbolSize: function(val) {
                      return val[2] / 10;
                  },
                  showEffectOn: 'render',
                  rippleEffect: {
                      brushType: 'stroke'
                  },
                  hoverAnimation: true,
                  label: {
                      normal: {
                          formatter: '{b}',
                          position: 'right',
                          show: true
                      }
                  },
                  itemStyle: {
                      normal: {
                          color: colors[colorIndex][n],
                          shadowBlur: 10,
                          shadowColor: colors[colorIndex][n]
                      }
                  },
                  zlevel: 1
              },
              //柱状图
              {
                  zlevel: 1.5,
                  type: 'bar',
                  symbol: 'none',
                  itemStyle: {
                      normal: {
                          color: colors[colorIndex][n]
                      }
                  },
                  data: barData[n]
              }
          ]
      })
  }
  myChart.setOption(optionXyMap01);
});
});


  //=============== end ===============//
  
  // 使用刚指定的配置项和数据显示图表。
  if (option && typeof option === 'object') {
  myChart.setOption(option);
  }
  window.addEventListener('resize', myChart.resize);

})();