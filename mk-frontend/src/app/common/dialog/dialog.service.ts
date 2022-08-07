import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ConfirmDialogComponent } from './confirm-dialog.component';
import { MessageDialogComponent } from './message-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  confirm(heading: string, message: string): Observable<boolean>{
    const ref = this.dialog.open(ConfirmDialogComponent, {data: {
      heading,
      message
    }});
    return ref.afterClosed();
  }

  message(heading: string, message: string) {
    this.dialog.open(MessageDialogComponent, {data:{
      heading,
      message
    }});
  }

}
