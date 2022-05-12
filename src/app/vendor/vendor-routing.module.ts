import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { VendorFinanceComponent } from './vendor-finance/vendor-finance.component';
import { ManageimComponent } from './vendor-finance/manageim/manageim.component';

const routes: Routes = [
  {
    path: '', component: VendorFinanceComponent,
    children: [
      {
        path: 'manage-im',
        component: ManageimComponent
      },
      { path: '**', redirectTo: 'manage-im' }
    ]
  },
  { path: '', redirectTo: '', pathMatch: 'full'},
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class VendorRoutingModule { }
