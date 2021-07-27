import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (window.location.href.includes("profile")) {
      document.getElementById("profile").classList.add("nav-selected");
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
}
