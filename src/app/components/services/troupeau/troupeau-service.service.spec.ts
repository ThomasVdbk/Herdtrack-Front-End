import { TestBed } from '@angular/core/testing';

import { TroupeauServiceService } from './troupeau-service.service';

describe('TroupeauServiceService', () => {
  let service: TroupeauServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TroupeauServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
