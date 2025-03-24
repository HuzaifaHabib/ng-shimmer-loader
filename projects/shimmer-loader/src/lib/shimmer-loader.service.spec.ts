import { TestBed } from '@angular/core/testing';

import { ShimmerLoaderService } from './shimmer-loader.service';

describe('ShimmerLoaderService', () => {
  let service: ShimmerLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShimmerLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
