import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, take } from 'rxjs/operators';
import { PlayerStats } from 'src/app/models/playerstats.model';
import { MatchDataService } from 'src/app/services/match-data.service';
import { PlayerListComponent } from '../player-list/player-list.component';

@Component({
  selector: 'app-profile-container',
  templateUrl: './profile-container.component.html',
  styleUrls: ['./profile-container.component.scss']
})
export class ProfileContainerComponent implements OnInit {

  constructor(private matchService: MatchDataService, private router: ActivatedRoute) { }
  playerData: PlayerStats;
  playerId: any;
  playerPrice: any;
  ngOnInit(): void {
    this.router.paramMap.pipe(take(1)).subscribe(d => {
      this.playerId = d.get("id");
      this.matchService.getPlayerStats(this.playerId).pipe(take(1), map((d: any) => {
        this.playerPrice = d.price
        return d.data.getPlayersProfileV2
      })).subscribe(finaldata => {
        this.playerData = finaldata;
      }, err => {
        alert("something went wrong")
      })
    })
  }

}
