import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Server } from '../app.model';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: HttpClient) {
  }

  getServers(): Observable<Server[]>{
    return this.http.get<string>(`${environment.apiEndpoint}/servers`).pipe(map(x => JSON.parse(x)));
  }

  createServer(worldName: string): Observable<any> {
    return this.http.post<any>(`${environment.apiEndpoint}/create_server`, {worldName});
  }

}
