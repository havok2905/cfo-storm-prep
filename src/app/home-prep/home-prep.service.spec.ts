import { TestBed, inject } from '@angular/core/testing';

import { HomePrepService } from './home-prep.service';

describe('HomePrepService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomePrepService]
    });
  });

  it('should be created', inject([HomePrepService], (service: HomePrepService) => {
    expect(service).toBeTruthy();
  }));
});
