import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './default/default.component';
import { LoginComponent } from './login/login.component';
import { ManageimComponent } from './vendor/vendor-finance/manageim/manageim.component';
import { VendorFinanceComponent } from './vendor/vendor-finance/vendor-finance.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: 'vendor-finance',
        loadChildren: () => import('./vendor/vendor.module').then(m => m.VendorModule)
      },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
