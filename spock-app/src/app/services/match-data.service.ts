import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MatchData } from '../models/match.model';
import { Player } from '../models/player.model';
import { PlayerStats, PlayerStatsResponse } from '../models/playerstats.model';

@Injectable({
  providedIn: 'root'
})
export class MatchDataService {

  constructor(private httpClient: HttpClient) { }
  getMatchData(): Observable<MatchData> {
    const apiUrl = `${environment.apiUrl}matches?update=false`;
    return this.httpClient.get<MatchData>(apiUrl);
  }

  getTeamplayer(teamname): Observable<Array<Player>> {
    const apiUrl = `${environment.apiUrl}players/team/${teamname}`;
    return this.httpClient.get<Array<Player>>(apiUrl)
  }

  getPlayerStats(playerid): Observable<PlayerStatsResponse> {
    const apiUrl = `${environment.apiUrl}players/${playerid}?update=false`;
    return this.httpClient.get<PlayerStatsResponse>(apiUrl);
  }
}
