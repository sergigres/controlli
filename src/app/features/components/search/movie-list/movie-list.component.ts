import { Component, Input } from "@angular/core";
import { Movie } from "src/app/core/models/movie";
import { FavoriteService } from "../../../services/favorite/favorite.service";

@Component({
    selector: 'app-movie-list',
    templateUrl: './movie-list.component.html',
    styleUrls: [ './movie-list.component.scss' ]
  })
  export class MovieListComponent {
    constructor(private favService: FavoriteService) {}

    @Input() data: Movie[] = [];

    save(movie: Movie) {
      movie.saved = true;
      this.favService.add(movie);
    }
}
