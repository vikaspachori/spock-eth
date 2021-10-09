import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { PlayerStockData } from 'src/app/models/assetplayer.model';

@Component({
  selector: 'app-stock-data',
  templateUrl: './stock-data.component.html',
  styleUrls: ['./stock-data.component.scss']
})
export class StockDataComponent {

  @Input()
  data: any

  @Output()
  onBuyClick = new EventEmitter()

  @Output()
  onSellClick = new EventEmitter();
  isBuySelected = true;
  constructor() { }

  buyClick() {
    const val = document.getElementById("total") as any;
    this.onBuyClick.emit({
      numbers: 1,
      price: this.data.marketprice,
      total: val.value
    })
  }

  sellClick() {
    const val = document.getElementById("total") as any;
    this.onSellClick.emit({
      count: val.value
    })
  }
  sellSegmentClick() {
    const buyButton = document.getElementById("buy")
    const sellButton = document.getElementById("sell");
    sellButton.classList.remove("blb");
    buyButton.classList.add("blr");
    this.isBuySelected = false;

  }

  buySegmentClick() {
    const buyButton = document.getElementById("buy")
    const sellButton = document.getElementById("sell");
    sellButton.classList.add("blb");
    buyButton.classList.remove("blr");
    this.isBuySelected = true;

  }
}
