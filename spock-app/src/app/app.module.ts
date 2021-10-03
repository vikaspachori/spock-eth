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
import { LoginComponent } from './components/login/login.component';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MatchCardComponent } from './components/match-card/match-card.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavigationComponent,
    ProfileDetailsComponent,
    StockDataComponent,
    LineChartComponent,
    PlayerListComponent,
    NftClaimComponent,
    LoginComponent,
    MainContainerComponent,
    MatchCardComponent
  ],
  imports: [
    BrowserModule,
    SlickCarouselModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
