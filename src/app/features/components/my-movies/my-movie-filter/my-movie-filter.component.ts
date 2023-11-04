import { Component, EventEmitter, Output } from '@angular/core';
import { Movie } from 'src/app/core/models/movie';
@Component({
    selector: 'my-movie-filter',
    templateUrl: './my-movie-filter.component.html',
    styleUrls: [ './my-movie-filter.component.scss' ]
})
export class MyMovieFilterComponent {
    movie: Movie = { Title: '', Year: '', Type: '' };
    @Output() onFilter = new EventEmitter<Movie>();

    onSubmit() {
        this.onFilter.emit(this.movie);
    }
}