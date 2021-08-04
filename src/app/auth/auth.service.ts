import { tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  user: object;
  token: string;
  tenat: string = '4db498e8-c92c-4325-89a5-013110d3687f';
  apiDg: string = 'https://budgetapp.digitalcube.rs/api/tenants/';

  constructor(private http: HttpClient) {}

  get(key: string) {
    let jwt = localStorage.getItem(key);
    if (jwt) {
      return JSON.parse(jwt).token;
    }
  }

  createAccount(username: string, password: string) {
    return this.http
      .post(this.apiDg + this.tenat + '/users', {
        username: username,
        password: password,
      })
      .pipe(
        tap((res) => {
          localStorage.setItem('user', JSON.stringify(res));
        })
      );
  }

  login(username: string, password: string) {
    return this.http
      .post(this.apiDg + this.tenat + '/sessions', {
        username: username,
        password: password,
      })
      .pipe(
        tap((res) => {
          localStorage.setItem('user', JSON.stringify(res));
        })
      );
  }
  logout() {
    const tk = this.get('user');
    return this.http.delete(this.apiDg + this.tenat + '/sessions', {
      headers: new HttpHeaders({ Authorization: 'Bearer ' + tk }),
    });
  }
}
