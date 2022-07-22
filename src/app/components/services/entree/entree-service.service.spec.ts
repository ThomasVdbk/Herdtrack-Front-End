import { TestBed } from '@angular/core/testing';

import { EntreeServiceService } from './entree-service.service';

describe('EntreeServiceService', () => {
  let service: EntreeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntreeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
