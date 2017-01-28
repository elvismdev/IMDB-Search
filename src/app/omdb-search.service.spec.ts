/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OmdbSearchService } from './omdb-search.service';

describe('OmdbSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OmdbSearchService]
    });
  });

  it('should ...', inject([OmdbSearchService], (service: OmdbSearchService) => {
    expect(service).toBeTruthy();
  }));
});
