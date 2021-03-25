<template>
	<div id="table4"></div>
</template>

<script>
import { CanvasRenderer } from 'echarts/renderers'
import {
    TitleComponent,
    TooltipComponent,
    VisualMapComponent,
    PolarComponent,
    LegendComponent
} from 'echarts/components';
import {
    PieChart, BarChart
} from 'echarts/charts';

export default {
	mounted() {
		this.$echarts.use([
			CanvasRenderer, TitleComponent, TooltipComponent, 
			VisualMapComponent, PieChart,BarChart,
      PolarComponent, LegendComponent
		])
		const myCharts = this.$echarts.init(document.getElementById('table4'))
		const option = {
    backgroundColor: '#0a1a2a',
    title: [{
        text: '报警占比',
        textAlign: 'center',
        x: '34%',
        y: '48%',
        textStyle: {
            color: '#8c949a',
            fontSize: 20,
            fontWeight: 'normal',
        }
    }],
    // tooltip: {
    //     trigger: 'item',
    //     backgroundColor: 'rgba(0,0,0,0.9)',
    //     formatter: function(params) {
    //         return params.seriesName + '<br/>' + params.marker + '<span style="color:' + params.color + '">' + params.data['name'] + '\n' + params.data['value'] + '</span>';
    //     }
    // },
    legend: [{
        orient: 'vertical',
        x: '70%',
        y:'35%',
        itemWidth: 40,
        itemHeight: 40,
        align: 'left',
        textStyle: {
            fontSize:14,
            color: '#6e69b2'
        },
        data:['A','B']
    }, {
        orient: 'vertical',
        x: '70%',
        y:'45%',
        itemWidth: 40,
        itemHeight: 40,
        align: 'left',
        textStyle: {
            fontSize:14,
            color: '#6e69b2'
        },
        data:[
        'C', 'D', ]
    }, {
        orient: 'vertical',
        x: '70%',
        y:'55%',
        itemWidth: 40,
        itemHeight: 40,
        align: 'left',
        textStyle: {
            fontSize:14,
            color: '#6e69b2'
        },
        data:[
        'E' ]
    }],
    series: [
        {
            name: '',
            type: 'pie',
            legendHoverLink: false,
            radius: ['45%', '60%'],
            center: ['35%', '50%'],
            color: ['#000'],
            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false,
                },

            },
            itemStyle: {
                normal: {
                    borderColor:'#0a1a2a',
                    borderWidth: 10
                }
            },
            tooltip: {
                show: false,

            },
            data: [{
                    value: 41,
                    name: ''
                },
                {
                    value: 20,
                    name: ''
                },
                {
                    value: 20,
                    name: ''
                }, {
                    value: 20,
                    name: ''
                }, {
                    value: 20,
                    name: ''
                }
            ]
        },
        {
            name: 'title',
            type: 'pie',
            radius: ['53%', '60%'],
            center: ['35%', '50%'],
            color: ['rgba(125, 227, 21, 1)', 'rgba(2, 204, 156, 1)', 'rgba(20, 160, 193, 1)', 'rgba(81, 89, 172, 1)', 'rgba(8, 144, 158, 1)'],
            label: {
                normal: {
                    show: false,
                    position: 'inside',
                    // formatter: '{d}%',
                    textStyle: {
                        align: 'center',
                        baseline: 'middle',
                        fontSize: 16,
                        fontWeight: '100',
                    }
                },
            },
            labelLine: {
                normal: {
                    smooth: true,
                    length: 10,
                    lineStyle: {
                        width: 1.5
                    }
                }
            },
            itemStyle: {
                normal: {
                    // shadowBlur: 15,
                    // shadowColor: 'rgba(0, 0, 0, 0.5)',
                    borderColor:'#0a1a2a',
                    borderWidth:10,
                    padding: [0,0,-100, 0]
                }
            },
            data: [{
                    value: 41,
                    name: 'A'
                },
                {
                    value: 20,
                    name: 'B'
                },
                {
                    value: 20,
                    name: 'C'
                }, {
                    value: 20,
                    name: 'D'
                }, {
                    value: 20,
                    name: 'E'
                }
            ]
        },
				{
            type: 'pie',
            radius: ['40%', '0%'],
            center: ['35%', '50%'],
            color: ['rgba(125, 227, 21, 1)', 'rgba(2, 204, 156, 1)', 'rgba(20, 160, 193, 1)', 'rgba(81, 89, 172, 1)', 'rgba(8, 144, 158, 1)'],
            label: {
                normal: {
                    show: false,
                    position: 'inside',
                    textStyle: {
                        align: 'center',
                        baseline: 'middle',
                        fontSize: 16,
                        fontWeight: '100',
                    }
                },
            },
            // labelLine: {
            //     normal: {
            //         smooth: true,
            //         length: 10,
            //         lineStyle: {
            //             width: 1.5
            //         }
            //     }
            // },
            // itemStyle: {
            //     normal: {
            //         borderColor:'#0a1a2a',
            //         borderWidth:'10',
            //     }
            // },
            data: [{
                    value: 41,
                    name: 'A'
                }
            ],
						hoverAnimation: false,
						animation: false
				}
		]}
	myCharts.setOption(option)
	}

}
</script>

<style>
#table4 {
	width: 600px;
	height: 600px;
}
</style>