import { TestBed } from '@angular/core/testing';

import { HobbyDataService } from './hobby-data.service';

describe('HobbyDataService', () => {
  let service: HobbyDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HobbyDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
