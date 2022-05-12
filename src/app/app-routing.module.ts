import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageimComponent } from './vendor/vendor-finance/manageim/manageim.component';
import { VendorFinanceComponent } from './vendor/vendor-finance/vendor-finance.component';

const routes: Routes = [
  {
    path: 'vendor-finance',
    loadChildren: () => import('./vendor/vendor.module')  
        .then(m => m.VendorModule)
  },
  { path: '**', redirectTo: 'vendor-finance' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
