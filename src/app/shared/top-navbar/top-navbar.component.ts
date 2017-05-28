import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface NavbarItem {
  text: string;
  callback: () => void;
}

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.scss']
})
export class TopNavbarComponent implements OnInit {

  private username: string;

  constructor(private _router: Router) {
    // TODO:
    // Username should be retrieved by a service
    this.username = 'Admin';
  }

  ngOnInit() {
  }

  navigateToNewsfeed() {
    const route = ['/feed'];
    this._router.navigate(route);
    return false;
  }

  navigateToDashboard() {
    const route = ['/dashboard'];
    this._router.navigate(route);
  }

  navigateToProfilePage() {
    // TODO:
    // A service should get the userId of the current logged in user
    const userId = 1;
    const route = ['/user', userId];
    this._router.navigate(route);
  }

  navigateToSettingsPage() {
    const route = ['/settings'];
    this._router.navigate(route);
  }

  logout() {
    // TODO:
    // A service should handle the clearing of chosen web storage.
    // Then redirect the user to the home page
    const route = ['/'];
    this._router.navigate(route);
  }
}
