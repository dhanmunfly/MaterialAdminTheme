import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IndustryMajor } from '../vendor-finance/models/industry-major';

@Injectable({
  providedIn: 'root'
})
export class ImService {
  private baseUrl = "https://gorest.co.in/public/v2/users";

  constructor(private http: HttpClient) { }

  getAllIMs(): IndustryMajor[] {
    let ims : IndustryMajor[] = [];
    return ims;
  }

  getUsers(){
    return this.http.get(`${this.baseUrl}`);
  }
}
