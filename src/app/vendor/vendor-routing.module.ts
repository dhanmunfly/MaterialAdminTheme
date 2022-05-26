import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { VendorFinanceComponent } from './vendor-finance/vendor-finance.component';
import { ManageimComponent } from './vendor-finance/manageim/manageim.component';
import { AddNewImComponent } from './vendor-finance/add-new-im/add-new-im.component';
import { EditImComponent } from './vendor-finance/edit-im/edit-im.component';
import { componentFactoryName } from '@angular/compiler';
import { ImSublistComponent } from './vendor-finance/manageim/im-sublist/im-sublist.component';
import { ManageRulesComponent } from './vendor-finance/manageim/im-sublist/manage-rules/manage-rules.component';
import { ManageMclrComponent } from './vendor-finance/manageim/im-sublist/manage-mclr/manage-mclr.component';
import { ManageBaseComponent } from './vendor-finance/manageim/im-sublist/manage-base/manage-base.component';
import { ListOfImComponent } from './vendor-finance/manageim/im-sublist/list-of-im/list-of-im.component';

const routes: Routes = [
  {
    path: '', component: VendorFinanceComponent,
    children: [
      {
        path: 'manageIm',
        component: ManageimComponent
        // children: [
        //   {
        //     path: 'manageImSublist',
        //     component: ImSublistComponent,
        //     children: [
        //       {
        //         path: 'listofIM',
        //         component: ListOfImComponent
        //       },
        //       {
        //         path: 'ManageBase',
        //         component: ManageBaseComponent
        //       },
        //       {
        //         path: 'ManageMCLR',
        //         component: ManageMclrComponent
        //       },
        //       {
        //         path: 'ManageRules',
        //         component: ManageRulesComponent
        //       }
        //     ]
          
        
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
