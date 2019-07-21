import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import(`./features/auth/auth.module`).then(m => m.AuthModule) },
  { path: 'home', loadChildren: () => import(`./features/home/home.module`).then(m => m.HomeModule) },
  { path: 'device', loadChildren: () => import(`./features/device/device.module`).then(m => m.DeviceModule) },
  { path: 'asset', loadChildren: () => import(`./features/asset/asset.module`).then(m => m.AssetModule) },
  { path: 'customer', loadChildren: () => import(`./features/customer/customer.module`).then(m => m.CustomerModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
