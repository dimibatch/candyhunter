import { TestBed } from '@angular/core/testing';

import { CandyListService } from './candy-list.service';

describe('CandyListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CandyListService = TestBed.get(CandyListService);
    expect(service).toBeTruthy();
  });
});
