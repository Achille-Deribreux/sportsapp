import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isMobileNavOpen: boolean = false;

  toggleMobileNav() {
    console.log("toggle")
    this.isMobileNavOpen = !this.isMobileNavOpen;
  }

}
