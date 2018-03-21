import { TestBed, inject } from '@angular/core/testing';

import { ZbignevService } from './zbignev.service';

describe('ZbignevService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ZbignevService]
    });
  });

  it('should be created', inject([ZbignevService], (service: ZbignevService) => {
    expect(service).toBeTruthy();
  }));
});
