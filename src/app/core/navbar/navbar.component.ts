import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
     <nav class="navbar navbar-expand navbar-dark bg-dark">
      <a class="navbar-brand" href="#">Navbar</a>
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav  ">
            <a class="nav-item nav-link "  routerLinkActive ="active" href="#" routerLink="/home">Home</a>
            <a class="nav-item nav-link " routerLinkActive ="active" href="#" routerLink="/users" >M2D</a>
            <a class="nav-item nav-link " routerLinkActive ="active" href="#" routerLink="/contacts">Darwin</a>
          </div>
        </div>
      </div>
    </nav>
  `,
  styles: [
  ]
})
export class NavbarComponent {

}
