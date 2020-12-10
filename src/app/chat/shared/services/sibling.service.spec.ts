import { TestBed } from '@angular/core/testing';

import { SiblingService } from './sibling.service';

describe('SiblingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SiblingService = TestBed.get(SiblingService);
    expect(service).toBeTruthy();
  });
});
