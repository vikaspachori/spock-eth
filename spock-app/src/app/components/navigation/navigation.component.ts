import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WalletService } from 'src/app/services/wallet.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private router: Router, private wallet: WalletService) { }

  ngOnInit(): void {
    if (window.location.href.includes("players")) {
      document.getElementById("profile").classList.add("nav-selected");
    }
    else if (window.location.href.includes("portfolio")) {
      document.getElementById("home").classList.add("nav-selected")
    }
    else {
      document.getElementById("home").classList.add("nav-selected")
    }
  }
  itemClick(evt, url) {
    const elm = (evt.target as Element);
    const selectedClass = document.getElementsByClassName("nav-selected");
    for (let index = 0; index < selectedClass.length; index++) {
      const element = selectedClass[index];
      element.classList.remove("nav-selected")
    }
    elm.classList.add("nav-selected")
    this.router.navigateByUrl(url)
  }

  logout() {
    const data = this.wallet.web3Modal.clearCachedProvider();
    localStorage.clear()
    window.location.reload();
  }
}
