import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AssetPlayer, TrendinPlayers } from 'src/app/models/assetplayer.model';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

  playerassets: Array<AssetPlayer>
  trendingPlayers: Array<TrendinPlayers>;
  constructor(private daashbaordservice: DashboardService) { }

  ngOnInit(): void {
    this.playerassets = this.daashbaordservice.getAsset();
    this.trendingPlayers = this.daashbaordservice.getTrendingPlayers();
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
