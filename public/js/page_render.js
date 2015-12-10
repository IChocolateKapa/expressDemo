/**
 * Created by Echo on 2015/12/9.
 */

/*define(['jquery'], function(){

    var Render = {
        init: function (data) {
            var _this = this;

            _this.initDom();

            /!*
             * 初始化一次数据，保存好各自option就好
             * 不需要重新发送请求
             * *!/
            _this.callBackHandleData(data);


            _this.renderAllCharts();

        },
        initDom: function () {
            var _this = this;

            window.mainChart = _this.chartData.mainChart.dom = echarts.init(document.getElementById(_this.chartData.mainChart.id));
            window.subChart1 = _this.chartData.subChart_1.dom = echarts.init(document.getElementById(_this.chartData.subChart_1.id));
            window.subChart2 = _this.chartData.subChart_2.dom = echarts.init(document.getElementById(_this.chartData.subChart_2.id));

            _this.initDomOperation();
        },
        renderAllCharts: function () {
            var _this = this;
            _this.renderChartByType(_this.chartData.mainChart.type);
            _this.renderChartByType(_this.chartData.subChart_1.type);
            _this.renderChartByType(_this.chartData.subChart_2.type);
        },

        initDomOperation: function () {
            var _this = this;

            $("#subck1").click(function () {
                var curMainData = _this.chartData.mainChart.data;
                _this.chartData.mainChart.data = _this.chartData.subChart_1.data;
                _this.chartData.subChart_1.data = curMainData;
                _this.renderAllCharts();
            });


            $("#subck2").click(function () {
                var curMainData = _this.chartData.mainChart.data;
                _this.chartData.mainChart.data = _this.chartData.subChart_2.data;
                _this.chartData.subChart_2.data = curMainData;
                _this.renderAllCharts();
            })
        },
        /!**
         * 需要有一个维度对应渲染图表的类型对照配置表
         * 比如，
         * *!/


        chartData: {
            'mainChart': {
                'dom': '',
                'id': 'main',
                'type': 'primary',
                'data': ''
            },
            'subChart_1': {
                'dom': '',
                'id': 'side_1',
                'type': 'sub1',
                'data': ''
            },
            'subChart_2': {
                'dom': '',
                'id': 'side_2',
                'type': 'sub2',
                'data': ''
            }
        },



        renderChartByType: function (type, data) {
            var _this = this;
            switch (type) {
                case _this.chartData.mainChart.type:
                    window.mainChart.clear();
                    window.mainChart.setOption(_this.chartData.mainChart.data);

                //var ecConfig = echarts.config;
                //_this.chartData.mainChart.dom.on(ecConfig.EVENT.CLICK, ckck);

                case _this.chartData.subChart_1.type:
                    window.subChart1.clear();
                    window.subChart1.setOption(_this.chartData.subChart_1.data);

                case _this.chartData.subChart_2.type:
                    window.subChart2.clear();
                    window.subChart2.setOption(_this.chartData.subChart_2.data);

                default :
                    break;

            }


        },

        toggleRenderType: function (params) {
            console.log(params);
        },

        callBackHandleData: function (data) {

            var _this = this;

            _this.chartData.mainChart.data = {
                tooltip : {
                    trigger: 'axis'
                },
                legend: {
                    data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
                },
                toolbox: {
                    show : false
                },
                calculable : true,
                //backgroundColor: "rgba(0,0,0,.8)",
                xAxis : [
                    {
                        type : 'category',
                        boundaryGap : false,
                        data : ['周一','周二','周三','周四','周五','周六','周日']
                    }
                ],
                yAxis : [
                    {
                        type : 'value'
                    }
                ],
                series : [
                    {
                        name:'邮件营销',
                        type:'line',
                        stack: '总量',
                        itemStyle: {normal: {areaStyle: {type: 'default'}}},
                        data:[120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name:'联盟广告',
                        type:'line',
                        stack: '总量',
                        itemStyle: {normal: {areaStyle: {type: 'default'}}},
                        data:[220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name:'视频广告',
                        type:'line',
                        stack: '总量',
                        itemStyle: {normal: {areaStyle: {type: 'default'}}},
                        data:[150, 232, 201, 154, 190, 330, 410]
                    },
                    {
                        name:'直接访问',
                        type:'line',
                        stack: '总量',
                        itemStyle: {normal: {areaStyle: {type: 'default'}}},
                        data:[320, 332, 301, 334, 390, 330, 320]
                    },
                    {
                        name:'搜索引擎',
                        type:'line',
                        stack: '总量',
                        itemStyle: {normal: {areaStyle: {type: 'default'}}},
                        data:[820, 932, 901, 934, 1290, 1330, 1320]
                    }
                ]
            };

            //var ecConfig = echarts.config;
            //_this.chartData.mainChart.dom.on(ecConfig.EVENT.CLICK, ckck);


            _this.chartData.subChart_1.data = {
                title: {
                    text: "对数轴示例",
                    x: "center"
                },
                tooltip: {
                    trigger: "item",
                    formatter: "{a} <br/>{b} : {c}"
                },
                legend: {
                    x: 'left',
                    data: ["2的指数", "3的指数"]
                },
                xAxis: [
                    {
                        type: "category",
                        name: "x",
                        splitLine: {show: false},
                        data: ["一", "二", "三", "四", "五", "六", "七", "八", "九"]
                    }
                ],
                yAxis: [
                    {
                        type: "log",
                        name: "y"
                    }
                ],
                toolbox: {
                    show: true,
                    feature: {
                        mark: {
                            show: true
                        },
                        dataView: {
                            show: true,
                            readOnly: true
                        },
                        restore: {
                            show: true
                        },
                        saveAsImage: {
                            show: true
                        }
                    }
                },
                calculable: true,
                series: [
                    {
                        name: "3的指数",
                        type: "line",
                        data: [1, 3, 9, 27, 81, 247, 741, 2223, 6669]

                    },
                    {
                        name: "2的指数",
                        type: "line",
                        data: [1, 2, 4, 8, 16, 32, 64, 128, 256]

                    }
                ]
            };


            _this.chartData.subChart_2.data = {
                title : {
                    text: '某地区蒸发量和降水量',
                    subtext: '纯属虚构'
                },
                tooltip : {
                    trigger: 'axis'
                },
                legend: {
                    data:['蒸发量','降水量']
                },
                toolbox: {
                    show : true,
                    feature : {
                        mark : {show: true},
                        dataView : {show: true, readOnly: false},
                        magicType : {show: true, type: ['line', 'bar']},
                        restore : {show: true},
                        saveAsImage : {show: true}
                    }
                },
                calculable : true,
                xAxis : [
                    {
                        type : 'category',
                        data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
                    }
                ],
                yAxis : [
                    {
                        type : 'value'
                    }
                ],
                series : [
                    {
                        name:'蒸发量',
                        type:'bar',
                        data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
                        markPoint : {
                            data : [
                                {type : 'max', name: '最大值'},
                                {type : 'min', name: '最小值'}
                            ]
                        },
                        markLine : {
                            data : [
                                {type : 'average', name: '平均值'}
                            ]
                        }
                    },
                    {
                        name:'降水量',
                        type:'bar',
                        data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
                        markPoint : {
                            data : [
                                {name : '年最高', value : 182.2, xAxis: 7, yAxis: 183, symbolSize:18},
                                {name : '年最低', value : 2.3, xAxis: 11, yAxis: 3}
                            ]
                        },
                        markLine : {
                            data : [
                                {type : 'average', name : '平均值'}
                            ]
                        }
                    }
                ]
            };

        }
    };

    return Render;

});*/


