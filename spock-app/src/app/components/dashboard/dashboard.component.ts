import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AssetPlayer, TrendinPlayers } from 'src/app/models/assetplayer.model';
import { MatchData } from 'src/app/models/match.model';
import { DashboardService } from 'src/app/services/dashboard.service';
import { MatchDataService } from 'src/app/services/match-data.service';
import { WalletService } from 'src/app/services/wallet.service';
import { take, map } from "rxjs/operators"
import * as _ from "lodash";
import { LocalstorageService } from 'src/app/services/localstorage.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

  playerassets: Array<AssetPlayer>
  trendingPlayers: Array<TrendinPlayers>;
  isWalletConnected = false;
  t = []
  matchData: Array<MatchData>
  constructor(private daashbaordservice: DashboardService, private walletService: WalletService, private router: Router, private matchService: MatchDataService) { }

  slideConfig = {
    centerMode: true,
    centerPadding: '60px',
    infinite: true,
    arrows: true,
    speed: 300,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 1000,
  };
  async ngOnInit() {
    if (LocalstorageService.getWalletId()) {
      const walletAddress = LocalstorageService.getWalletId();
      const elem = document.getElementById("walletbtn") as any;
      elem.value = walletAddress;
      elem.disabled = true;
      this.isWalletConnected = true;
    }
    this.matchService.getMatchData().pipe(take(1), map((data: any) => data.data.matcheslist)).subscribe((d: MatchData[]) => {
      this.matchData = d;
      const grouped = _.groupBy(d, "matchStatus");
      this.matchData = grouped.upcoming;
    }
    );

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

  redirecToPlayerProfile(data: TrendinPlayers): void {
    this.router.navigateByUrl(`player/${data.id}`);
  }
  async connectWallet(e) {
    const data = await this.walletService.connectAccount();
    if (data) {
      localStorage.setItem("walletid", data)
      e.target.value = data;
      e.target.disabled = true;
      this.isWalletConnected = true;
    }
  }
}

