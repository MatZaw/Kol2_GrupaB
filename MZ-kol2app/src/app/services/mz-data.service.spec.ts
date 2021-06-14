import { TestBed } from '@angular/core/testing';

import { MZDataService } from './mz-data.service';

describe('MZDataService', () => {
  let service: MZDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MZDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
