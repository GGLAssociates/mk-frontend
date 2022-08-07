import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DisplayUser, Option, User } from '../app.model';
import { Role, RoleLabel } from '../auth/auth.model';
import { AuthService } from '../auth/auth.service';
import { DialogService } from '../common/dialog/dialog.service';
import { AddUserDialogComponent } from './add-user-dialog.component';
import { UserService } from './user.service';

@Component({
  selector: 'app-users-summary',
  templateUrl: './users-summary.component.html',
  styleUrls: ['./users-summary.component.scss']
})
export class UsersSummaryComponent implements OnInit {

  constructor(public authService: AuthService,
              public userService: UserService,
              private dialogService: DialogService,
              private dialog: MatDialog,
              private router: Router) { }

  users: DisplayUser[] = [];
  roles = [...RoleLabel.entries()].map(([id, name]) => ({id, name} as Option<Role, string>));
  loadingUsers: boolean = false;
  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.loadingUsers = true;
    this.userService.getUsers().subscribe(res => {
      this.users = res.map(x => ({...x,initialUser: JSON.parse(JSON.stringify(x)), editMode: false}));
      this.loadingUsers = false;
    });
  }

  onAddUserClicked() {
    const dialogRef = this.dialog.open(AddUserDialogComponent);
    dialogRef.afterClosed().subscribe(res => {
      if(res){
        this.loadData();
      }
    });
  }

  onSaveUserClicked(user: DisplayUser) {
    if(!this.confirmAdminStillExists){
      this.dialogService.message('Error', 'Cannot remove last admin role');
      return;
    }
    this.userService.editUser(user).subscribe(res => {
      if(res?.success) {
        user.editMode = false;
        user.initialUser = {id: user.id, roleId: user.roleId, username: user.username} as User;
      } else {
        //snackbar
      }
    })
    
  }
  
  confirmAdminStillExists(){
    return this.users.some(u => u.roleId === Role.Admin);
  }

  onDeleteUserClicked(user: DisplayUser) {
    if(!this.confirmAdminStillExists()){
      this.dialogService.message('Error', 'Cannot remove last admin');
    }
    if(user.username === this.authService.loggedInUser?.username){
      this.dialogService.confirm('Confirm', 'Are you sure you would like to delete yourself?').subscribe(res => {
        if(res){
          this.deleteUser(user);
        }
      })
    } else {
      this.deleteUser(user);
    }
  }

  deleteUser(user: DisplayUser) {
    this.userService.deleteUser(user).subscribe(res => {
      if(res?.success) {
        if(user.username === this.authService.loggedInUser?.username){
          this.authService.logout();
          this.router.navigateByUrl('/');
        }
        this.users = this.users.filter(x => x.username !== user.username)
      } else {
        //snackbar
      }
    });
  }

  onEditUserClicked(user: DisplayUser) {
    user.editMode = true;
  }

  onCancelEditUserClicked(user: DisplayUser) {
    user.editMode = false;
    user.roleId = user.initialUser.roleId;
  }
}
