import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { NftClaimComponent } from './components/nft-claim/nft-claim.component';
import { PlayerListComponent } from './components/player-list/player-list.component';
import { ProfileContainerComponent } from './components/profile-container/profile-container.component';
import { ProfileDetailsComponent } from './components/profile-details/profile-details.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';

const routes: Routes = [
  {
    path: "",
    component: MainContainerComponent,
    canActivate: [AuthGuardGuard],
    children: [
      {
        path: "",
        component: DashboardComponent
      },
      {
        path: "player/:id",
        component: ProfileContainerComponent,
      },
      {
        path: "players",
        component: PlayerListComponent,
      },
      {
        path: "nftclaim",
        component: NftClaimComponent,
      },
    ]
  },

  {
    path: "login",
    component: LoginComponent
  },
  { path: '**', redirectTo: "/" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
