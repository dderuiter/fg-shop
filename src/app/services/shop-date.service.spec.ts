import { TestBed } from '@angular/core/testing';

import { ShopDateService } from './shop-date.service';

describe('ShopDateService', () => {
  let service: ShopDateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopDateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
