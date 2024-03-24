import { TestBed } from '@angular/core/testing';

import { GetIpDataService } from './get-ip-data.service';

describe('GetIpDataService', () => {
  let service: GetIpDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetIpDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
