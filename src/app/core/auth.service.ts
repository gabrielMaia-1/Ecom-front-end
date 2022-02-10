import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { mapTo, tap } from 'rxjs';
import { API_ROUTE_AUTH } from '../shared/constants';
import { LoginModel } from '../shared/interfaces/LoginModel';
import { LoginResponse } from '../shared/interfaces/LoginResponse';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private _api : ApiService, private _router: Router) { }

  isAuthenticated() {
    return localStorage.getItem('token') ? true : false;
  }

  login(creadentials :LoginModel) {
    return this._api.post<LoginResponse>(API_ROUTE_AUTH, creadentials)
      .pipe(
        tap(res => this.setToken(res)),
        mapTo(true)
      );
  }

  logout(){
    localStorage.removeItem('token');
    this._router.navigate(['/login'])
  }

  private setToken(res: LoginResponse): void {
    localStorage.setItem('token', res.token);
  }

  getToken() {
    return localStorage.getItem('token');
  }


}
