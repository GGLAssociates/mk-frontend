import { Component, OnInit } from '@angular/core';
import { ToolbarService } from './toolbar.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(private toolbarService: ToolbarService) { }

  ngOnInit(): void {
  }

  onSidenavOpenClicked(){
    this.toolbarService.sidebarSubject.next(true);
  }

}
