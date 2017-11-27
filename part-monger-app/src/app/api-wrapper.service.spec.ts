import { TestBed, inject } from '@angular/core/testing';

import { ApiWrapperService } from './api-wrapper.service';

describe('ApiWrapperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiWrapperService]
    });
  });

  it('should be created', inject([ApiWrapperService], (service: ApiWrapperService) => {
    expect(service).toBeTruthy();
  }));
});
