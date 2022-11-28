import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuModel } from 'src/app/documentation/menu-model';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  display=false
  items!: MenuItem[];
  constructor() { }

  ngOnInit(): void {
    var model = new MenuModel()
    this.items = model.model
  }
  nav() {
    var navInput = document.querySelector(".search-container input")
    console.log(navInput?.classList.toggle('active'));
  }
  setVisible(){
    this.display=true
  }
}
