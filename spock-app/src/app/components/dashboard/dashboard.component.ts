import { Component, OnInit } from '@angular/core';
import { AssetPlayer } from 'src/app/models/assetplayer.model';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  playerassets: Array<AssetPlayer>
  constructor(private daashbaordservice: DashboardService) { }

  ngOnInit(): void {
    this.playerassets = this.daashbaordservice.getAsset();
  }
  getMarginClass(number): string {
    return number < 0 ? "red" : "blue"
  }
  getClassWithGradient(i): string {
    return "card gradient" + i
  }
}
