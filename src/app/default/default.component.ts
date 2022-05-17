import { Component, OnInit } from '@angular/core';
import { SidebarService } from '@services/sidebar.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  isMenuExpanded: boolean = true;

  constructor(private sidebarService: SidebarService) { 
    this.sidebarService.menuExpand$.subscribe(res => {
      this.isMenuExpanded = res;
    })
  }

  ngOnInit(): void {
  }

}
