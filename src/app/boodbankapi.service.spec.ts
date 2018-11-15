import { TestBed } from '@angular/core/testing';

import { BoodbankapiService } from './boodbankapi.service';

describe('BoodbankapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BoodbankapiService = TestBed.get(BoodbankapiService);
    expect(service).toBeTruthy();
  });
});
