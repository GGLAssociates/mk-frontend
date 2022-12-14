import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent implements OnInit {

  constructor( @Inject(MAT_SNACK_BAR_DATA) public data: any, private snackbarRef: MatSnackBarRef<SnackbarComponent>) {

    this.message = data?.message;
    this.colour = data?.colour;
   }

  colour: string = '';
  message: string = '';

  ngOnInit(): void {
  }

  close(){
    this.snackbarRef.dismiss();
  }
}
