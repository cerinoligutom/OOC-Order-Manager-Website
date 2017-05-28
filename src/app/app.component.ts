import { Component } from '@angular/core';
import { UserService } from './core/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private _userService: UserService) { }

  isLoggedIn() {
    return this._userService.isLoggedIn();
  }
}
