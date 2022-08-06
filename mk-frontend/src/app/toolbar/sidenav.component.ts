import { Component, OnInit } from '@angular/core';
import { ToolbarService } from './toolbar.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor(private toolbarService: ToolbarService) { }

  ngOnInit(): void {
  }

  onLinkClicked(): void {
    this.toolbarService.sidebarSubject.next(false);
  }

}
