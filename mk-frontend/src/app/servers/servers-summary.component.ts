import { Component, OnInit } from '@angular/core';
import { Server } from '../app.model';
import { AuthService } from '../auth/auth.service';
import { ServerService } from './server.service';

@Component({
  selector: 'app-servers-summary',
  templateUrl: './servers-summary.component.html',
  styleUrls: ['./servers-summary.component.scss']
})
export class ServersSummaryComponent implements OnInit {

  constructor(private serversService: ServerService, public authService: AuthService) { }

  servers: Server[] = [];

  ngOnInit(): void {
    this.serversService.getServers().subscribe(res => {
      this.servers = res;
    });
  }

}
