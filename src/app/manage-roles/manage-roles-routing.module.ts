import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageRoleComponent } from './manage-role/manage-role.component';

const routes: Routes = [
  {
    path: '', component: ManageRoleComponent
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
export class ManageRolesRoutingModule { }
