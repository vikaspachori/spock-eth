import { Component, OnInit } from '@angular/core';
import { MatchContractsService } from 'src/app/services/match-contracts.service';
import {MatTableDataSource} from '@angular/material/table'; 
import { MatTable } from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';

export interface Player {
  a: string;
  b: number;
  c: number;
  d: string;
  e: string;
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})




export class PortfolioComponent implements OnInit {

  temp: Player[] = [];
  dataSource;
  displayedColumns: string[] = ['a', 'b', 'c', 'd', 'e'];
  constructor(private contractSerice: MatchContractsService) { 

    this.contractSerice.getUserStock().then((data) => {console.log(data);
      data.forEach(element => {
        let a = {} as Player;
        a.a = element[0];
        a.b = element[1];
        a.c = element[2];
        a.d = element[3];
        a.e = element[4];
        this.temp.push(a);
        
      });
      
       console.log(this.temp);
      this.dataSource = new MatTableDataSource(this.temp);});
    

  }


  async ngOnInit() {
 
    
  //  debugger;
  }

}
