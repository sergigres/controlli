import { Injectable } from '@angular/core';
import { GlobalConstants } from 'src/app/core/constants';
import { Movie } from 'src/app/core/models/movie';

@Injectable({ providedIn: 'root' })
export class FavoriteService {

  constructor() {}

  public get favorites(): Movie[] {
    if (localStorage.getItem(GlobalConstants.favStorage)) {
      return JSON.parse(localStorage.getItem(GlobalConstants.favStorage) + '');
    } else {
      return [];
    }
  }

  public set favorites(favs: Movie[]) {
      localStorage.setItem(GlobalConstants.favStorage, JSON.stringify(favs))
  }

  add(movie: Movie) {
    const found = this.favorites.find(m => m.imdbID === movie.imdbID);
    if (!found) {
      const favs = this.favorites;
      favs.push(movie);
      this.favorites = favs;
    }
  }

  remove(movie: Movie) {
    this.favorites = this.favorites.filter(m => m.imdbID !== movie.imdbID);
  }

  findSaved(movies: Movie[]): Movie[] {
    for(const f of this.favorites) {
      for (const m of movies) {
        if (f.imdbID === m.imdbID) {
          m.saved = true;
        }
      }
    }

    return movies;
  }

}