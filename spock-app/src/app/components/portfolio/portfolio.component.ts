import { Component, OnInit } from '@angular/core';
import { MatchContractsService } from 'src/app/services/match-contracts.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor(private contractSerice: MatchContractsService) { }
  portfolioData: any;
  async ngOnInit() {
    this.portfolioData = await this.contractSerice.getUserStock()
    debugger;
  }

}
