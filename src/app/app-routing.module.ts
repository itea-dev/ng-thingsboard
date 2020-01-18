import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login', loadChildren: () => import(`./features/login/login.module`).then(m => m.LoginModule)
  },
  {
    path: 'signup',
    loadChildren: () => import(`./features/registration/registration.module`).then(m => m.RegistrationModule)
  },
  {
    path: 'home',
    loadChildren: () => import(`./features/dashboard/dashboard.module`).then(m => m.DashboardModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'devices',
    loadChildren: () => import(`./features/device/device.module`).then(m => m.DeviceModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'assets',
    loadChildren: () => import(`./features/asset/asset.module`).then(m => m.AssetModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'customers',
    loadChildren: () => import(`./features/customer/customer.module`).then(m => m.CustomerModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
