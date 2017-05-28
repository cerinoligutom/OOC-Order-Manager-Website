import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as _ from 'lodash';

import { UserLogin } from '../models/index';

@Injectable()
export class UserService {
    private _user: UserLogin;

    constructor(private _router: Router) { }

    login(input: UserLogin, ) {
        // TODO: Login
        // Once backend is ready, adjust accordingly
        const admin: UserLogin = {
            username: 'admin',
            password: 'password'
        };


        if (_.isEqual(input, admin)) {
            console.log('Login Successful');
            // Redirect to dashboard
            localStorage.setItem('user', JSON.stringify(admin));
            const route = ['/dashboard'];
            this._router.navigate(route);
        } else {
            console.log('Wrong Password');
        }
    }

    logout() {
        localStorage.removeItem('user');
    }

    isLoggedIn() {
        return Boolean(localStorage.getItem('user'));
    }
}
