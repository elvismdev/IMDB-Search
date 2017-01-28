import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class OmdbIdService {

  constructor(private http: Http) { }

  getMovieById(id: string) {
    const url = 'http://www.omdbapi.com';
    const params = new URLSearchParams();
    // Movie ID
    params.set('i', id);

    return this.http.get(url, params)
      .map(response => response.json().results);
  }

}
