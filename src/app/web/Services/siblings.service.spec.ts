import { TestBed } from '@angular/core/testing';

import { SiblingsService } from './siblings.service';

describe('SiblingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SiblingsService = TestBed.get(SiblingsService);
    expect(service).toBeTruthy();
  });
});
