(function () {
    var dom = document.getElementById('mybar');
    var myChart = echarts.init(dom, null, {
        renderer: 'canvas',
        useDirtyRect: false
    });
    var app = {};

    var option;

    option = {
        title: {
            subtext: '数据来源：安徽省文化和旅游厅',
            sublink: "https://ct.ah.gov.cn/",
            textStyle: { fontSize: 10 }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
         legend: {},
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  yAxis: {
    type: 'value',
    boundaryGap: [0, 0.01]
  },
  xAxis: {
     type: 'category',
            data: ['传统舞蹈', '传统戏剧', '曲艺', '传统技艺', '传统美术', '传统医药', '民俗', '民间文学', '传统音乐', '传统体育、游艺与杂技']
        },
        nameTextStyle: {
            fontSize: 4
          },
          axisLabel: {  
            interval:0,  
            rotate:-20  // 表示倾斜的角度
          }  ,
        series: [
            {
                name: '国家级',
                type: 'bar',
                data: [10, 25, 2, 25, 9, 3, 7, 5, 9, 4]
            },
            {
                name: '省级',
                type: 'bar',
                data: [60, 40, 32, 201, 81, 53, 33, 31, 51, 27]
            }
        ]
    };

    if (option && typeof option === 'object') {
        myChart.setOption(option);
    }

    window.addEventListener('resize', myChart.resize);
})();
(function () {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('fymap'));

    myChart.showLoading();
    $.get('https://geo.datav.aliyun.com/areas_v3/bound/340000_full.json', function (geoJson) {
        myChart.hideLoading();
        echarts.registerMap('AH', geoJson);
        myChart.setOption(
            (option = {
                title: {

                    subtext: '数据来源：安徽省文化和旅游厅',
                    sublink:
                        'https://ct.ah.gov.cn/'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{b}<br/>{c} (个)'
                },
                toolbox: {
                    show: true,
                    orient: 'vertical',
                    left: 'right',
                    top: 'center',
                    feature: {
                        dataView: { readOnly: false },
                        restore: {},
                        saveAsImage: {}
                    }
                },
                visualMap: {
                    min: 20,
                    max: 130,
                    text: ['High', 'Low'],
                    realtime: false,
                    calculable: true,
                    inRange: {
                        color: ['lightblue', 'orange', 'red']
                    }
                },
                series: [
                    {
                        name: '安徽省各地市非遗数量',
                        type: 'map',
                        map: 'AH',
                        label: {
                            show: true
                        },
                        data: [
                            { name: '合肥市', value: 67 },
                            { name: '芜湖市', value: 35 },
                            { name: '马鞍山市', value: 21 },
                            { name: '六安市', value: 42 },
                            { name: '安庆市', value: 56 },
                            { name: '蚌埠市', value: 24 },
                            { name: '亳州市', value: 53 },
                            { name: '池州市', value: 32 },
                            { name: '滁州市', value: 31 },
                            { name: '阜阳市', value: 49 },
                            { name: '淮北市', value: 18 },
                            { name: '淮南市', value: 22 },
                            { name: '黄山市', value: 126 },
                            { name: '宿州市', value: 45 },
                            { name: '铜陵市', value: 16 },
                            { name: '宣城市', value: 81 },
                        ],
                        // 自定义名称映射

                    }
                ]
            })
        );
    });
    window.addEventListener('resize', myChart.resize);
})();
(function () {
    var dom = document.getElementById('container');
    var myChart = echarts.init(dom, null, {
        renderer: 'canvas',
        useDirtyRect: false
    });
    var app = {};

    var option;

    option = {
        title: {
            text: ''
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
            data: ['安徽非遗', '四川非遗']
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
                data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [

            {
                name: '安徽非遗',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [131, 64, 20, 17, 14, 20, 11, 11, 11, 10, 8, 9]
            },
            {
                name: '四川非遗',
                type: 'line',
                stack: 'Total',
                label: {
                    show: true,
                    position: 'top'
                },
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [3168000, 1918000, 821000, 680000, 580000, 578000, 508000, 480000, 406000, 347000, 313000, 301000]
            }
        ]
    };
    if (option && typeof option === 'object') {
        myChart.setOption(option);
    }

    window.addEventListener('resize', myChart.resize);
})();
(function () {
    var dom = document.getElementById('fans');
    var myChart = echarts.init(dom, null, {
        renderer: 'canvas',
        useDirtyRect: false
    });
    var app = {};

    var option;

    option = {

        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {},
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
            data: ['合肥文旅', '芜湖文旅', '马鞍山文旅', '六安文旅', '安庆文旅', '蚌埠文旅',
                '亳州文旅', '池州文旅', '滁州文旅', '阜阳文旅',
                '淮北文旅', '淮南文旅', '黄山文旅', '宿州文旅',
                '铜陵文旅', '宣城文旅']
        },
        series: [
            {
                name: '',
                type: 'bar',
                data: [53000, 100000, 136000, 78000, 24000, 95000, 69000, 35000, 20000, 140000, 19000, 23000, 186000, 28000, 16000, 95000]
            },

        ]
    };

    if (option && typeof option === 'object') {
        myChart.setOption(option);
    }

    window.addEventListener('resize', myChart.resize);
})();
(function () {
    var dom = document.getElementById('works');
    var myChart = echarts.init(dom, null, {
        renderer: 'canvas',
        useDirtyRect: false
    });
    var app = {};

    var option;

    option = {
        title: {
            subtext: '数据来源：安徽省各地市文旅官方账号平台',
            top: '5%',
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                // Use axis to trigger tooltip
                type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
            }
        },
        legend: {},
        grid: {
            left: '3%',
            top: '10%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value'
        },
        yAxis: {
            type: 'category',
            data: ['合肥文旅', '芜湖文旅', '马鞍山文旅', '六安文旅', '安庆文旅', '蚌埠文旅',
                '亳州文旅', '池州文旅', '滁州文旅', '阜阳文旅',
                '淮北文旅', '淮南文旅', '黄山文旅', '宿州文旅',
                '铜陵文旅', '宣城文旅']
        },
        series: [
            {
                name: '非遗作品数',
                type: 'bar',
                //   stack: 'total',
                label: {
                    // show: true
                },
                emphasis: {
                    focus: 'series'
                },
                data: [74, 26, 10, 9, 5, 11, 25, 13, 8, 10, 13, 8, 6, 56, 11, 35]
            },
            {
                name: '作品总数',
                type: 'bar',
                //   stack: 'total',
                label: {
                    // show: true
                },
                emphasis: {
                    focus: 'series'
                },
                data: [638, 478, 205, 347, 156, 228, 252, 430, 234, 275, 276, 263, 457, 358, 253, 159]
            },
            {
                name: '非遗作品点赞量（千）',
                type: 'bar',
                //   stack: 'total',
                label: {
                    // show: true
                },
                emphasis: {
                    focus: 'series'
                },
                data: [2052.4, 2458.6, 704.3, 221.3, 63.2, 100.6, 1363.0, 272.2, 336.3, 1220.6, 397.8, 106.3, 229.8, 275.2, 524.8, 8610.2]
            },
            {
                name: '非遗作品转发量（千）',
                type: 'bar',
                //   stack: 'total',
                label: {
                    // show: true
                },
                emphasis: {
                    focus: 'series'
                },
                data: [1263.2, 76.7, 180.5, 36.2, 12.9, 8.9, 203.3, 69.7, 65.5, 147.4, 55.4, 18.8, 12.7, 97.5, 281.5, 482.6]
            },

        ]
    };

    if (option && typeof option === 'object') {
        myChart.setOption(option);
    }

    window.addEventListener('resize', myChart.resize);
})();
(function () {
    var dom = document.getElementById('inherit');
    var myChart = echarts.init(dom, null, {
        renderer: 'canvas',
        useDirtyRect: false
    });
    var app = {};

    var option;

    option = {
        tooltip: {
            trigger: 'item'
        },
        legend: {
            top: '5%',
            left: 'center'
        },
        series: [
            {
                name: '年龄',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    borderRadius: 10,
                    borderColor: '#fff',
                    borderWidth: 2
                },
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: 40,
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    { value: 1, name: '40-50' },
                    { value: 22, name: '50-60' },
                    { value: 30, name: '60-70' },
                    { value: 27, name: '70-80' },
                    { value: 24, name: '80-90' },
                    { value: 15, name: '90及以上' }
                ]
            }
        ]
    };

    if (option && typeof option === 'object') {
        myChart.setOption(option);
    }

    window.addEventListener('resize', myChart.resize);
})();
(function () {
    var dom = document.getElementById('inherit2');
    var myChart = echarts.init(dom, null, {
        renderer: 'canvas',
        useDirtyRect: false
    });
    var app = {};

    var option;

    option = {

        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: 'left'
        },
        series: [
            {
                name: '国家级非遗传承人',
                type: 'pie',
                radius: '50%',
                data: [
                    { value: 93, name: '男性', itemStyle: { color: 'skyblue' } },
                    { value: 32, name: '女性', itemStyle: { color: 'pink' } },

                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };

    if (option && typeof option === 'object') {
        myChart.setOption(option);
    }

    window.addEventListener('resize', myChart.resize);
})();
(function () {
    var dom = document.getElementById('research');
    var myChart = echarts.init(dom, null, {
        renderer: 'canvas',
        useDirtyRect: false
    });
    var app = {};

    var option;

    option = {

        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {},
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
            data: ['合肥', '芜湖', '马鞍山', '六安', '安庆', '蚌埠',
                '亳州', '池州', '滁州', '阜阳',
                '淮北', '淮南', '黄山', '宿州', '铜陵', '宣城']
        },
        series: [
            {
                name: '国家级非遗数量',
                type: 'bar',
                data: [5, 3, 2, 5, 10, 3, 6, 4, 2, 10, 1, 5, 24, 9, 0, 7]
            },
            {
                name: '立项项目数量',
                type: 'bar',
                data: [1, 0, 0, 1, 2, 2, 0, 2, 1, 2, 1, 0, 5, 0, 0, 3]
            }
        ]
    };

    if (option && typeof option === 'object') {
        myChart.setOption(option);
    }

    window.addEventListener('resize', myChart.resize);
})();
(function () {
    var dom = document.getElementById('govcapital');
    var myChart = echarts.init(dom, null, {
        renderer: 'canvas',
        useDirtyRect: false
    });
    var app = {};

    var option;

    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        toolbox: {
            feature: {
                dataView: { show: true, readOnly: false },
                magicType: { show: true, type: ['line', 'bar'] },
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },
        legend: {
            data: ['重点项目', '联合国教科文组织人类非遗产名录', '传承人记录', '传承人研培班', '国家级代表性传承人补助', '国家非物质文化遗产保护资金']
        },
        textStyle: { fontSize: 8 },
        xAxis: [
            {
                type: 'category',
                data: ['2022年', '2023年', '2024年'],
                axisPointer: {
                    type: 'shadow'
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '拨付金额',
                min: 0,
                max: 2000,
                interval: 400,
                axisLabel: {
                    formatter: '{value} 万'
                }
            },
            {
                type: 'value',
                name: '保护资金额',
                min: 0,
                max: 5,
                interval: 1,
                axisLabel: {
                    formatter: '{value} 千万'
                }
            }
        ],
        series: [
            {
                name: '重点项目',
                type: 'bar',
                tooltip: {
                    valueFormatter: function (value) {
                        return value + ' 万';
                    }
                },
                data: [
                    1720, 1365, 1435
                ]
            },
            {
                name: '联合国教科文组织人类非遗产名录',
                type: 'bar',
                tooltip: {
                    valueFormatter: function (value) {
                        return value + ' 万';
                    }
                },
                data: [
                    17, 70, 40
                ]
            },
            {
                name: '传承人记录',
                type: 'bar',
                tooltip: {
                    valueFormatter: function (value) {
                        return value + ' 万';
                    }
                },
                data: [
                    400, 320, 280
                ]
            },
            {
                name: '传承人研培班',
                type: 'bar',
                tooltip: {
                    valueFormatter: function (value) {
                        return value + ' 万';
                    }
                },
                data: [
                    40, 90, 120
                ]
            },
            {
                name: '国家级代表性传承人补助',
                type: 'bar',
                tooltip: {
                    valueFormatter: function (value) {
                        return value + ' 万';
                    }
                },
                data: [
                    206, 204, 204
                ]
            },
            {
                name: '徽州文化生态保护区建设',
                type: 'bar',
                tooltip: {
                    valueFormatter: function (value) {
                        return value + ' 万';
                    }
                },
                data: [
                    868, 987, 636
                ]
            },
            {
                name: '国家非物质文化遗产保护资金',
                type: 'line',
                yAxisIndex: 1,
                tooltip: {
                    valueFormatter: function (value) {
                        return value + ' 千万';
                    }
                },
                data: [3.251, 3.036, 2.715]
            },
        ]
    };

    if (option && typeof option === 'object') {
        myChart.setOption(option);
    }

    window.addEventListener('resize', myChart.resize);
})();
(function(){
    var dom = document.getElementById('inheritbase');
    var myChart = echarts.init(dom, null, {
      renderer: 'canvas',
      useDirtyRect: false
    });
    var app = {};
    
    var option;

    option = {
        color: ["#3398DB"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        grid: {},
        xAxis: [{
          type: "category",
          data: ['安庆市', '蚌埠市', '亳州市', '池州市', '滁州市', '阜阳市', '合肥市','淮北市', '淮南市', '黄山市', '六安市', '马鞍山市', '宿州市', '铜陵市','芜湖市', '宣城市', '省属单位'],
          nameTextStyle: {
            fontSize: 1
          },
          nameGap: 13,
          axisTick: {
            interval: 0
          }
        }],
        yAxis: [{
          type: "value"
        }],
        series: [{
          name: "个数",
          type: "bar",
          barWidth: "60%",
          data: [10, 4, 3, 6, 6, 6, 7,2, 2, 20, 5, 3, 2,3,4,9,7]
        }]
      };

    if (option && typeof option === 'object') {
      myChart.setOption(option);
    }

    window.addEventListener('resize', myChart.resize);
})();