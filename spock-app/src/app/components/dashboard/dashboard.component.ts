import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AssetPlayer, TrendinPlayers } from 'src/app/models/assetplayer.model';
import { DashboardService } from 'src/app/services/dashboard.service';
import { WalletService } from 'src/app/services/wallet.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

  playerassets: Array<AssetPlayer>
  trendingPlayers: Array<TrendinPlayers>;
  t = []
  constructor(private daashbaordservice: DashboardService, private walletService: WalletService) { }

  async ngOnInit() {
    const data = await this.walletService.connectAccount();
    debugger
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
