import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Device } from 'src/app/models/device.model';
import { createHttpParams } from '../http-params';


@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  private apiUril = environment.apiUrl;

  constructor(
    protected httpClient: HttpClient
  ) { }

  getTenantDevices(parameters: {
    type?: string,
    textSearch?: string,
    idOffset?: string,
    textOffset?: string,
    limit: number
  }): Promise<Device[]> {
    return new Promise<Device[]>((resolve, reject) => {
      const params = createHttpParams(parameters);

      this.httpClient.get<any>(`${this.apiUril}/tenant/devices`, { params })
        .subscribe(
          res => {
            resolve(res.data);
          },
          e => {
            reject(e.error);
          }
        );
    });
  }

}
