<template>
	<div id="table2"></div>
</template>

<script>
import { GaugeChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'

export default {
	mounted () {
		this.$echarts.use([ GaugeChart, CanvasRenderer ])

		const myCharts = this.$echarts.init(document.getElementById('table2'))

		myCharts.setOption({
			series: [{
        type: 'gauge',
        startAngle: 90,
        endAngle: -270,
        pointer: {
					show: false
        },
        progress: {
					show: true,
					overlap: false,
					roundCap: false,
					clip: false,
					itemStyle: {
						borderWidth: 0,
						borderColor: '#464646'
					}
        },
        axisLine: {
					lineStyle: {
						width: 10
					}
        },
        splitLine: {
					show: false //表盘大刻度
        },
        axisTick: {
					show: false //表盘小刻度
        },
        axisLabel: {
					show: false //表盘数字
        },
        data: [
          {
            value: 100,
            name: 'Perfect',
            title: {
                offsetCenter: ['0%', '-5%']
            },
            detail: {
                offsetCenter: ['0%', '-20%']
            }
          },
          {
            value: 0,
            // name: 'Good',
            title: {
                offsetCenter: ['0%', '0%']
            },
            detail: {
                offsetCenter: ['0%', '10%']
            }
          },
          {
            value: 100,
            // name: 'Commonly',
            title: {
              offsetCenter: ['0%', '30%']
            },
            detail: {
              offsetCenter: ['0%', '40%']
            }
          }
        ],
        title: {
          fontSize: 80
        },
        detail: {
          show: false
        }
      }]
		})
	}
}
</script>

<style>
#table2 {
	width: 600px;
	height: 600px;
}
</style>