$(function () {

    var Render = {
        init: function (data) {
            var _this = this;

            _this.initDom();

            /*
            * 初始化一次数据，保存好各自option就好
            * 不需要重新发送请求
            * */
            _this.callBackHandleData(data);


            _this.renderAllCharts();

        },
        initDom: function () {
            var _this = this;

            window.mainChart = _this.chartData.mainChart.dom = echarts.init(document.getElementById(_this.chartData.mainChart.id));
            window.subChart1 = _this.chartData.subChart_1.dom = echarts.init(document.getElementById(_this.chartData.subChart_1.id));
            window.subChart2 = _this.chartData.subChart_2.dom = echarts.init(document.getElementById(_this.chartData.subChart_2.id));

            _this.initDomOperation();
        },
        renderAllCharts: function () {
            var _this = this;
            _this.renderChartByType(_this.chartData.mainChart.type);
            _this.renderChartByType(_this.chartData.subChart_1.type);
            _this.renderChartByType(_this.chartData.subChart_2.type);
        },

        initDomOperation: function () {
            var _this = this;

            $("#subck1").click(function () {
                var curMainData = _this.chartData.mainChart.data;
                _this.chartData.mainChart.data = _this.chartData.subChart_1.data;
                _this.chartData.subChart_1.data = curMainData;
                _this.renderAllCharts();
            });


            $("#subck2").click(function () {
                var curMainData = _this.chartData.mainChart.data;
                _this.chartData.mainChart.data = _this.chartData.subChart_2.data;
                _this.chartData.subChart_2.data = curMainData;
                _this.renderAllCharts();
            })
        },
        /**
         * 需要有一个维度对应渲染图表的类型对照配置表
         * 比如，
         * */


        chartData: {
            'mainChart': {
                'dom': '',
                'id': 'main',
                'type': 'primary',
                'data': ''
            },
            'subChart_1': {
                'dom': '',
                'id': 'side_1',
                'type': 'sub1',
                'data': ''
            },
            'subChart_2': {
                'dom': '',
                'id': 'side_2',
                'type': 'sub2',
                'data': ''
            }
        },



        renderChartByType: function (type, data) {
            var _this = this;
            switch (type) {
                case _this.chartData.mainChart.type:
                    window.mainChart.clear();
                    window.mainChart.setOption(_this.chartData.mainChart.data);

                    //var ecConfig = echarts.config;
                    //_this.chartData.mainChart.dom.on(ecConfig.EVENT.CLICK, ckck);

                case _this.chartData.subChart_1.type:
                    window.subChart1.clear();
                    window.subChart1.setOption(_this.chartData.subChart_1.data);

                case _this.chartData.subChart_2.type:
                    window.subChart2.clear();
                    window.subChart2.setOption(_this.chartData.subChart_2.data);

                default :
                    break;

            }


        },

        toggleRenderType: function (params) {
            console.log(params);
        },

        callBackHandleData: function (data) {

            var _this = this;

            _this.chartData.mainChart.data = {
                tooltip : {
                    trigger: 'axis'
                },
                legend: {
                    data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
                },
                toolbox: {
                    show : false
                },
                calculable : true,
                //backgroundColor: "rgba(0,0,0,.8)",
                xAxis : [
                    {
                        type : 'category',
                        boundaryGap : false,
                        data : ['周一','周二','周三','周四','周五','周六','周日']
                    }
                ],
                yAxis : [
                    {
                        type : 'value'
                    }
                ],
                series : [
                    {
                        name:'邮件营销',
                        type:'line',
                        stack: '总量',
                        itemStyle: {normal: {areaStyle: {type: 'default'}}},
                        data:[120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name:'联盟广告',
                        type:'line',
                        stack: '总量',
                        itemStyle: {normal: {areaStyle: {type: 'default'}}},
                        data:[220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name:'视频广告',
                        type:'line',
                        stack: '总量',
                        itemStyle: {normal: {areaStyle: {type: 'default'}}},
                        data:[150, 232, 201, 154, 190, 330, 410]
                    },
                    {
                        name:'直接访问',
                        type:'line',
                        stack: '总量',
                        itemStyle: {normal: {areaStyle: {type: 'default'}}},
                        data:[320, 332, 301, 334, 390, 330, 320]
                    },
                    {
                        name:'搜索引擎',
                        type:'line',
                        stack: '总量',
                        itemStyle: {normal: {areaStyle: {type: 'default'}}},
                        data:[820, 932, 901, 934, 1290, 1330, 1320]
                    }
                ]
            };

            //var ecConfig = echarts.config;
            //_this.chartData.mainChart.dom.on(ecConfig.EVENT.CLICK, ckck);


            _this.chartData.subChart_1.data = {
                title: {
                    text: "对数轴示例",
                    x: "center"
                },
                tooltip: {
                    trigger: "item",
                    formatter: "{a} <br/>{b} : {c}"
                },
                legend: {
                    x: 'left',
                    data: ["2的指数", "3的指数"]
                },
                xAxis: [
                    {
                        type: "category",
                        name: "x",
                        splitLine: {show: false},
                        data: ["一", "二", "三", "四", "五", "六", "七", "八", "九"]
                    }
                ],
                yAxis: [
                    {
                        type: "log",
                        name: "y"
                    }
                ],
                toolbox: {
                    show: true,
                    feature: {
                        mark: {
                            show: true
                        },
                        dataView: {
                            show: true,
                            readOnly: true
                        },
                        restore: {
                            show: true
                        },
                        saveAsImage: {
                            show: true
                        }
                    }
                },
                calculable: true,
                series: [
                    {
                        name: "3的指数",
                        type: "line",
                        data: [1, 3, 9, 27, 81, 247, 741, 2223, 6669]

                    },
                    {
                        name: "2的指数",
                        type: "line",
                        data: [1, 2, 4, 8, 16, 32, 64, 128, 256]

                    }
                ]
            };


            _this.chartData.subChart_2.data = {
                title : {
                    text: '某地区蒸发量和降水量',
                    subtext: '纯属虚构'
                },
                tooltip : {
                    trigger: 'axis'
                },
                legend: {
                    data:['蒸发量','降水量']
                },
                toolbox: {
                    show : true,
                    feature : {
                        mark : {show: true},
                        dataView : {show: true, readOnly: false},
                        magicType : {show: true, type: ['line', 'bar']},
                        restore : {show: true},
                        saveAsImage : {show: true}
                    }
                },
                calculable : true,
                xAxis : [
                    {
                        type : 'category',
                        data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
                    }
                ],
                yAxis : [
                    {
                        type : 'value'
                    }
                ],
                series : [
                    {
                        name:'蒸发量',
                        type:'bar',
                        data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
                        markPoint : {
                            data : [
                                {type : 'max', name: '最大值'},
                                {type : 'min', name: '最小值'}
                            ]
                        },
                        markLine : {
                            data : [
                                {type : 'average', name: '平均值'}
                            ]
                        }
                    },
                    {
                        name:'降水量',
                        type:'bar',
                        data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
                        markPoint : {
                            data : [
                                {name : '年最高', value : 182.2, xAxis: 7, yAxis: 183, symbolSize:18},
                                {name : '年最低', value : 2.3, xAxis: 11, yAxis: 3}
                            ]
                        },
                        markLine : {
                            data : [
                                {type : 'average', name : '平均值'}
                            ]
                        }
                    }
                ]
            };

        }
    };

    var data = [];

    Render.init(data);



});
