import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AvatarModule } from 'ngx-avatar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    AvatarModule
  ],
  exports: [
    AngularMaterialModule,
    ReactiveFormsModule,
    AvatarModule
  ]
})
export class SharedModule { }
