import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, take } from 'rxjs/operators';
import { Player } from 'src/app/models/player.model';
import { Teams } from 'src/app/models/team.enum';
import { MatchDataService } from 'src/app/services/match-data.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {
  constructor(private matchService: MatchDataService, private router: Router) { }
  teamNames = [];
  players: Array<Player>
  ngOnInit(): void {
    for (const item in Teams) {
      if (isNaN(Number(item))) {
        this.teamNames.push(item)
      }
    }
  }
  onPlayerSelect(player: Player) {
    this.router.navigate(["player", player.id]);
  }
  onTeamSelect(teamName, evt) {
    const elmSected = document.getElementsByClassName("selected")[0];
    if (elmSected) {
      elmSected.classList.remove("selected")
    }
    const element = document.getElementById(teamName);
    element.classList.add("selected")
    this.matchService.getTeamplayer(teamName).pipe(
      take(1),
      map((d: any) => d.data.playerDiscoveryV2)
    ).subscribe((data: Array<Player>) => {
      this.players = [...data];
    })
  }

}
