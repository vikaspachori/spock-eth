import { Component, OnInit } from '@angular/core';
import { PlayerStockData } from 'src/app/models/assetplayer.model';
import { MatchContractsService } from 'src/app/services/match-contracts.service';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit {

  constructor(private contractService: MatchContractsService) { }
  stockData: PlayerStockData;
  async ngOnInit() {
    const data = await this.contractService.getContractInstance();
    this.stockData = {
      high: "$ 20.5",
      low: "$10.5",
      market_cap: "$ 20M",
      popularity: "# 11",
      totalSupply: "1 M",
      vol: "$5.0 M"
    }
  }

}
