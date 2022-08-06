import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent {

  heading: string = '';
  message: string = '';

  constructor(private dialogRef: MatDialogRef<ConfirmDialogComponent>,  @Inject(MAT_DIALOG_DATA) data: any) {
    if(data){
      this.heading = data.heading;
      this.message = data.message;
    }
   }

  onOptionClicked(res: boolean){
    this.dialogRef.close(res);
  }

}
