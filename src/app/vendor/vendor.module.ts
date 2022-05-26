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


@NgModule({
  declarations: [VendorFinanceComponent, ManageimComponent, AddNewImComponent, EditImComponent],
  imports: [
    CommonModule,
    FormsModule,
    VendorRoutingModule,
    VendorMaterialModule,
    FlexLayoutModule
  ]
})
export class VendorModule { }
