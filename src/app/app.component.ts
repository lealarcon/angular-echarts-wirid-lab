import { Component, OnInit } from '@angular/core';

import   * as echarts  from 'echarts/dist/echarts-en'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular';

  private myChart: any = null;

/*
  private optionsLegends = {
    legend: {
      selected: ["elem1", "elem2", "elem3"]
    }
  }
  */

  ngOnInit() {
    this.InitPipe();
  }

config = {
    rotate: 90,
    align: 'left',
    verticalAlign: 'middle',
    position: 'insideBottom',
    distance: 15,
};

labelOption = {
    show: true,
    position: this.config.position,
    distance: this.config.distance,
    align: this.config.align,
    verticalAlign: this.config.verticalAlign,
    rotate: this.config.rotate,
    formatter: '{c}  {name|{a}}',
    fontSize: 16,
    rich: {
        name: {
            textBorderColor: '#fff'
        }
    }
};

  private InitPipe(): void {
    this.myChart = echarts.init((document.getElementById('pipe')) as any);

    const option = {
      color: ['#003366',  '#e5323e'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['Forest', 'Steppe', 'Desert', 'Wetland']
    },
    toolbox: {
        show: false,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
            mark: {show: true},
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar', 'stack', 'tiled']},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    xAxis: [
        {
            type: 'category',
            axisTick: {show: false},
            data: ['Today']
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: 'Male',
            type: 'bar',
            barGap: 0,
            label: this.labelOption,
            data: [320]
        },
        {
            name: 'Female',
            type: 'bar',
            label: this.labelOption,
            data: [220]
        }
        
    ]
    };

    this.myChart.setOption(option);

    /*
    this.myChart.on('legendselectchanged', function(params) {
        console.log("legendselectchanged", params);
        var name = params.name;
        var slectedObject = {[name]:true};
        console.log("slectedObject", slectedObject);
        
        let option = {
            legend: {
                selected : slectedObject
            }
        }
        this.myChart.setOption(option);
    })
    */

  }


  OnElem1Click() {
    console.log("OnElem1Click");
    this.myChart.dispatchAction({
      type: 'highlight',
      seriesIndex: 0,
      dataIndex: 1
    });
  }

  OnElem1Mouseover() {
    console.log("OnElem1Mouseover");
    this.myChart.dispatchAction({
      type: 'highlight',
      seriesIndex: 0,
      dataIndex: 1
    });
  }

  OnElem1Mouseout() {
    console.log("OnElem1Mouseout");
    this.myChart.dispatchAction({
      type: 'downplay',
      seriesIndex: 0,
      dataIndex: 1
    });
  }

  OnElem2Mouseover() {
    console.log("OnElem2Mouseover");
    this.myChart.dispatchAction({
      type: 'highlight',
      seriesIndex: 0,
      dataIndex: 2
    });
  }

  OnElem2Mouseout() {
    console.log("OnElem2Mouseout");
    this.myChart.dispatchAction({
      type: 'downplay',
      seriesIndex: 0,
      dataIndex: 2
    });
  }


}
