import { TestBed } from '@angular/core/testing';

import { GifrequestService } from './gifrequest.service';

describe('GifrequestService', () => {
  let service: GifrequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GifrequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
