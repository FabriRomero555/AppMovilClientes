import { TestBed } from '@angular/core/testing';

import { ChachasService } from './chachas.service';

describe('ChachasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChachasService = TestBed.get(ChachasService);
    expect(service).toBeTruthy();
  });
});
