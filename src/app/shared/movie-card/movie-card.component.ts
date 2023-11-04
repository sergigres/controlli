import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Movie } from "src/app/core/models/movie";
import { FavoriteService } from "src/app/features/services/favorite/favorite.service";

@Component({
    selector: 'app-movie-card',
    templateUrl: './movie-card.component.html',
    styleUrls: [ './movie-card.component.scss' ]
  })
  export class MovieCardComponent {
    constructor(private favService: FavoriteService) {}

    @Input() movie: any;
    @Input() isFavorite = false;
    @Output() onDelete = new EventEmitter<string>();

    save(movie: Movie) {
      movie.saved = true;
      this.favService.add(movie);
    }

    remove(movie: Movie) {
       this.favService.remove(movie);
       this.onDelete.emit('deleted');
    }
}
