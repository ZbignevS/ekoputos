import { TestBed, inject } from '@angular/core/testing';

import { TvsService } from './tvs.service';

describe('TvsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TvsService]
    });
  });

  it('should be created', inject([TvsService], (service: TvsService) => {
    expect(service).toBeTruthy();
  }));
});
