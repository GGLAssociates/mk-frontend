import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ActionResult, User } from '../app.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${environment.apiEndpoint}/users`);
  }

  addUser(user: User): Observable<ActionResult> {
    return this.httpClient.post<ActionResult>(`${environment.apiEndpoint}/register`, user)
  }

  editUser(user: User): Observable<ActionResult> {
    return this.httpClient.put<ActionResult>(`${environment.apiEndpoint}/user/${user.id}`, user);
  }

  deleteUser(user: User): Observable<ActionResult> {
    return this.httpClient.delete<ActionResult>(`${environment.apiEndpoint}/user/${user.id}`);
  }

}
