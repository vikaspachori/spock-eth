import { Injectable } from '@angular/core';
import { AssetPlayer } from '../models/assetplayer.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  getAsset(): Array<AssetPlayer> {
    const players = [
      {
        count: "10",
        money: "$27.480",
        sports: "cricket",
        status: 1.2
      },
      {
        count: "13",
        money: "$27.480",
        sports: "football",
        status: -8
      },
      {
        count: "10",
        money: "$27.480",
        sports: "basketball",
        status: 5
      }
    ]
    return players;
  }
}
