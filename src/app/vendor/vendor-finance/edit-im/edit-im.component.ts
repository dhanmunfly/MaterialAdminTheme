import { Component, OnInit } from '@angular/core';
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
  constructor(
    private _activatedRoute:ActivatedRoute,
    private _imService: ImService) { }

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

}
