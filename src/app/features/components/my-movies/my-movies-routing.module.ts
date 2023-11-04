import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyMovieListComponent } from './my-movie-list/my-movie-list.component';
import { MyMoviesComponent } from './my-movies.component';
const routes: Routes = [
  {
    path: '',
    component: MyMoviesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})export class MyMoviesRoutingModule { }