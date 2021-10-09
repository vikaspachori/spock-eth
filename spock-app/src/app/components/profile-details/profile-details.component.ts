import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
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
  playerPrice: string

  playerHistoryData = {}

  price;
  playerHighLoaw;
  selectedComponent: string;
  statsData;
  constructor(private matchDataService: MatchDataService, private matchContractService: MatchContractsService, private toastr: ToastrService) { }
  async ngOnChanges({ playerStats }: SimpleChanges) {
    if (playerStats.currentValue) {
      const data = await this.matchDataService.getPlayerHistory(this.playerStats.playerID);
      
      this.playerHistoryData = data;
      const sorted = data.priceArray.map(d => d.price + 100).sort();
      this.price = parseInt(this.playerPrice) + 100
      this.playerHighLoaw = Object.assign({}, {
        low: sorted[0],
        high: sorted[sorted.length - 1],
        marketprice: this.price
      })
    }
  }
  stockData: any;
  stattsData: any;

  async onBuyStock(eventdata) {
    const data = await this.matchContractService.buyStock(this.playerStats.playerID, eventdata.price, this.playerStats.fullName, eventdata.total);
    this.toastr.show(data.status)

  }

  async sellStock(eventdata) {
    const dat = await this.matchContractService.sellPlayerStock(this.playerStats.playerID, this.price, eventdata.count);
    this.toastr.show(dat.status);
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
