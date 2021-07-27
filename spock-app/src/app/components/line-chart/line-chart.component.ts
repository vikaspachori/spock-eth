import { Component, Input, OnInit } from '@angular/core';
import * as echarts from 'echarts';
@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

  @Input()
  height: any;
  @Input()
  hidex: boolean;
  @Input()
  hideY: boolean

  @Input()
  lineColor: string;

  @Input()
  bottom: number
  @Input()
  backgroundcolor: string
  constructor() { }
  chartDom: any;
  option: any;
  myChart: any;
  data = [];
  now = new Date(1997, 9, 3)
  value = Math.random() * 1000;
  ngOnInit(): void {
    if (this.height) {
      document.getElementById("main").style.height = this.height + "px";
    }
    else {
      this.height = 600
    }
    if (!this.bottom) {
      this.bottom = 30
    }
    this.chartDom = document.getElementById('main');
    this.myChart = echarts.init(this.chartDom);

    for (var i = 0; i < 50; i++) {
      this.data.push(this.randomData());
    }
    this.data[this.data.length - 1].value[1] = 1000;
    // debugger
    this.option = {
      title: {
        text: ''
      },
      grid: {
        left: 0,
        top: 0,
        right: 10,
        bottom: this.bottom
      },
      backgroundColor: this.backgroundcolor,

      tooltip: {
        trigger: 'axis',
        formatter: function (params) {
          params = params[0];
          var date = new Date(params.name);
          return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
        },
        axisPointer: {
          animation: false
        }
      },
      xAxis: {
        type: 'time',
        show: !this.hidex,
        splitLine: {
          show: false
        }
      },
      yAxis: {
        type: 'value',
        show: !this.hideY,
        splitLine: {
          show: false
        }
      },
      series: [{
        name: '',
        type: 'line',
        showSymbol: false,
        hoverAnimation: false,
        data: this.data,
        lineStyle: { color: this.lineColor }
      }]
    };


    this.myChart.setOption(this.option);
    const self = this;

    // setInterval(function () {

    //   for (var i = 0; i < 5; i++) {
    //     self.data.shift();
    //     self.data.push(self.randomData());
    //   }

    //   self.myChart.setOption({
    //     series: [{
    //       data: self.data
    //     }]
    //   });
    // }, 1000);

  }
  randomData() {

    var date = new Date(this.now)
    date.setDate(this.now.getDate() + 1);
    this.now = date;
    console.log(this.now)
    this.value = Math.floor(Math.random() * 100);
    return {
      name: this.now.toString(),
      value: [
        [this.now.getFullYear(), this.now.getMonth() + 1, this.now.getDate()].join('/'),
        Math.round(this.value)
      ]
    };
  }

}


