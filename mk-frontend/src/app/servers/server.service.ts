import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Server } from '../app.model';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: HttpClient) {
  }

  getServers(): Observable<Server[]>{
    return this.http.get<Server[]>(`${environment.apiEndpoint}/servers`);
  }
}
