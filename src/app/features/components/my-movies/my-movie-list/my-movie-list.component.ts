import { Component, Input } from "@angular/core";
import { FavoriteService } from "../../../services/favorite/favorite.service";
import { Movie } from "src/app/core/models/movie";


@Component({
    selector: 'app-my-movie-list',
    templateUrl: './my-movie-list.component.html',
    styleUrls: [ './my-movie-list.component.scss' ]
  })
  export class MyMovieListComponent {
    @Input() favorites: Movie[] = [];
    constructor(private favService: FavoriteService) {
    }

    @Input() data: Movie[] = [];

    remove(movie: Movie) {
      this.favService.remove(movie);
    }

    refresh() {
      this.favorites = this.favService.favorites;
    }
}
