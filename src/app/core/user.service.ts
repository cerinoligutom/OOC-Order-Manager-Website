import { Injectable } from '@angular/core';
import { UserLogin } from '../models/index';
import * as _ from 'lodash';

@Injectable()
export class UserService {
    user: UserLogin;
    isLoggedIn = false;

    login(input: UserLogin) {
        // TODO: Login
        // Once backend is ready, adjust accordingly
        const admin: UserLogin = {
            username: 'admin',
            password: 'password'
        };

        if (_.isEqual(input, admin)) {
            console.log('Login Successful');
            // Redirect
        } else {
            console.log('Wrong Password');
        }
    }
}
