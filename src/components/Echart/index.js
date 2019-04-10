import React, {Component} from 'react';


import './index.less'
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';

import 'echarts/lib/chart/line';
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/pie';
import 'echarts/lib/chart/scatter';
import 'echarts/lib/chart/radar';

import 'echarts/lib/chart/map';
import 'echarts/lib/chart/treemap';
import 'echarts/lib/chart/graph';
import 'echarts/lib/chart/gauge';
import 'echarts/lib/chart/funnel';
import 'echarts/lib/chart/parallel';
import 'echarts/lib/chart/sankey';
import 'echarts/lib/chart/boxplot';
import 'echarts/lib/chart/candlestick';
import 'echarts/lib/chart/effectScatter';
import 'echarts/lib/chart/lines';
import 'echarts/lib/chart/heatmap';

import 'echarts/lib/component/graphic';
import 'echarts/lib/component/grid';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/polar';
import 'echarts/lib/component/geo';
import 'echarts/lib/component/parallel';
import 'echarts/lib/component/singleAxis';
import 'echarts/lib/component/brush';

import 'echarts/lib/component/title';

import 'echarts/lib/component/dataZoom';
import 'echarts/lib/component/visualMap';

import 'echarts/lib/component/markPoint';
import 'echarts/lib/component/markLine';
import 'echarts/lib/component/markArea';

import 'echarts/lib/component/timeline';
import 'echarts/lib/component/toolbox';

import 'zrender/lib/vml/vml';


export default class Echart extends Component {


    componentDidMount(){
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById(this.props.id));
        // 绘制图表


        myChart.setOption(this.props.data);
    }

    render() {
        return (
            <div>

                <div id={this.props.id} style={{height: this.props.height+'px',width:this.props.width+'px'}}>

                </div>
            </div>

        );
    }
}