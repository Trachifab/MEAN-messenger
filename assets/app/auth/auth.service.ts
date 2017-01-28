import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/Rx';

import {User} from './user.model';

@Injectable()
export class AuthService {

    constructor(private http: Http) {}

    signup(user: User) {
        const body = JSON.stringify(user);
        const headers = new Headers({
            'Content-Type': 'application/json'
        });
        return this.http.post('http://localhost:3000/user', body, {headers: headers})
            .map((res) => res.json())
            .catch((error) => Observable.throw(error.json()));  
    }

    signin(user: User) {
        const body = JSON.stringify(user);
        const headers = new Headers({
            'Content-Type': 'application/json'
        });
        return this.http.post('http://localhost:3000/user/signin', body, {headers: headers})
            .map((res) => res.json())
            .catch((error) => Observable.throw(error.json()));  
    }

}