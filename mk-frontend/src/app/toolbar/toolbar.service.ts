import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToolbarService {

  constructor() { }

  sidebarSubject = new BehaviorSubject(false);
  sidebarSubject$ = this.sidebarSubject.asObservable();
}
