import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WalletService } from 'src/app/services/wallet.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private walletService: WalletService, private router: Router) { }

  async ngOnInit() {
    if (localStorage.getItem("walletid")) {
      this.router.navigateByUrl("/");
      return;
    }
    const data = await this.walletService.connectAccount();
    if (data) {
      localStorage.setItem("walletid", data)
    }

  }

}
