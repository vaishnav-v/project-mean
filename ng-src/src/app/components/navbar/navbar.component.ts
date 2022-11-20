import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.nav()

  }
  nav() {
    var navInput = document.querySelector(".search-container input")
    console.log(navInput?.classList.toggle('active'));
  }
}
