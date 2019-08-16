import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { DeviceService } from 'src/app/core/services/api/device.service';
import { Device } from 'src/app/models/device.model';


@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {

  devices: Promise<Device[]>;

  constructor(
    private appService: AppService,
    private deviceService: DeviceService
  ) { }

  ngOnInit() {
    this.appService.setTitle('Devices');

    this.devices = this.deviceService.getTenantDevices({ limit: 10 });
  }

}
