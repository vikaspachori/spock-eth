import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NftClaimComponent } from './components/nft-claim/nft-claim.component';
import { PlayerListComponent } from './components/player-list/player-list.component';
import { ProfileDetailsComponent } from './components/profile-details/profile-details.component';

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent
  },
  {
    path: "player/:id",
    component: ProfileDetailsComponent
  },
  {
    path: "players",
    component: PlayerListComponent
  },
  {
    path: "nftclaim",
    component: NftClaimComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
