import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface RoleData {
  screenId: string;
  menuName: string;
  access: boolean;
  add: boolean;
  edit: boolean;
  delete: boolean;
  view: boolean;
  channels: string;
  menuOrder: string;
}

@Component({
  selector: 'app-manage-role',
  templateUrl: './manage-role.component.html',
  styleUrls: ['./manage-role.component.scss']
})
export class ManageRoleComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['screenId', 'menuName', 'access', 'add', 'edit'
    , 'delete', 'view', 'channels', 'menuOrder'];
  dataSource: MatTableDataSource<RoleData>;

  constructor() {
    // Create 100 users
    const users = Array.from({length: 10}, (_, k) => CreateNewRole(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}

/** Builds and returns a new User. */
function CreateNewRole(id: number): RoleData {

  return {
    screenId: id.toString(),
    menuName: 'Menu Name',
    access: true,
    add: true,
    edit: false,
    delete: false,
    view: true,
    channels: 'Internet',
    menuOrder: id.toString()
  };

  // screenId: string;
  // menuName: string;
  // access: string;
  // add: string;
  // edit: string;
  // delete: string;
  // view: string;
  // channels: string;
  // menuOrder: string;
}
