import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Server, ServerStatus, ServerStatusColour, ServerStatusLabel } from '../app.model';
import { AuthService } from '../auth/auth.service';
import { DialogService } from '../common/dialog/dialog.service';
import { CreateServerDialogComponent } from './create-server-dialog.component';
import { ServerService } from './server.service';

@Component({
  selector: 'app-servers-summary',
  templateUrl: './servers-summary.component.html',
  styleUrls: ['./servers-summary.component.scss']
})
export class ServersSummaryComponent implements OnInit {

  constructor(private serversService: ServerService, 
              public authService: AuthService, 
              public matDialog: MatDialog,
              public dialogService: DialogService) { }
  ServerStatusLabel = ServerStatusLabel;
  ServerStatusColour = ServerStatusColour;
  servers: Server[] = [];
  loadingServers: boolean = false;

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.dialogService.showWarningMessage('test')
    this.loadingServers = true;
    this.serversService.getServers().subscribe(res => {
      this.servers = res;
      this.loadingServers = false;
    });
  }

  refreshServers(){
    this.loadData();
  }

  onAddServerClicked(){
    const dialog = this.matDialog.open(CreateServerDialogComponent);
    dialog.afterClosed().subscribe((res) => {
      if(res){
        this.servers.push(res);
      }
    });
  }

  closeServer(server: Server) {
    this.dialogService.confirm('Confirm', 'Are you sure you want to shut down the server').subscribe(res => {
      if(res){
        this.serversService.stopWorld(server.id).subscribe(x => {
          if(x?.success){
            server.serverStatus = ServerStatus.PendingDown;
          }else{
            //snackbar
          }
        });
      }
    });
  }

  startWorld(server: Server){
    this.serversService.startWorld(server.id).subscribe(res => {
      if(res?.success){
        server.serverStatus = ServerStatus.PendingUp;
      } else {
        //snackbar
      }
    });
  }

  deleteWorld(server: Server) {
    this.dialogService.confirm('Confirm', 'Are you sure you want to delete this world?').subscribe(ok => {
      if(ok){
        this.serversService.deleteWorld(server.id).subscribe(res => {
          if(res?.success){
            this.servers = this.servers.filter(x => x.id !== server.id);
          } else {
            //snackbar
          }
        });
      }
    })
  }
}
