import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import(`./features/login/login.module`).then(m => m.LoginModule) },
  { path: 'signup', loadChildren: () => import(`./features/registration/registration.module`).then(m => m.RegistrationModule) },
  { path: 'home', loadChildren: () => import(`./features/dashboard/dashboard.module`).then(m => m.DashboardModule) },
  { path: 'device', loadChildren: () => import(`./features/device/device.module`).then(m => m.DeviceModule) },
  { path: 'asset', loadChildren: () => import(`./features/asset/asset.module`).then(m => m.AssetModule) },
  { path: 'customer', loadChildren: () => import(`./features/customer/customer.module`).then(m => m.CustomerModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
