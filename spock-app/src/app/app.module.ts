import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ProfileDetailsComponent } from './components/profile-details/profile-details.component';
import { StockDataComponent } from './components/stock-data/stock-data.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { PlayerListComponent } from './components/player-list/player-list.component';
import { NftClaimComponent } from './components/nft-claim/nft-claim.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavigationComponent,
    ProfileDetailsComponent,
    StockDataComponent,
    LineChartComponent,
    PlayerListComponent,
    NftClaimComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
