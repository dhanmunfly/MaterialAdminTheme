import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ConfirmDialogModel, DialogBoxComponent } from '@components/dialog-box/dialog-box.component';
import { ImService } from 'app/vendor/services/im.service';

export interface UserData {
  imname: string;
  nickname: string;
  city: string;
  phonenumber: string;
  businessgroup: string;
  debitaccnt: string;
  imlimit: string;
  limitexpiry: string;
  status: string;
}

/** Constants used to fill up our data base. */
const FRUITS: string[] = [
  'blueberry',
  'lychee',
  'kiwi',
  'mango',
  'peach',
  'lime',
  'pomegranate',
  'pineapple',
];
const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];


@Component({
  selector: 'app-manageim',
  templateUrl: './manageim.component.html',
  styleUrls: ['./manageim.component.scss']
})
export class ManageimComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['imname', 'nickname', 'city', 'phonenumber', 'businessgroup'
  , 'debitaccnt', 'imlimit', 'limitexpiry', 'status', 'action'];
  dataSource: MatTableDataSource<UserData>;
  result: string = '';

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  booksList = [];

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private _imService: ImService
    ) {
    // Create 100 users
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);

  }

  ngOnInit(): void {
    this.getApiData();
  }

  getApiData(){
     this._imService.getUsers().subscribe((data) => {
      console.log(data);
      this.booksList.push(data);
      console.log(this.booksList)
    });
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

  openDialog(action,obj) {
    switch (action) {
      case 'Update':
        this.router.navigate(["/vendor-finance/edit-im", obj.imname]);
        break;
      case 'Delete':
      case 'Deactivate':
        this.confirmDialog(action, obj);
        break;

      default:
        break;
    }
  }

  confirmDialog(action, obj): void {
    let message = ``;
    switch (action) {
      case 'Delete':
        message = `Are you sure you want to delete this?`;
        break;
      case 'Deactivate':
        message = `Are you sure you want to deactivate this?`;
        break;

      default:
        message = `Are you sure you want to do this?`;
        break;
    }

    const dialogData = new ConfirmDialogModel("Confirm Action", message);

    const dialogRef = this.dialog.open(DialogBoxComponent, {
      maxWidth: "400px",
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      this.result = dialogResult;
      switch (action) {
        case 'Delete':
          this.deleteIm();
          break;
        case 'Deactivate':
          this.deactivateIm();
          break;

        default:
          break;
      }
    });
  }

  deleteIm() {
    alert("IM will be deleted")
  }

  deactivateIm() {
    alert("IM will be deactivated")
  }

}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
    ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
    '.';

  return {
    imname: id.toString(),
    nickname: name,
    city: 'Mumbai',
    phonenumber: '9673623255',
    businessgroup: 'XYZ',
    debitaccnt: '1234567890',
    imlimit: '10000',
    limitexpiry: '10/10/2022',
    status: 'Approved'
  };
}
