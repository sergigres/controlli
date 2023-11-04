import { TestBed, getTestBed } from '@angular/core/testing';
import { FavoriteService } from './favorite.service';
import { Movie } from 'src/app/core/models/movie';

describe('FavoriteService', () => {
  let injector: TestBed;
  let service: FavoriteService;
  const fakeMovie: Movie = { Title: 'Cinderella', Year: '2022', Type: 'Film' };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FavoriteService],
    });

    injector = getTestBed();
    service = injector.get(FavoriteService);
  });

  it('add', () => {
    service.add(fakeMovie);

    expect(service.favorites[0].Title).toBe(fakeMovie.Title);
  });

  it('remove', () => {
    service.add(fakeMovie);
    expect(service.favorites[0].Title).toBe(fakeMovie.Title);
    service.remove(fakeMovie);

    expect(service.favorites.length).toBe(0);
  });

  it('findsaved', () => {
    service.add(fakeMovie);
    const saved = service.findSaved([fakeMovie]);

    expect(saved[0].Title).toBe(fakeMovie.Title);
  });
 
});