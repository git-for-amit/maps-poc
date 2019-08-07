import { TestBed } from '@angular/core/testing';

import { BingMapsLoaderService } from './bing-maps-loader.service';

describe('BingMapsLoaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BingMapsLoaderService = TestBed.get(BingMapsLoaderService);
    expect(service).toBeTruthy();
  });
});
