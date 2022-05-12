import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-add-new-im',
  templateUrl: './add-new-im.component.html',
  styleUrls: ['./add-new-im.component.scss']
})
export class AddNewImComponent implements OnInit {
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
  constructor() { 
    this.transpose();
    this.fillLabels();
  }

  ngOnInit(): void {
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
