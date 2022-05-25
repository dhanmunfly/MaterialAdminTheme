import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { VendorFinanceComponent } from './vendor-finance/vendor-finance.component';
import { ManageimComponent } from './vendor-finance/manageim/manageim.component';
import { AddNewImComponent } from './vendor-finance/add-new-im/add-new-im.component';
import { EditImComponent } from './vendor-finance/edit-im/edit-im.component';

const routes: Routes = [
  {
    path: '', component: VendorFinanceComponent,
    children: [
      {
        path: 'manage-im',
        component: ManageimComponent
      },
      {
        path: 'add-new-im',
        component: AddNewImComponent
      },
      {
        path: 'edit-im/:id',
        component: EditImComponent
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
