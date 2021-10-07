import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PlayerStockData } from 'src/app/models/assetplayer.model';
import { PlayerStats } from 'src/app/models/playerstats.model';
import { MatchContractsService } from 'src/app/services/match-contracts.service';
import { MatchDataService } from 'src/app/services/match-data.service';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileDetailsComponent implements OnChanges {

  @Input()
  playerStats: PlayerStats

  @Input()
  playerPrice: String

  playerHistoryData = {}

  playerHighLoaw;
  selectedComponent: string;
  constructor(private matchDataService: MatchDataService, private matchContractService: MatchContractsService) { }
  async ngOnChanges({ playerStats }: SimpleChanges) {
    if (playerStats.currentValue) {
      const data = await this.matchDataService.getPlayerHistory(this.playerStats.playerID);
      this.playerHistoryData = data;
      const sorted = data.priceArray.map(d => d.price).sort();
      this.playerHighLoaw = Object.assign({}, {
        low: sorted[0],
        high: sorted[sorted.length - 1],
        marketprice: this.playerPrice
      })
    }
  }
  stockData: any;


  async onBuyStock(eventdata) {
    const data = await this.matchContractService.buyStock(this.playerStats.playerID, eventdata.price, this.playerStats.fullName);
    debugger;
  }
  onNavSelectChange(name) {
    const selected = document.getElementsByClassName("selected")[0];
    if (selected) {
      selected.classList.remove("selected")
    }
    const currentElm = document.getElementById(name);
    currentElm.classList.add("selected")
    this.selectedComponent = name;
  }

}
