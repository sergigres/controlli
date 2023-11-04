import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search/search.service';
import { Movie } from 'src/app/core/models/movie';
import { FavoriteService } from '../../services/favorite/favorite.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: [ './search.component.scss' ]
})
export class SearchComponent {

  constructor(private searchService: SearchService, private favoriteService: FavoriteService) { }
  data: Movie[] = [];

  search(query: string) {
    this.searchService.search(query).subscribe((data) => {
      this.favoriteService.findSaved(data.Search);
      this.data = data.Search;
    });
  }
}
