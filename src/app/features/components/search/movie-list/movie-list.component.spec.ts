import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Movie } from 'src/app/core/models/movie';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MovieListComponent } from './movie-list.component';
import { FavoriteService } from 'src/app/features/services/favorite/favorite.service';

describe('MovieListComponent', () => {
  let component: MovieListComponent;
  let fixture: ComponentFixture<MovieListComponent>;
  let addSpy: jasmine.Spy;
  let favoriteService;

  const fakeMovie: Movie = { Title: 'Cinderella', Year: '2022', Type: 'Film' };

  beforeEach(waitForAsync(() => {
    favoriteService = jasmine.createSpyObj('FavoriteService', ['add']);
    addSpy = favoriteService.add;

    TestBed
        .configureTestingModule({
          declarations: [MovieListComponent],
          imports: [HttpClientTestingModule], 
          schemas: [NO_ERRORS_SCHEMA],
          providers: [
            { provide: FavoriteService, useValue: favoriteService }
          ]
        })  
        .compileComponents();

    fixture = TestBed.createComponent(MovieListComponent);
    component = fixture.componentInstance;
    component.data.push(fakeMovie);
    fixture.detectChanges();
  }));

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should display something', () => {
    expect(fixture.nativeElement.querySelector('h2').textContent).toContain('Results');
  });

  it('should save', () => {
    component.save(fakeMovie);
    
    expect(addSpy).toHaveBeenCalled;
    expect(fakeMovie.saved).toBeTrue;
  });
 });
