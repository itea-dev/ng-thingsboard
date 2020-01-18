import { TestBed } from '@angular/core/testing';

import { DeviceApiService } from './device.api.service';

describe('DeviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeviceApiService = TestBed.get(DeviceApiService);
    expect(service).toBeTruthy();
  });
});
