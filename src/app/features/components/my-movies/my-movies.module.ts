import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SearchService } from '../../services/search/search.service';
import { HttpClientModule } from '@angular/common/http';
import { MyMoviesRoutingModule } from './my-movies-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MyMovieListComponent } from './my-movie-list/my-movie-list.component';
import { MyMoviesComponent } from './my-movies.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MyMovieFilterComponent } from './my-movie-filter/my-movie-filter.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  providers: [
    SearchService
  ],
  declarations: [
    MyMoviesComponent,
    MyMovieListComponent,
    MyMovieFilterComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    MyMoviesRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    SharedModule
  ]
})
export class MyMoviesModule { }
