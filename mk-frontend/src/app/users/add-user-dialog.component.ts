import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Option, User } from '../app.model';
import { Role, RoleLabel } from '../auth/auth.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-add-user-dialog',
  templateUrl: './add-user-dialog.component.html',
  styleUrls: ['./add-user-dialog.component.scss']
})
export class AddUserDialogComponent implements OnInit {

  user: User = new User();
  roles = [...RoleLabel.entries()].map(([id,name])=>({id, name} as Option<Role, string>));
  validationMessage: string = '';

  constructor(private dialogRef: MatDialogRef<AddUserDialogComponent>,
              private userService: UserService) { }

  ngOnInit(): void {
  }

  onCancelClicked(){
    this.dialogRef.close();
  }

  onAddClicked() {
    if(this.validateUser()){
      this.userService.addUser(this.user).subscribe(res => {
        if(res?.success){
          this.user.password = undefined;
          this.dialogRef.close(this.user);
        } else {
          this.validationMessage = res?.message;
        }
      });
    }
  }

  validateUser() {
    return this.user.roleId && this.user.username;
  }
}
