<template>
  <div id="hello">
  </div>
</template>

<script>
import { BarChart} from 'echarts/charts'
import { GaugeChart } from 'echarts/charts'
import { CanvasRenderer} from 'echarts/renderers'

export default {
  mounted () {
    this.$echarts.use([BarChart, GaugeChart, CanvasRenderer])
    const myChart = this.$echarts.init(document.getElementById('hello'))

    myChart.setOption({
      tooltip: {},
      xAxis: {
      },
      yAxis: {},
      series: [
        {
        type: 'gauge',
        startAngle: 90,
        endAngle: -270,
        min: 0,
        max: 0,
        splitNumber: 0,
        axisLine: {
          lineStyle: {
              width: 1,
              color: [
                  [1, 'rgba(0,0,0,0.7)']
              ],
              shadowColor: 'rgba(0, 0, 0, 0.5)',
              shadowBlur: 15
          }
        },
        splitLine: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
        anchor: {
            show: false,
        },
        pointer: {
          show: false,
        },
        detail: {
            show: false
        }
    }
      ]
    })
  }
}
</script>

<style scoped>
#hello {
  width: 600px;
  height: 600px;
}
</style>
