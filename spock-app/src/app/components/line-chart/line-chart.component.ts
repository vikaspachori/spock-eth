import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

  constructor() { }
  chartDom: any;
  option: any;
  myChart: any;
  data = [];
  now = new Date(1997, 9, 3)
  value = Math.random() * 1000;
  ngOnInit(): void {
    this.chartDom = document.getElementById('main');
    this.myChart = echarts.init(this.chartDom);

    for (var i = 0; i < 1000; i++) {
      this.data.push(this.randomData());
    }
    this.option = {
      title: {
        text: ''
      },
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
        splitLine: {
          show: false
        }
      },
      yAxis: {
        type: 'value',
        boundaryGap: [0, '100%'],
        splitLine: {
          show: false
        }
      },
      series: [{
        name: '',
        type: 'line',
        showSymbol: false,
        hoverAnimation: false,
        data: this.data
      }]
    };


    this.myChart.setOption(this.option);
    const self = this;

setInterval(function () {

  for (var i = 0; i < 5; i++) {
    self.data.shift();
    self.data.push(self.randomData());
  }

  self.myChart.setOption({
      series: [{
          data: self.data
      }]
  });
}, 1000);

  }
  randomData() {

    var date = new Date(this.now)
     date.setDate(this.now.getDate() + 1);
     this.now = date;
    console.log(this.now)
    this.value = this.value + Math.random() * 21 - 10;
    return {
      name: this.now.toString(),
      value: [
        [this.now.getFullYear(), this.now.getMonth() + 1, this.now.getDate()].join('/'),
        Math.round(this.value)
      ]
    };
  }

}


