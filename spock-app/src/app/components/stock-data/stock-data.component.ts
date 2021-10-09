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
  constructor() { }

  buyClick() {
    const val = document.getElementById("total") as any;
    this.onBuyClick.emit({
      numbers: 1,
      price: this.data.marketprice,
      total: val.value
    })
  }
  sellStock() {
    debugger;
    const data = {
      count: 1
    }
    this.onSellClick.emit(data)
  }
}
