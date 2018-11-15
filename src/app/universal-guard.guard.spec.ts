import { TestBed, async, inject } from '@angular/core/testing';

import { UniversalGuardGuard } from './universal-guard.guard';

describe('UniversalGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UniversalGuardGuard]
    });
  });

  it('should ...', inject([UniversalGuardGuard], (guard: UniversalGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
