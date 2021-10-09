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
import { ProfileContainerComponent } from './components/profile-container/profile-container.component';
import { StatisticComponent } from './components/statistic/statistic.component';
import { ProfileDescriptionComponent } from './components/profile-description/profile-description.component';
import { OrderBookComponent } from './components/order-book/order-book.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ToastrModule } from "ngx-toastr";
import { MatTableModule } from '@angular/material/table';
import {MatTableDataSource} from '@angular/material/table'; 
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list'; 
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
    MatchCardComponent,
    ProfileContainerComponent,
    StatisticComponent,
    ProfileDescriptionComponent,
    OrderBookComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    SlickCarouselModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
