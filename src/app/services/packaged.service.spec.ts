import { TestBed } from '@angular/core/testing';

import { PackagedService } from './packaged.service';

describe('PackagedService', () => {
  let service: PackagedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PackagedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
