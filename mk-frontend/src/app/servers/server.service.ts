import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Observer } from 'rxjs';
import { Action } from 'rxjs/internal/scheduler/Action';
import { environment } from 'src/environments/environment';
import { ActionResult, Server } from '../app.model';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: HttpClient) {
  }

  getServers(): Observable<Server[]>{
    return this.http.get<string>(`${environment.apiEndpoint}/servers`).pipe(
        map(x => JSON.parse(x))
      );
  }

  createServer(worldName: string): Observable<ActionResult> {
    return this.http.post<ActionResult>(`${environment.apiEndpoint}/create_server`, {worldName});
  }

  stopWorld(serverId: number): Observable<ActionResult> {
    return this.http.put<ActionResult>(`${environment.apiEndpoint}/stop_world/${serverId}`, {});
  }

  startWorld(serverId: number): Observable<ActionResult> {
    return this.http.put<ActionResult>(`${environment.apiEndpoint}/start_world/${serverId}`, {});
  }

  deleteWorld(serverId: number): Observable<ActionResult> {
    return this.http.delete<ActionResult>(`${environment.apiEndpoint}/world/${serverId}`);
  }

}
