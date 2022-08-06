import { Component, OnInit } from '@angular/core';
import { ToolbarService } from './toolbar/toolbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  constructor(public toolbarService: ToolbarService){}

  ngOnInit(): void {
    
  }


}
