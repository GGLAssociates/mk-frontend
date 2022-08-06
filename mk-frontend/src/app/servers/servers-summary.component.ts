import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Server } from '../app.model';
import { AuthService } from '../auth/auth.service';
import { CreateServerDialogComponent } from './create-server-dialog.component';
import { ServerService } from './server.service';

@Component({
  selector: 'app-servers-summary',
  templateUrl: './servers-summary.component.html',
  styleUrls: ['./servers-summary.component.scss']
})
export class ServersSummaryComponent implements OnInit {

  constructor(private serversService: ServerService, public authService: AuthService, public matDialog: MatDialog) { }

  servers: Server[] = [];

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.serversService.getServers().subscribe(res => {
      this.servers = res;
    });
  }

  onAddServerClicked(){
    const dialog = this.matDialog.open(CreateServerDialogComponent);
    dialog.afterClosed().subscribe((res: boolean) => {
      if(res){
        this.loadData();
      }
    });
  }

}
