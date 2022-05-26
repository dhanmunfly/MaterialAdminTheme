import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  isMenuExpanded: boolean = true;
  selectedMenuItem: string = 'home';

  constructor(private sidebarService: SidebarService) {
    this.sidebarService.menuExpand$.subscribe(res => {
      this.isMenuExpanded = res;
    })
  }

  ngOnInit(): void {
  }

  onSelectMenuItem(params:string) {
    this.selectedMenuItem = params;
  }

}