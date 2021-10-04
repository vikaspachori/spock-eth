import { Component, OnInit } from '@angular/core';
import { Teams } from 'src/app/models/team.enum';
import { MatchDataService } from 'src/app/services/match-data.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {
  constructor(private matchService: MatchDataService) { }
  teamNames = []
  ngOnInit(): void {
    for (const item in Teams) {
      if (isNaN(Number(item))) {
        this.teamNames.push(item)
      }
    }
  }

  onTeamSelect(teamName) {

  }

}
