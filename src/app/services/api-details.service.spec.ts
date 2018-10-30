import { TestBed } from '@angular/core/testing';

import { ApiDetailsService } from './api-details.service';

describe('ApiDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiDetailsService = TestBed.get(ApiDetailsService);
    expect(service).toBeTruthy();
  });
});
