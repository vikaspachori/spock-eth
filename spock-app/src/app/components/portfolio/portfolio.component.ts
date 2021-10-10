import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatchContractsService } from 'src/app/services/match-contracts.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatTable } from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

import * as echarts from 'echarts';

import { Router } from '@angular/router';


export interface Player {
  a: string;
  b: number;
  c: number;
  d: string;
  e: string;
}



@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})



export class PortfolioComponent implements OnInit {


  chartDom: any;
  option: any;
  myChart: any;
  chartData: any[] = [];
  xAxisData = [];
  yAxisData = [];

  temp: Player[] = [];
  dataSource: MatTableDataSource<any>
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['a', 'b', 'c', 'e'];
  constructor(private contractSerice: MatchContractsService, private router: Router) {




  }


  async ngOnInit() {
    // debugger;

    var apiData = await this.contractSerice.getUserStock();
    console.log(apiData);
    apiData.forEach(element => {
      let a = {} as Player;
      a.a = element[0];
      a.b = element[1];
      a.c = element[2];
      a.d = (parseInt(element[3])/parseInt(element[2])).toString();
      a.e = (parseInt(element[3])/1000).toString();
      this.temp.push(a);

      
      let dataPoint: any;
      dataPoint = {};
      dataPoint.value = a.d;
      dataPoint.name = a.b;
      this.chartData.push(dataPoint);



      this.dataSource = new MatTableDataSource(this.temp);
      this.dataSource.paginator = this.paginator;
    });


    this.chartDom = document.getElementById('prtstats');
    this.myChart = echarts.init(this.chartDom);

    var colorPalette = ['#F66D44', '#E6F69D', '#FEAE65', '#AADEA7', '#2D87BB', '#64C2A6'];

    var options = {
      tooltip: {
        trigger: 'item'
      },
      series: [
        {
          type: 'pie',
          color: colorPalette,
          radius: '60%',
          data: this.chartData,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };



    this.myChart.setOption(options);


  }



  onClick(row) {
    this.router.navigate([`player`, row.a]);
  }





}
