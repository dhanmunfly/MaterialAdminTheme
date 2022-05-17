import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageRoleComponent } from './manage-role/manage-role.component';
import { ManageRolesRoutingModule } from './manage-roles-routing.module';
import { ManageRolesMaterialModule } from './manage-roles-material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ManageRoleComponent],
  imports: [
    CommonModule,
    FormsModule,
    ManageRolesRoutingModule,
    ManageRolesMaterialModule
  ]
})
export class ManageRolesModule { }
