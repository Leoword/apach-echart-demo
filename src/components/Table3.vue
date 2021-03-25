<template>
	<div id="table3"></div>
</template>

<script>
import { GaugeChart } from 'echarts/charts'

import { CanvasRenderer } from 'echarts/renderers'
import {
	DatasetComponent, PolarComponent, TooltipComponent
} from 'echarts/components'
import { CustomChart } from 'echarts/charts'

export default {
	mounted () {
		this.$echarts.use([ 
			GaugeChart,
			CanvasRenderer, DatasetComponent, PolarComponent, TooltipComponent,
			CustomChart
		])

		const myCharts = this.$echarts.init(document.getElementById('table3'))
		
		const imageURL = 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples' + '/data/asset/img/custom-gauge-panel.png'
		const animationDuration = 1000
		const animationDurationUpdate = 1000
		const animationEasingUpdate = 'quartcInOut'
		const valOnRadianMax = 200
		const outerRadius = 200
		const innerRadius = 170
		const pointerInnerRadius = 40
		const insidePanelRadius = 140
		// const currentDataIndex = 0

		function renderItem(params, api) {
			const valOnRadian = api.value(1)
			const coords = api.coord([api.value(0), valOnRadian])
			const polarEndRadian = coords[3]
			const imageStyle = {
				image: imageURL,
				x: params.coordSys.cx - outerRadius,
				y: params.coordSys.cy - outerRadius,
				width: outerRadius* 2,
				height: outerRadius*2
			}

			return {
				type: 'group',
				children: [
					{
						type: 'image',
						style: imageStyle,
						clipPath: {
							type: 'sector',
							shape: {
								cx: params.coordSys.cx,
								cy: params.coordSys.cy,
								r: outerRadius,
								r0: innerRadius,
								startAngle: 0,
								endAngle: -polarEndRadian,
								transition: 'endAngle',
								enterFrom: { endAngle: 0 }
							}
						}
					},
					{
						type: 'image',
            style: imageStyle,
            clipPath: {
                type: 'polygon',
                shape: {
                    points: makePionterPoints(params, polarEndRadian)
                },
                extra: {
                    polarEndRadian: polarEndRadian,
                    transition: 'polarEndRadian',
                    enterFrom: { polarEndRadian: 0 }
                },
                during: function (apiDuring) {
                    apiDuring.setShape(
                        'points',
                        makePionterPoints(params, apiDuring.getExtra('polarEndRadian'))
                    );
                }
            }
					},
          {
            type: 'circle',
            shape: {
                cx: params.coordSys.cx,
                cy: params.coordSys.cy,
                r: insidePanelRadius + 100
            },
            style: {
                fill: 'transparent',
                stroke: '#000',
                lineWidth: 2,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
            }
          },
					{
						type: 'circle',
            shape: {
                cx: params.coordSys.cx,
                cy: params.coordSys.cy,
                r: 100
            },
            style: {
                fill: '#999',
                // shadowBlur: 25,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowColor: 'rgba(76,107,167,0.4)'
            }
					},
					{
						type: 'text',
            extra: {
                valOnRadian: valOnRadian,
                transition: 'valOnRadian',
                enterFrom: { valOnRadian: 0 }
            },
            style: {
                text: makeText(valOnRadian),
                fontSize: 50,
                fontWeight: 700,
                x: params.coordSys.cx,
                y: params.coordSys.cy,
                fill: 'rgb(0,50,190)',
                align: 'center',
                verticalAlign: 'middle',
                enterFrom: { opacity: 0 }
            },
            during: function (apiDuring) {
                apiDuring.setStyle('text', makeText(apiDuring.getExtra('valOnRadian')));
            }
					}
				]
			}
		}

		function convertToPolarPoint(renderItemParams, radius, radian) {
    return [
        Math.cos(radian) * radius + renderItemParams.coordSys.cx,
        -Math.sin(radian) * radius + renderItemParams.coordSys.cy
    ];
}

function makePionterPoints(renderItemParams, polarEndRadian) {
    return [
        convertToPolarPoint(renderItemParams, outerRadius, polarEndRadian),
        convertToPolarPoint(renderItemParams, outerRadius, polarEndRadian + Math.PI * 0.03),
        convertToPolarPoint(renderItemParams, pointerInnerRadius, polarEndRadian)
    ];
}

function makeText(valOnRadian) {
    // Validate additive animation calc.
    if (valOnRadian < -10) {
        alert('illegal during val: ' + valOnRadian);
    }
    return (valOnRadian / valOnRadianMax * 100).toFixed(0) + '%';
}


		myCharts.setOption({
			animationEasing: animationEasingUpdate,
			animationDuration,
			animationDurationUpdate,
			animationEasingUpdate,
			dataset: {
				source: [[1,156]]
			},
			tooltip: {},
			angleAxis: {
				type: 'value',
        startAngle: 0,
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: { show: false },
        splitLine: { show: false },
        min: 0,
				max:valOnRadianMax
			},
			radiusAxis: {
        type: 'value',
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: { show: false },
        splitLine: { show: false }
    },
    polar: {},
    series: [{
        type: 'custom',
        coordinateSystem: 'polar',
        renderItem: renderItem
      }]
		})
	}
}
</script>

<style>
#table3 {
	width: 600px;
	height: 600px;
}
</style>