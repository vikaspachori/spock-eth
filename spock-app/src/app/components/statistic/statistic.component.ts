import { Component, Input, OnInit } from '@angular/core';
import { BattingStatsEntity, BowlingStatsEntity, PlayerStats } from 'src/app/models/playerstats.model';
import { groupBy } from 'lodash';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent implements OnInit {

  @Input()
  statsData: PlayerStats;
  battingStats: any;
  bowlingStats: any;
  formats = ['Test', 'ODI', 'T20I'];
  constructor() { }



  ngOnInit(): void {
    if (this.statsData) {
      this.battingStats = groupBy(this.statsData.battingStats, "format");
      this.bowlingStats = groupBy(this.statsData.bowlingStats, "format");

    }
  }

}
