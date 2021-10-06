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
    if (this.playerData) {
      const broken = this.playerData.description.split("<br />");
      this.playerData.description = broken.slice(1, broken.length - 3).join("").replace(/(\r\n|\n|\r)/gm, "");;
    }
  }

  getImageUrl(playerid) {
    return environment.imageUrl.replace('{0}', playerid)
  }

}
