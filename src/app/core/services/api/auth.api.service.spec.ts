import { TestBed } from '@angular/core/testing';

import { AuthApiService } from './auth.api.service';

describe('Auth.ApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthApiService = TestBed.get(AuthApiService);
    expect(service).toBeTruthy();
  });
});
