import { TestBed } from '@angular/core/testing';

import { TypeUserServiceService } from './type-user-service.service';

describe('TypeUserServiceService', () => {
  let service: TypeUserServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeUserServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
