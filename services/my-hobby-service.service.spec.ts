import { TestBed } from '@angular/core/testing';

import { MyHobbyServiceService } from './my-hobby-service.service';

describe('MyHobbyServiceService', () => {
  let service: MyHobbyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyHobbyServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
