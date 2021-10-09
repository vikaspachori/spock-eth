import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-nft-claim',
  templateUrl: './nft-claim.component.html',
  styleUrls: ['./nft-claim.component.scss']
})
export class NftClaimComponent implements OnInit {

  images: string[] = []
  constructor() {

    this.images.push("heather-knight-1600x904.jpeg");
    this.images.push("malinga_selected-for-2015-wc.jpeg");
    this.images.push("raina_rahul_in_the_frame_cr.jpeg");
    this.images.push("sam-curranfull.webp");
    this.images.push("virat.webp");
  }


  ngOnInit(): void {
  }

}
