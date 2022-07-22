import { TestBed } from '@angular/core/testing';

import { EleveurService } from './eleveur.service';

describe('EleveurService', () => {
  let service: EleveurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EleveurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
