import { TestBed } from '@angular/core/testing';

import { ColorServiceService } from './color-service.service';

describe('ColorServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ColorServiceService = TestBed.get(ColorServiceService);
    expect(service).toBeTruthy();
  });
});
