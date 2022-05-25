import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './default/default.component';
import { LoginComponent } from './login/login.component';
import { ManageRoleComponent } from './manage-roles/manage-role/manage-role.component';
import { ManageimComponent } from './vendor/vendor-finance/manageim/manageim.component';
import { VendorFinanceComponent } from './vendor/vendor-finance/vendor-finance.component';

const routes: Routes = [
  {
    path: 'vendor-finance',
    loadChildren: () => import('./vendor/vendor.module')
        .then(m => m.VendorModule)
  },
  {
    path: 'dealer-finance',
    loadChildren: () => import('./vendor/vendor.module')
        .then(m => m.VendorModule)
  },
  {
    path: 'Home',
    loadChildren: () => import('./home/home.module')
        .then(m => m.HomeModule)
  },
  {
    path: 'customer-support',
    loadChildren: () => import('./home/home.module')
        .then(m => m.HomeModule)
  },
  { path: '**', redirectTo: 'Home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
