import { Injectable } from '@angular/core';
import { environment as env } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Device } from 'src/app/models/device.model';
import { createHttpParams } from '../http-params';

const API_URL = env.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class DeviceApiService {

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

      this.httpClient.get<any>(`${API_URL}/tenant/devices`, { params })
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
