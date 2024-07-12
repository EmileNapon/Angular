import { TestBed } from '@angular/core/testing';

import { AppareilsServiceService } from './appareils-service.service';

describe('AppareilsServiceService', () => {
  let service: AppareilsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppareilsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
