import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeviceRoutingModule } from './device-routing.module';
import { DevicesComponent } from './devices.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [DevicesComponent],
  imports: [
    CommonModule,
    DeviceRoutingModule,
    SharedModule
  ]
})
export class DeviceModule { }
