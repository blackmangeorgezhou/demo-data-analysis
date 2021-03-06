import echarts from 'echarts'
import {Convertor} from "@/utils"
export default function initEcharts(EchartsDataObj) {
    console.log(EchartsDataObj,"EchartsDataObj");
    let LegendData=[]
    EchartsDataObj.StudentStructure.forEach(item => {
        LegendData.push(item.ManageDept)
    });
    /*区域收入*/
    var radar = echarts.init(document.getElementById('radar'));
    var radarOption = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            textStyle: { color: '#fff' }

        },
        color: ['#27c2c1', '#9ccb63', '#fcd85a', '#0084c8', '#d8514b'],
        textStyle: { color: "#fff" },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'value',
                name:"万元",
                nameTextStyle: {
                    color: '#fff'
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#23303f'
                    }
                },
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: '#115372'
                    }
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: "#fff"
                    },
                    alignWithLabel: true,
                    interval: 0,
                    formatter: function (value) {
                        if(value != 0) return value/10000 + '万';
                    },
                },
            },
        ],
        yAxis: {
            type: 'category',
            data: Convertor.getXEchartsData(EchartsDataObj.AreaIncomeReg),
            inverse:true
        },
        axisLabel: {
            textStyle: {
                color: "#fff"
            },
            lineStyle: {
                color: '#519cff'
            },
            alignWithLabel: true,
            interval: 0,
        },
        series: [
            {
                name: LegendData[0],
                type: 'bar',
                stack: '总量',
                data: Convertor.getYEchartsData(EchartsDataObj.AreaIncomeReg,0)
            },
            {
                name: LegendData[1],
                type: 'bar',
                stack: '总量',
                data: Convertor.getYEchartsData(EchartsDataObj.AreaIncomeReg,1)
            },
            {
                name: LegendData[2],
                type: 'bar',
                stack: '总量',
                data: Convertor.getYEchartsData(EchartsDataObj.AreaIncomeReg,2)
            },
            {
                name: LegendData[3],
                type: 'bar',
                stack: '总量',
                data: Convertor.getYEchartsData(EchartsDataObj.AreaIncomeReg,3)
            },
            {
                name: LegendData[4],
                type: 'bar',
                stack: '总量',
                data:Convertor.getYEchartsData(EchartsDataObj.AreaIncomeReg,4)
            },
        ]
    };
    radar.setOption(radarOption);

    /* 报名金额(财月)*/
    var graduateyear = echarts.init(document.getElementById('graduateyear'));
    var graduateyearOption = {
        title: {
            text: "",
            x: 'center',
            y: 'top',
            textStyle:
            {
                color: '#fff',
                fontSize: 13
            }
        },
        tooltip: {
            trigger: 'axis'
        },
        grid: {
            left: '3%',
            right: '8%',
            bottom: '5%',
            top: "13%",
            containLabel: true
        },
        color: ['#27c2c1', '#9ccb63', '#fcd85a', '#0084c8', '#d8514b'],
        legend: {
            show: true,
            right: '15%',
            y: "0",
            textStyle: {
                color: "#fff",
                fontSize: '13'
            },
        },
        toolbox: {
            show: false,
            feature: {
                mark: { show: true },
                dataView: { show: true, readOnly: false },
                magicType: { show: true, type: ['line', 'bar', 'stack', 'tiled'] },
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },
        calculable: true,
        xAxis: [
            {
                type: 'category',
                name:"月",
                boundaryGap: false,
                data: Convertor.getXEchartsData(EchartsDataObj.IncomeReg),
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#fff'
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: "#fff"
                    },
                    alignWithLabel: true,
                    interval: 0,
                    rotate: '15'
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#2d3b53'
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: "#fff"
                    },
                    formatter: function (value) {
                        if(value != 0) return value/10000 + '万';
                    },
                },
            }
        ],
        series: [
            {
                name: LegendData[0],
                type: 'line',
                smooth: true,
                symbol: 'roundRect',
                data: Convertor.getYEchartsData(EchartsDataObj.IncomeReg,0),
            },
            {
                name: LegendData[1],
                type: 'line',
                smooth: true,
                symbol: 'roundRect',
                data: Convertor.getYEchartsData(EchartsDataObj.IncomeReg,1),
            },
            {
                name: LegendData[2],
                type: 'line',
                smooth: true,
                symbol: 'roundRect',
                data: Convertor.getYEchartsData(EchartsDataObj.IncomeReg,2),
            },
            {
                name: LegendData[3],
                type: 'line',
                smooth: true,
                symbol: 'roundRect',
                data: Convertor.getYEchartsData(EchartsDataObj.IncomeReg,3),
            },
            {
                name: LegendData[4],
                type: 'line',
                smooth: true,
                symbol: 'roundRect',
                data: Convertor.getYEchartsData(EchartsDataObj.IncomeReg,4),
            }
        ]
    };
    graduateyear.setOption(graduateyearOption,EchartsDataObj);

    /*退费 创收*/
    // 退费金额
    var sexrate = echarts.init(document.getElementById('sexrate'));
    var sexrateTotal = {
        name: '退费金额'
    };
    var sexrateOption = {
        title: [{
            text: sexrateTotal.name,
            left: '48%',
            top: '24%',
            textAlign: 'center',
            textBaseline: 'middle',
            textStyle: {
                color: '#fff',
                fontWeight: 'normal',
                fontSize: 18
            }
        }, {
            text: sexrateTotal.value,
            left: '48%',
            top: '44%',
            textAlign: 'center',
            textBaseline: 'middle',
            textStyle: {
                color: '#fff',
                fontWeight: 'normal',
                fontSize: 18
            }
        }],
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },

        color: ['#27c2c1', '#9ccb63', '#fcd85a', '#0084c8', '#d8514b'],
        legend: {
            orient: 'vertical',
            x: 'center',
            bottom: '5%',
            selectedMode: true,
            formatter: function (name) {
                var oa = EchartsDataObj.BackIncomeReg.map(item=>{return item={value:item.ManageTotal+"  "+item.Percent,name:item.ManageDept}})
                for (var i = 0; i < sexrateOption.series[0].data.length; i++) {
                    if (name == oa[i].name) {
                        return name + "  " + oa[i].value;
                    }
                }
            },
            show: true,
            textStyle: {
                color: '#fff',
                fontWeight: 'bold'
            },
        },

        series: [
            {
                name: '退费金额',
                type: 'pie',
                selectedMode: 'single',
                radius: ['45%', '55%'],
                center: ['50%', '30%'],
                data: EchartsDataObj.BackIncomeReg.map(item=>{return item={value:item.ManageTotal,name:item.ManageDept}}),
                label: {
                    normal: {
                        show: false,
                        position: "outer",
                        align: 'left',
                        textStyle: {
                            rotate: true
                        }
                    }
                },
                itemStyle:{
                    borderWidth:1,
                    borderColor:'#060e1a'
                }
            }
        ]
    };
    sexrate.setOption(sexrateOption);

    // 教师产能
    var householdrate = echarts.init(document.getElementById('householdrate'));
    var householdrateTotal = {
        name: '教师产能'
    };
    var householdrateOption = {
        title: [{
            text: householdrateTotal.name,
            left: '48%',
            top: '24%',
            textAlign: 'center',
            textBaseline: 'middle',
            textStyle: {
                color: '#fff',
                fontWeight: 'normal',
                fontSize: 18
            }
        }, {
            text: householdrateTotal.value,
            left: '48%',
            top: '44%',
            textAlign: 'center',
            textBaseline: 'middle',
            textStyle: {
                color: '#fff',
                fontWeight: 'normal',
                fontSize: 18
            }
        }],
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },

        color: ['#27c2c1', '#9ccb63', '#fcd85a', '#0084c8', '#d8514b'],
        legend: {
            orient: 'vertical',
            x: 'center',
            bottom: '5%',
            selectedMode: true,
            formatter: function (name) {
                var oa = EchartsDataObj.TeacherIncome.map(item=>{return item={value:item.TeacherIncome.toFixed(2),name:item.Management_dept_name}})
                for (var i = 0; i < sexrateOption.series[0].data.length; i++) {
                    if (name == oa[i].name) {
                        return name + "  " + oa[i].value;
                    }
                }
            },
            show: true,
            textStyle: {
                color: '#fff',
                fontWeight: 'bold'
            },
        },
        series: [
            {
                name: '教师产能',
                type: 'pie',
                selectedMode: 'single',
                radius: ['45%', '55%'],
                center: ['50%', '30%'],
                data: EchartsDataObj.TeacherIncome.map(item=>{return item={value:item.TeacherIncome.toFixed(2),name:item.Management_dept_name}}),
                label: {
                    normal: {
                        show: false,
                    }
                },
                itemStyle:{
                    borderWidth:1,
                    borderColor:'#060e1a'
                }
            }
        ]
    };
    householdrate.setOption(householdrateOption);

    /*  招生人数 */
    var courserate = echarts.init(document.getElementById('courserate'));
    var courserateOption = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            right: '0',
            y: 'middle',
            textStyle: {
                color: "#fff"
            },

            formatter: function (name) {
                var oa = courserateOption.series[0].data;
                for (var i = 0; i < courserateOption.series[0].data.length; i++) {
                    if (name == oa[i].name) {
                        return name + ' ' + oa[i].value;
                    }
                }
            },
        },
        series: [
            {
                name: '占比',
                type: 'pie',
                radius: '45%',
                color: ['#27c2c1', '#9ccb63', '#fcd85a', '#0084c8', '#d8514b'],
                center: ['38%', '50%'],
                data: EchartsDataObj.Courserate.map(item=>{return item={value:item.stuNum,name:item.Management_dept_name}}),
                itemStyle:{
                    borderWidth:1,
                    borderColor:'#060e1a'
                }
            }
        ]
    };
    courserate.setOption(courserateOption);

    /* 招生人次*/
    var professionrate = echarts.init(document.getElementById('professionrate'));
    var professionrateOption = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            right: '0',
            y: 'middle',
            textStyle: {
                color: "#fff"
            },
            formatter: function (name) {
                var oa = professionrateOption.series[0].data;
                for (var i = 0; i < professionrateOption.series[0].data.length; i++) {
                    if (name == oa[i].name) {
                        return name + ' ' + oa[i].value;
                    }
                }
            }
        },
        series: [
            {
                name: '占比',
                type: 'pie',
                radius: '45%',
                color: ['#27c2c1', '#9ccb63', '#fcd85a', '#0084c8', '#d8514b'],
                center: ['35%', '50%'],
                data: EchartsDataObj.BackIncomeReg.map(item=>{return item={value:item.BaoMingNum,name:item.ManageDept}}),
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },
                itemStyle: {
                    borderWidth:1,
                    borderColor:"#060e1a"
                }
            }
        ]
    };
    professionrate.setOption(professionrateOption);


    /* 区域结转*/
    var edubalance = echarts.init(document.getElementById('edubalance'));
    var edubalanceOption = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },
            // formatter: function (params) {
            //    if(params.length){
            //     params.map(item=>{
            //         item.data=item.data/10000+'万'
            //         return params
            //     })
            //    }
            // },
        },
        toolbox: {
            show: false,
            feature: {
                dataView: { show: true, readOnly: false },
                magicType: { show: true, type: ['line', 'bar'] },
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },
        legend: {
            right: "15%",
            textStyle: {
                color: '#fff'
            },
        },
        grid: {
            top: '18%',
            right: '5%',
            bottom: '8%',
            left: '5%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: Convertor.getXEchartsData(EchartsDataObj.CarryOverBeginDate),
                splitLine: {
                    show: false,
                    lineStyle: {
                        color: '#3c4452'
                    }
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: "#fff"
                    },
                    lineStyle: {
                        color: '#519cff'
                    },
                    alignWithLabel: true,
                    interval: 0,
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                nameTextStyle: {
                    color: '#fff'
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#23303f'
                    }
                },
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: '#115372'
                    }
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: "#fff"
                    },
                    alignWithLabel: true,
                    interval: 0,
                    formatter: function (value) {
                        if(value != 0) return value/10000 + '万';
                    },
                }
            },
        ],
        series: [
            {
                name: LegendData[0],
                type: 'bar',
                data:Convertor.getYCarryOverBeginDateData(EchartsDataObj.CarryOverBeginDate,0),
                itemStyle: {
                    normal: {
                        color: '#27c2c1'
                    }, label: {
                        show: true,
                        position: 'top',
                        formatter: '{c}'
                    }
                }
            },
            {
                name: LegendData[1],
                type: 'bar',
                data: Convertor.getYCarryOverBeginDateData(EchartsDataObj.CarryOverBeginDate,1),
                itemStyle: {
                    normal: {
                        color: '#9ccb63'
                    },
                    label: {
                        show: true,
                        position: 'top',
                        formatter: '{c}'
                    }
                }
            },
            {
                name: LegendData[2],
                type: 'bar',
                data: Convertor.getYCarryOverBeginDateData(EchartsDataObj.CarryOverBeginDate,2),
                itemStyle: {
                    normal: {
                        color: '#fcd85a'
                    },
                    label: {
                        show: true,
                        position: 'top',
                        formatter: '{c}'

                    }
                }
            },
            {
                name: LegendData[3],
                type: 'bar',
                data: Convertor.getYCarryOverBeginDateData(EchartsDataObj.CarryOverBeginDate,3),
                itemStyle: {
                    normal: {
                        color: '#0084c8'
                    },
                    label: {
                        show: true,
                        position: 'top',
                        formatter: '{c}'
                    }
                }
            },
            {
                name: LegendData[4],
                type: 'bar',
                data: Convertor.getYCarryOverBeginDateData(EchartsDataObj.CarryOverBeginDate,4),
                itemStyle: {
                    normal: {
                        color: '#d8514b'
                    },
                    label: {
                        show: true,
                        position: 'top',
                        formatter: '{c}'
                    }
                }
            },
        ]
    };

    edubalance.setOption(edubalanceOption);

    /* 地图展示  需要哪个省市的地图直接引用js 将下面的name以及mapType修改为对应省市名称*/
    var maps = echarts.init(document.getElementById('mapadd'));
    var mapsOption = {
        // tooltip: {
        //     formatter:function(params,ticket, callback){
        //         return params.seriesName+'<br />'+params.name+'：'+params.value
        //     }
        // },
        series: [{
            name: '苏州',
            type: 'map',
            mapType: '苏州',
            roam: false,
            top: '8%',
            zoom: 1.2,
            x: '25%',
            selectedMode: 'single',//multiple多选
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        textStyle: {
                            color: "#231816"
                        }
                    },
                    areaStyle: { color: '#B1D0EC' },
                    color: '#B1D0EC',
                    borderColor: '#dadfde'//区块的边框颜色
                },
                emphasis: {//鼠标hover样式
                    label: {
                        show: true,
                        textStyle: {
                            color: '#fa4f04'
                        }
                    },
                    areaStyle: { color: 'red' }
                }
            },
            data: [
                {
                    name: '姑苏区',
                    itemStyle: {
                        normal: {
                            areaColor: '#12f0e9',
                            borderColor: '#edce00'
                        }
                    },
                },
                {
                    name: '吴中区',
                    itemStyle: {
                        normal: {
                            areaColor: '#d8514b',
                            borderColor: '#0abcee'
                        }
                    },
                },
                {
                    name: '工业园区',
                    itemStyle: {
                        normal: {
                            areaColor: '#92d050',
                            borderColor: '#1ca9f2'
                        }
                    },
                },
                {
                    name: '高新区',
                    itemStyle: {
                        normal: {
                            areaColor: '#88ddf5',
                            borderColor: '#88ddf5',
                        }
                    },
                },
                {
                    name: '园区',
                    itemStyle: {
                        normal: {
                            areaColor: '#13d5ff',
                            borderColor: '#45b5ef',
                        }
                    }
                },
                {
                    name: '相城区',
                    itemStyle: {
                        normal: {
                            areaColor: '#13d5ff',
                            borderColor: '#45b5ef'
                        }
                    }
                },
                {
                    name: '吴江区',
                    itemStyle: {
                        normal: {
                            areaColor: '#45b5ef',
                            borderColor: '#45b5ef',
                        }
                    }
                },
                {
                    name: '太仓市',
                    itemStyle: {
                        normal: {
                            areaColor: '#ffd811',
                            borderColor: '#45b5ef',
                        }
                    }
                },
                {
                    name: '张家港市',
                    itemStyle: {
                        normal: {
                            areaColor: '#ffa312',
                            borderColor: '#45b5ef',
                        }
                    }
                },
                {
                    name: '常熟市',
                    itemStyle: {
                        normal: {
                            areaColor: '#92d050',
                            borderColor: '#1ca9f2'
                        }
                    }
                },
                {
                    name: '昆山市',
                    itemStyle: {
                        normal: {
                            areaColor: '#88ddf5',
                            borderColor: '#88ddf5',
                        }
                    }
                },
            ]
        }]
    };
    maps.setOption(mapsOption);

    /* 生源结构*/
    var container = echarts.init(document.getElementById("container"));
    var app = {};
    var containerOption = null;
    app.title = '柱状图框选';
    const StudentStructureXarr=[];
    Convertor.getXEchartsData(EchartsDataObj.StudentStructure).forEach((item,index)=>{
        StudentStructureXarr[index]="k"+index
    })
    var itemStyle = {
        normal: {
        },
        emphasis: {
            barBorderWidth: 1,
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowColor: 'rgba(0,0,0,0.5)'
        }
    };

    containerOption = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            align: 'left',
            left: 10,
            textStyle: { color: '#fff' }
        },
        xAxis: {
            data: StudentStructureXarr,
            name: 'X',
            silent: false,
            axisLine: { onZero: true },
            splitLine: { show: false },
            splitArea: { show: false }
        },
        yAxis: {
            // inverse: true,
            splitArea: { show: false }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        color: ['#27c2c1', '#9ccb63', '#fcd85a', '#0084c8', '#d8514b'],
        textStyle: { color: "#fff" },
        series: [
            {
                name: LegendData[0],
                type: 'bar',
                stack: 'one',
                itemStyle: itemStyle,
                data: Convertor.getYEchartsData(EchartsDataObj.StudentStructure,0),
            },
            {
                name: LegendData[1],
                type: 'bar',
                stack: 'one',
                itemStyle: itemStyle,
                data: Convertor.getYEchartsData(EchartsDataObj.StudentStructure,1),
            },
            {
                name: LegendData[2],
                type: 'bar',
                stack: 'one',
                itemStyle: itemStyle,
                data: Convertor.getYEchartsData(EchartsDataObj.StudentStructure,2),
            },
            {
                name: LegendData[3],
                type: 'bar',
                stack: 'one',
                itemStyle: itemStyle,
                data: Convertor.getYEchartsData(EchartsDataObj.StudentStructure,3),
            },
            {
                name: LegendData[4],
                type: 'bar',
                stack: 'one',
                itemStyle: itemStyle,
                data: Convertor.getYEchartsData(EchartsDataObj.StudentStructure,4),
            }
        ]
    };

    if (containerOption && typeof containerOption === "object") {
        container.setOption(containerOption, true);
    }

    /* 教室利用率*/
    var dom = echarts.init(document.getElementById("dom"));
    var app = {};
    var domOption = null;
    app.title = '折柱混合';

    domOption = {
        tooltip: {
            trigger: 'axis',
        },
        legend: {
            textStyle: { color: '#fff' },
            x: '20%',
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        color: ['#27c2c1', '#9ccb63', '#fcd85a', '#0084c8', '#d8514b'],
        textStyle: { color: "#fff" },

        xAxis: [
            {
                type: 'category',
                data:Convertor.getXEchartsData(EchartsDataObj.ClassRoomInfo),
                axisPointer: {
                    type: 'shadow'
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '使用率',
                min: 0,
                max: 100,
                interval: 20,
                axisLabel: {
                    formatter: '{value} %'
                }
            },
        ],
        series: [
            {
                name: LegendData[0],
                type: 'bar',
                data: Convertor.getYEchartsData(EchartsDataObj.ClassRoomInfo,0)
            },
            {
                name: LegendData[1],
                type: 'bar',
                data: Convertor.getYEchartsData(EchartsDataObj.ClassRoomInfo,1)
            },
            {
                name: LegendData[2],
                type: 'bar',
                data: Convertor.getYEchartsData(EchartsDataObj.ClassRoomInfo,2)
            },
            {
                name: LegendData[3],
                type: 'bar',
                data: Convertor.getYEchartsData(EchartsDataObj.ClassRoomInfo,3)
            },
            {
                name: LegendData[4],
                type: 'bar',
                data: Convertor.getYEchartsData(EchartsDataObj.ClassRoomInfo,4)
            },
        ]
    };
    ;
    if (domOption && typeof domOption === "object") {
        dom.setOption(domOption, true);
    }
    window.addEventListener('resize',()=>{
        container.resize();
        dom.resize();
        radar.resize();
        graduateyear.resize();
        sexrate.resize();
        householdrate.resize();
        courserate.resize();
        professionrate.resize();
        edubalance.resize();
        maps.resize();
    })
}
