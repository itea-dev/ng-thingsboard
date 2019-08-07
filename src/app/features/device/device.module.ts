import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeviceRoutingModule } from './device-routing.module';
import { DevicesComponent } from './devices.component';


@NgModule({
  declarations: [DevicesComponent],
  imports: [
    CommonModule,
    DeviceRoutingModule
  ]
})
export class DeviceModule { }
