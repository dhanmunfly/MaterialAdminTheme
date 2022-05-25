import { Injectable } from '@angular/core';
import { IndustryMajor } from '../vendor-finance/models/industry-major';

@Injectable({
  providedIn: 'root'
})
export class ImService {

  constructor() { }

  getAllIMs(): IndustryMajor[] {
    let ims : IndustryMajor[] = [];
    return ims;
  }
}
