import { Component, Input, OnInit } from '@angular/core';
import { PlayerStats } from 'src/app/models/playerstats.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile-description',
  templateUrl: './profile-description.component.html',
  styleUrls: ['./profile-description.component.scss']
})
export class ProfileDescriptionComponent implements OnInit {

  @Input()
  playerData: PlayerStats;
  constructor() { }
  ngOnInit(): void {

  }

  getImageUrl(playerid){
    return environment.imageUrl.replace('{0}',playerid)
  }

}
