import { TestBed } from '@angular/core/testing';

import { AnkittestService } from './ankittest.service';

describe('AnkittestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnkittestService = TestBed.get(AnkittestService);
    expect(service).toBeTruthy();
  });
});
