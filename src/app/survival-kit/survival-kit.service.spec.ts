import { TestBed, inject } from '@angular/core/testing';

import { SurvivalKitService } from './survival-kit.service';

describe('SurvivalKitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SurvivalKitService]
    });
  });

  it('should be created', inject([SurvivalKitService], (service: SurvivalKitService) => {
    expect(service).toBeTruthy();
  }));
});
