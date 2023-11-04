import { Component, Input } from "@angular/core";
import { Movie } from "src/app/core/models/movie";
import { FavoriteService } from "../../services/favorite/favorite.service";


@Component({
    selector: 'app-my-movies',
    templateUrl: './my-movies.component.html',
    styleUrls: [ './my-movies.component.scss' ]
  })
  export class MyMoviesComponent {
    constructor(private favService: FavoriteService) {
      this.favorites = this.viewedFavorites = this.favService.favorites;
    }

    favorites: Movie[] = [];
    viewedFavorites: Movie[] = [];

    filter(params: Movie) {
      this.viewedFavorites = this.favorites.filter(f => (
        (f.Title.toLowerCase().includes(params.Title.toLocaleLowerCase()) || !params.Title ) &&
        (f.Year.includes(params.Year) || !params.Year) &&
        (f.Type.toLowerCase().includes(params.Type.toLocaleLowerCase()) || !params.Type )
      ));
    }
}
