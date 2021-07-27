import { Component, OnInit } from '@angular/core';
import { PlayerStockData } from 'src/app/models/assetplayer.model';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit {

  constructor() { }
  stockData: PlayerStockData;
  ngOnInit(): void {
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
