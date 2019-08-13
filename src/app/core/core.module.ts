import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './navigation/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { LayoutComponent } from './layout/layout.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    SidenavListComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    LayoutComponent,
    HeaderComponent,
    SidenavListComponent
  ]
})
export class CoreModule { }
