import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AvatarModule } from 'ngx-avatar';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    AvatarModule,
    RouterModule
  ],
  exports: [
    AngularMaterialModule,
    ReactiveFormsModule,
    AvatarModule,
    RouterModule
  ]
})
export class SharedModule { }
