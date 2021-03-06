import { Component, Input, OnInit } from '@angular/core';
import { MatchData } from 'src/app/models/match.model';
import { MatchDataService } from 'src/app/services/match-data.service';

@Component({
  selector: 'app-match-card',
  templateUrl: './match-card.component.html',
  styleUrls: ['./match-card.component.scss']
})
export class MatchCardComponent implements OnInit {
  @Input()
  matchData: MatchData

  constructor() { }
  ngOnInit(): void {
    console.log(this.matchData)

  }
  getMatchdate(dateString) {
    const date = new Date(parseInt(dateString))
    return date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()
  }
  getClassName(team) {
    team = team.toLowerCase();
    return "card-logo " + team;
  }

  onClickCard(matchid) {
    debugger;
  }
}
