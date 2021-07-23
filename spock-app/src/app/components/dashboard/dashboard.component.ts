import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AssetPlayer, TrendinPlayers } from 'src/app/models/assetplayer.model';
import { DashboardService } from 'src/app/services/dashboard.service';
import * as Highcharts from "highcharts";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

  Highcharts: typeof Highcharts = Highcharts;
  playerassets: Array<AssetPlayer>
  trendingPlayers: Array<TrendinPlayers>;
  constructor(private daashbaordservice: DashboardService) { }
  chartOptions: Highcharts.Options = {
    chart: {
      className: "chart-container",
      height: 150,
      width: 500,
    },
    title: {
      text: ""
    },
    series: [

    ]
  };
  ngOnInit(): void {
    this.playerassets = this.daashbaordservice.getAsset();
    this.trendingPlayers = this.daashbaordservice.getTrendingPlayers();
    const t = []
    for (let index = 0; index < 100; index++) {

      const rndInt = Math.floor(Math.random() * 20) + 1
      t.push(rndInt)
    }
    this.chartOptions.series.push({
      type: "line",
      data: t,
      showInLegend: false
    })
  }
  getMarginClass(number): string {
    return number < 0 ? "red" : "blue"
  }

  getChangeText(number): string {
    return number > 0 ? `<span class="green">+${number}</span>` : `<span class="red">-${number}</span>`
  }
  getStarClass(data: boolean): string {
    return data ? "filledstar" : "star"
  }
  getClassWithGradient(i): string {
    return "card gradient" + i
  }
}
