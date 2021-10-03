import { TestBed } from '@angular/core/testing';

import { MatchContractsService } from './match-contracts.service';

describe('MatchContractsService', () => {
  let service: MatchContractsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatchContractsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
