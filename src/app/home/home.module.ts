import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorMaterialModule } from './home-material.module';
import { FormsModule } from '@angular/forms';
import { VendorRoutingModule } from './home-routing.module';
import { FlexLayoutModule } from "@angular/flex-layout";
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    FormsModule,
    VendorRoutingModule,
    VendorMaterialModule,
    FlexLayoutModule
  ]
})
export class HomeModule { }
