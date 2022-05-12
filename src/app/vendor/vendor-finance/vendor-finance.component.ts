import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

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
  selector: 'app-vendor-finance',
  templateUrl: './vendor-finance.component.html',
  styleUrls: ['./vendor-finance.component.scss']
})
export class VendorFinanceComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['imname', 'nickname', 'city', 'phonenumber', 'businessgroup'
  , 'debitaccnt', 'imlimit', 'limitexpiry', 'status'];
  dataSource: MatTableDataSource<UserData>;
  panelOpenStateDetails = true;
  panelOpenStateAccDetails = true;
  panelOpenStateTxnProfile = true;

  dataSourceNew: MatTableDataSource<any>;

  dataColumns = [
    'name',
    'quantity',
    'size',
    'code'
  ];

  labels = [
    'Debit Processing Charge Account',
    'Debit Commission Charge Account',
    'Debit Interest Account',
    'Debit Account',
  ];

  data = [
    {
      name: '100082624363699',
      quantity: 10999849839849,
      size: '1000',
      code: '1000'
    },
    {
      name: '100082624363699',
      quantity: 10999849839849,
      size: '1000',
      code: '1000'
    },
    {
      name: '100082624363699',
      quantity: 10999849839849,
      size: '1000',
      code: '1000'
    }
  ];

  displayedColumnsNew = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    // Create 100 users
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
    this.transpose();
    this.fillLabels();
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

  transpose() {
    let transposedData = [];
    for (let column = 0; column < this.dataColumns.length; column++) {
      transposedData[column] = {
        label: this.labels[column]
      };
      for (let row = 0; row < this.data.length; row++) {
        transposedData[column][`column${row}`] = this.data[row][this.dataColumns[column]];
      }
    }
    this.dataSourceNew = new MatTableDataSource(transposedData);
  }

  fillLabels() {
    this.displayedColumnsNew = ['label'];
    for (let i = 0; i < this.data.length; i++) {
      this.displayedColumnsNew.push('column' + i);
    }
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
