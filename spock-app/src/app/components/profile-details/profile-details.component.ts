import { Component, Input, OnInit } from '@angular/core';
import { PlayerStockData } from 'src/app/models/assetplayer.model';
import { PlayerStats } from 'src/app/models/playerstats.model';
import { MatchContractsService } from 'src/app/services/match-contracts.service';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit {

  @Input()
  playerStats: PlayerStats

  @Input()
  playerPrice: String

  selectedComponent: string;
  constructor(private contractService: MatchContractsService) { }
  stockData: PlayerStockData;
  async ngOnInit() {
    this.stockData = {
      high: "$ 20.5",
      low: "$10.5",
      market_cap: "$ 20M",
      popularity: "# 11",
      totalSupply: "1 M",
      vol: "$5.0 M"
    }
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
