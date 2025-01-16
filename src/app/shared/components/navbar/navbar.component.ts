import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'portfolio-navbar',
  standalone: true,
  imports: [RouterModule, NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  showMenu = false;

  constructor(public router: Router) {}

  toggleNavbar() {
    this.showMenu = !this.showMenu;
  }
}
