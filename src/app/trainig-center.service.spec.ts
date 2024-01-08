import { TestBed } from '@angular/core/testing';

import { TrainigCenterService } from './trainig-center.service';

describe('TrainigCenterService', () => {
  let service: TrainigCenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrainigCenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
