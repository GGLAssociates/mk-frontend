import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NewServer } from '../app.model';
import { ServerService } from './server.service';

@Component({
  selector: 'app-create-server-dialog',
  templateUrl: './create-server-dialog.component.html',
  styleUrls: ['./create-server-dialog.component.scss']
})
export class CreateServerDialogComponent implements OnInit {

  newServer: NewServer = {name: ''};

  constructor(private dialogRef: MatDialogRef<CreateServerDialogComponent>, private serverService: ServerService) { }



  ngOnInit(): void {
  }

  onCancelClicked(){
    this.dialogRef.close(false);
  }

  onAddClicked(){
    if(this.validateCreateServer()){
      this.serverService.createServer(this.newServer.name).subscribe(res => {
        console.log(res)
        if(res){
          this.dialogRef.close(true);
        }
      });
    }
  }

  validateCreateServer(){
    const isOk = !!this.newServer.name;

    return isOk;
  }

}
