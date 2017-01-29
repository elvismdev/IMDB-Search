import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { OmdbIdService } from '../omdb-id.service';

@Component({
  selector: 'myapp-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  @Input() id: string;
  movie$: Observable<any>;

  constructor(private omdbIdService: OmdbIdService) {
    this.getMovie(id);
  }

  getMovie(id: string) {
   this.movie$ = this.omdbIdService.getMovieById(id);
 }

}
