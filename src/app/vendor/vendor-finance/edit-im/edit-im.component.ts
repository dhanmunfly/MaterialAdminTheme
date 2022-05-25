import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { ImService } from 'app/vendor/services/im.service';
import { Subscription } from 'rxjs';
import { IndustryMajor } from '../models/industry-major';

@Component({
  selector: 'app-edit-im',
  templateUrl: './edit-im.component.html',
  styleUrls: ['./edit-im.component.scss']
})
export class EditImComponent implements OnInit {
  subscriptions: Subscription[] = [];
  id: string;
  im: IndustryMajor;
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
  constructor(
    private _activatedRoute:ActivatedRoute,
    private _imService: ImService) { 
      this.transpose();
      this.fillLabels();
    }

  ngOnInit() {
    this.subscriptions.push(
      this._activatedRoute.paramMap.subscribe(params => { 
        console.log(params);
         this.id = params.get('id'); 
         let industryMajors = this._imService.getAllIMs();
         this.im = industryMajors.find(im => im.imCode == this.id);    
     })
    )
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
