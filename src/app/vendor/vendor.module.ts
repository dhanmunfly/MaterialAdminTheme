import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorMaterialModule } from './vendor-material.module';
import { VendorFinanceComponent } from './vendor-finance/vendor-finance.component';
import { ManageimComponent } from './vendor-finance/manageim/manageim.component';
import { FormsModule } from '@angular/forms';
import { VendorRoutingModule } from './vendor-routing.module';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AddNewImComponent } from './vendor-finance/add-new-im/add-new-im.component';
import { EditImComponent } from './vendor-finance/edit-im/edit-im.component';
import { ImSublistComponent } from './vendor-finance/manageim/im-sublist/im-sublist.component';
import { ListOfImComponent } from './vendor-finance/manageim/im-sublist/list-of-im/list-of-im.component';
import { ManageBaseComponent } from './vendor-finance/manageim/im-sublist/manage-base/manage-base.component';
import { ManageRulesComponent } from './vendor-finance/manageim/im-sublist/manage-rules/manage-rules.component';
import { ManageMclrComponent } from './vendor-finance/manageim/im-sublist/manage-mclr/manage-mclr.component';


@NgModule({
  declarations: [VendorFinanceComponent, ManageimComponent, AddNewImComponent, EditImComponent, ImSublistComponent, ListOfImComponent, ManageBaseComponent, ManageRulesComponent, ManageMclrComponent],
  imports: [
    CommonModule,
    FormsModule,
    VendorRoutingModule,
    VendorMaterialModule,
    FlexLayoutModule
  ]
})
export class VendorModule { }
