import { TestBed } from '@angular/core/testing';

import { CarnetSanitaireService } from './carnet-sanitaire.service';

describe('CarnetSanitaireService', () => {
  let service: CarnetSanitaireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarnetSanitaireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
