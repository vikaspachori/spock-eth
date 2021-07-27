import { Component, Input, OnInit } from '@angular/core';
import { PlayerStockData } from 'src/app/models/assetplayer.model';

@Component({
  selector: 'app-stock-data',
  templateUrl: './stock-data.component.html',
  styleUrls: ['./stock-data.component.scss']
})
export class StockDataComponent implements OnInit {

  @Input()
  data: PlayerStockData
  constructor() { }

  ngOnInit(): void {
  }

}
