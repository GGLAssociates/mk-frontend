import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoggedInUser, LoginResult, Role } from './auth.model';
import { BehaviorSubject, filter, ReplaySubject, shareReplay, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import * as moment from 'moment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) {
  }
  
  Role = Role;
  
  loggedInUser?: LoggedInUser;

  login(username: string, password: string) {
      return this.http.post<LoginResult>(`${environment.apiEndpoint}/login`, {username, password});
  }

  setSession(authToken: string) {
    localStorage.setItem('token', authToken);
    this.getToken();
  }          

  logout() {
      localStorage.removeItem('token');
      this.loggedInUser = undefined;
      this.router.navigateByUrl('/');
  }

  getToken() {
    const token = localStorage.getItem("token");
    if(token){
      const decodedToken: any = JSON.parse(window.atob(token.split('.')[1]));
      const decodedTokenExp = moment(decodedToken.exp);
      if(decodedTokenExp.isBefore(moment())){
        this.logout();
      }else{
        this.loggedInUser = decodedToken;
      }
    }else{
      this.logout();
    }
    return this.loggedInUser;
  }
}
