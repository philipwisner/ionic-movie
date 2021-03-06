import { MovieService, SearchType } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  results: Observable<any>;
  searchTerm: string = '';
  type: SearchType = SearchType.all;
  loading: boolean = false;

  //using movie service to fetch data from API
  constructor(private movieSearch: MovieService) { }

  ngOnInit() {
  }

  //function runs when interacting with input, makes api call with passing term and type
  //show loading while request is being processed
  searchChanged() {
    this.loading = true;
    // this.results = this.movieSearch.searchData(this.searchTerm, this.type);
    this.movieSearch.searchData(this.searchTerm, this.type).subscribe(res => {
      this.results = res;
      this.loading = false;
    });
  }

}
