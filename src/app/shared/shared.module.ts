import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AvatarModule } from 'ngx-avatar';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    AvatarModule,
    RouterModule,
    FlexLayoutModule
  ],
  exports: [
    AngularMaterialModule,
    ReactiveFormsModule,
    AvatarModule,
    RouterModule,
    FlexLayoutModule
  ]
})
export class SharedModule { }
