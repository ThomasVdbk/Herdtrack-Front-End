import { TestBed } from '@angular/core/testing';

import { StatutSanteService } from './statut-sante.service';

describe('StatutSanteService', () => {
  let service: StatutSanteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatutSanteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
