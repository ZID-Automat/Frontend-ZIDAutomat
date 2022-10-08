import { TestBed } from '@angular/core/testing';

import { AutomatApiService } from './automat-api.service';

describe('AutomatApiService', () => {
  let service: AutomatApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutomatApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
