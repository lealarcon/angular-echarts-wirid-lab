import { Component, OnInit } from '@angular/core';

import   * as echarts  from 'echarts/dist/echarts-en'
import { NodeService } from './services/node.service';
import { interval, timer } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular';

  private myChart: any = null;
  private myChart2: any = null;
/*
  private optionsLegends = {
    legend: {
      selected: ["elem1", "elem2", "elem3"]
    }
  }
  */

  constructor(
    private _nodeServices: NodeService
  ) {
   
  }


  ngOnInit() {
    this.initPipe();
    this.historyPeople();
    this.getNodeData();
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

initPipe(): void {
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
     grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
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
            barGap: 0.2,
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


  historyPeople(){
     this.myChart2 = echarts.init((document.getElementById('history-graph')) as any);

   let  option = {
    title: {
        text: 'History People'
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
        data: ['a', 'b', 'c', 'd', 'e']
    },
    toolbox: {
       show: false,
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
            data: ['dia 1', 'dia2', 'dia3', 'dia4', 'dia7', 'dia9', 'dia80']
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
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: 'Female',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [220, 182, 191, 234, 290, 330, 310]
        }
    ]
};

 this.myChart2.setOption(option);
  }


   getNodeData(){
      timer(5000).subscribe(()=>{
        this._nodeServices.getDataByNodeId('rpi-camera-detection').pipe(take(1)).subscribe(data=>{
              console.log("se hizo petición")
        })
      },
      err=>{

      })
   }


}
