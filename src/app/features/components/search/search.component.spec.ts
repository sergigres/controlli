import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SearchComponent } from './search.component';
import { of } from 'rxjs';
import { Movie } from 'src/app/core/models/movie';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { SearchService } from '../../services/search/search.service';
import { FavoriteService } from '../../services/favorite/favorite.service';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let searchService;
  let searchSpy: jasmine.Spy;
  let findSavedSpy: jasmine.Spy;
  let favoriteService;

  const fakeMovies: Movie[] = [{ Title: 'Cinderella', Year: '2022', Type: 'Film' }, { Title: 'Rapunzell', Year: '1938', Type: 'Series' }]

  beforeEach(waitForAsync(() => {
    searchService = jasmine.createSpyObj('SearchService', ['search']);
    searchSpy = searchService.search.and.returnValue(of({ Search: fakeMovies }));
    favoriteService = jasmine.createSpyObj('FavoriteService', ['findSaved']);
    findSavedSpy = favoriteService.findSaved;

    TestBed
        .configureTestingModule({
          declarations: [SearchComponent],
          imports: [HttpClientTestingModule], 
          schemas: [NO_ERRORS_SCHEMA],
          providers: [
            { provide: SearchService, useValue: searchService },
            { provide: FavoriteService, useValue: favoriteService }
          ]
        })  
        .compileComponents();

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should display something', () => {
    expect(fixture.nativeElement.querySelector('h2').textContent).toContain('Let\'s find your Movie');
  });

  it('should search and check favs', () => {
    component.search('pun');
    
    expect (searchSpy).toHaveBeenCalled();
    expect (findSavedSpy).toHaveBeenCalled;
    expect (component.data).toEqual(fakeMovies);
  });
 });
