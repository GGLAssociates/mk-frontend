import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from './auth/auth.service';
import { ToolbarService } from './toolbar/toolbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  constructor(private authService: AuthService, public toolbarService: ToolbarService, router: Router){
    router.events.subscribe(res => {
      if(res instanceof NavigationEnd){
        this.authService.getToken();
      }
    });
  }

  ngOnInit(): void {
    this.authService.getToken();
  }


}
