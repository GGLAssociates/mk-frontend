import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-message-dialog',
  templateUrl: './message-dialog.component.html',
  styleUrls: ['./message-dialog.component.scss']
})
export class MessageDialogComponent {

  heading: string = '';
  message: string = '';

  constructor(private dialogRef: MatDialogRef<MessageDialogComponent>,  @Inject(MAT_DIALOG_DATA) data: any) {
    if(data){
      this.heading = data.heading;
      this.message = data.message;
    }
   }

  onOptionClicked(res: boolean) {
    this.dialogRef.close(res);
  }

}
