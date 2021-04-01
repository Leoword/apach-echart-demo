<template>
  <div id="hello">
  </div>
</template>

<script>
import { BarChart} from 'echarts/charts'
import { GaugeChart, LineChart } from 'echarts/charts'
import { CanvasRenderer} from 'echarts/renderers'

export default {
  mounted () {
    // const echarts = this.$echarts
    this.$echarts.use([BarChart, GaugeChart, CanvasRenderer, LineChart])
    const myChart = this.$echarts.init(document.getElementById('hello'))
    const option = {
    xAxis: {
        type: 'category',
        boundaryGap: false
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, '30%']
    },
    visualMap: {
        type: 'piecewise',
        show: false,
        dimension: 0,
        seriesIndex: 0,
        pieces: [{
            gt: 1,
            lt: 3,
            color: 'rgba(0, 0, 180, 0.4)'
        }, {
            gt: 5,
            lt: 7,
            color: 'rgba(0, 0, 180, 0.4)'
        }],
        interval: 50
    },
    series: [
        {
            type: 'line',
            smooth: 0.6,
            symbol: 'none',
            lineStyle: {
                color: '#5470C6',
                width: 5
            },
            markLine: {
                symbol: ['none', 'none'],
                label: {show: false},
                data: [
                    {xAxis: 1},
                    {xAxis: 3},
                    {xAxis: 5},
                    {xAxis: 7}
                ]
            },
            areaStyle: {},
            data: [
                ['2019-10-10', 200],
                ['2019-10-11', 560],
                ['2019-10-12', 750],
                ['2019-10-13', 580],
                ['2019-10-14', 250],
                ['2019-10-15', 300],
                ['2019-10-16', 450],
                ['2019-10-17', 300],
                ['2019-10-18', 100]
            ]
        }
    ]
};

option && myChart.setOption(option);
// myChart.setOption(option)

    // myChart.setOption({
    //   tooltip: {},
    //   xAxis: {
    //   },
    //   yAxis: {},
    //   series: [
    //     {
    //     type: 'gauge',
    //     startAngle: 90,
    //     endAngle: -270,
    //     min: 0,
    //     max: 0,
    //     splitNumber: 0,
    //     axisLine: {
    //       lineStyle: {
    //           width: 1,
    //           color: [
    //               [1, 'rgba(0,0,0,0.7)']
    //           ],
    //           shadowColor: 'rgba(0, 0, 0, 0.5)',
    //           shadowBlur: 15
    //       }
    //     },
    //     splitLine: {
    //       show: false,
    //     },
    //     axisLabel: {
    //       show: false,
    //     },
    //     anchor: {
    //         show: false,
    //     },
    //     pointer: {
    //       show: false,
    //     },
    //     detail: {
    //         show: false
    //     }
    // }
    //   ]
    // })
  }
}
</script>

<style scoped>
#hello {
  width: 600px;
  height: 600px;
}
</style>
