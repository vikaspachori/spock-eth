import { Component, Input, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import { MatchDataService } from 'src/app/services/match-data.service';
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
  historyData: any;

  @Input()
  chartDataArray: Array<any>;
  @Input()
  bottom: number
  @Input()
  backgroundcolor: string
  constructor(private dataService: MatchDataService) { }
  chartDom: any;
  option: any;
  myChart: any;
  data = [];
  xAxisData = [];
  yAxisData = [];
  now = new Date(1997, 9, 3)
  value = Math.random() * 1000;
  async ngOnInit() {
    if (this.historyData) {
      const hData = Object.assign({}, this.historyData);
      debugger;
      this.xAxisData = [];
      this.yAxisData = [];
      this.data = hData.priceArray.map((d, i) => {
        this.xAxisData.push(d.price);
        this.yAxisData.push("")
      });
    }
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
    // debugger
    this.option = {
      tooltip: {
        trigger: 'axis',
      },
      xAxis: {
        type: 'category',
        data: this.yAxisData,
        splitLine: {
          show: false
        },
        show: false
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: this.xAxisData,
          type: 'line',
          smooth: true
        }
      ]
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


