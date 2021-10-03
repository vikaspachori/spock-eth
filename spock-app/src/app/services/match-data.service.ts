import { Injectable } from '@angular/core';
import { MatchData } from '../models/match.model';

@Injectable({
  providedIn: 'root'
})
export class MatchDataService {

  constructor() { }
  getMatchData(): Array<MatchData> {
    const matchData = [
      {
        number: "1",
        place: "Dubai",
        team1: "KKR",
        team2: "RR",
        time: "Today"
      },
      {
        number: "2",
        place: "Carrara",
        team1: "CSK",
        team2: "RCB",
        time: "Today"
      },
      {
        number: "3",
        place: "Dubai",
        team1: "SRH",
        team2: "DD",
        time: "Today"
      },
      {
        number: "5",
        place: "Dubai",
        team1: "RCB",
        team2: "PBKS",
        time: "Today"
      },
      {
        number: "1",
        place: "Dubai",
        team1: "KKR",
        team2: "RR",
        time: "Today"
      },
      {
        number: "1",
        place: "Dubai",
        team1: "KKR",
        team2: "RR",
        time: "Today"
      }
    ]
    return matchData;
  }
}
