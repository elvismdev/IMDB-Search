/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OmdbIdService } from './omdb-id.service';

describe('OmdbIdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OmdbIdService]
    });
  });

  it('should ...', inject([OmdbIdService], (service: OmdbIdService) => {
    expect(service).toBeTruthy();
  }));
});
