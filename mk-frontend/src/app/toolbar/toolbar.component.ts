import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../auth/auth.service';
import { LoginComponent } from '../auth/login.component';
import { DialogService } from '../common/dialog/dialog.service';
import { ToolbarService } from './toolbar.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(private toolbarService: ToolbarService,
              private matDialog: MatDialog,
              public authService: AuthService,
              private dialogService: DialogService) { }

  ngOnInit(): void {
  }

  onSidenavOpenClicked() {
    this.toolbarService.sidebarSubject.next(true);
  }

  openLoginDialog(){
    this.matDialog.open(LoginComponent)
  }

  onLogoutClicked(){
    this.dialogService.confirm('Logout', 'Are you sure you would like to log out?').subscribe(res => {
      if(res){
        this.authService.logout();
      }
    });
  }

}
