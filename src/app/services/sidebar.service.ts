import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  isMenuExpanded: boolean = false;
  private _menuExpand = new BehaviorSubject<boolean>(this.isMenuExpanded);
  public menuExpand$ = this._menuExpand.asObservable();
  
  constructor() { }

  toggleMenu() {
    this.isMenuExpanded = !this.isMenuExpanded;
    this._menuExpand.next(this.isMenuExpanded);
  }
}
