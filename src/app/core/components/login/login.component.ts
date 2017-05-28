import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../services/index';
import { UserLogin } from '../../models/index';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    // TODO: Login
    // Once backend is ready, adjust accordingly
    input: UserLogin = {
        username: '',
        password: ''
    };

    constructor(private _userService: UserService) { }

    submit() {
        // TODO: Login
        // Once backend is ready, adjust accordingly
        this._userService.login(this.input);
    }

    ngOnInit() { }
}
