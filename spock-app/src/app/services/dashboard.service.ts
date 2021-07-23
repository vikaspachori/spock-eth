import { Injectable } from '@angular/core';
import { AssetPlayer, TrendinPlayers } from '../models/assetplayer.model';

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

  getTrendingPlayers(): Array<TrendinPlayers> {
    return [
      {
        name: "Virat Kohli",
        price: "$2.42",
        change: 12,
        marketcap: "$399.8M",
        isFavruit: true
      },
      {
        name: "Rafael Nadal",
        price: "$7.42",
        change: 11,
        marketcap: "$152.8M",
        isFavruit: false
      },
      {
        name: "Lebron James",
        price: "$0.0814",
        change: 7,
        marketcap: "$1.2BM",
        isFavruit: false
      },
      {
        name: "Lionel Messi",
        price: "$30.68",
        change: 6.80,
        marketcap: "$399.8M",
        isFavruit: true
      }
    ]
  }
}
