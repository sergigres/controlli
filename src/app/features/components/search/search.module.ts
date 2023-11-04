import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SearchRoutingModule } from './search-routing.module';
import { SearchService } from '../../services/search/search.service';
import { SearchComponent } from './search.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchBoxComponent } from './search-box/search-box.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SharedModule } from 'src/app/shared/shared.module';
import { MovieListComponent } from './movie-list/movie-list.component';

@NgModule({
  providers: [
    SearchService
  ],
  declarations: [
    SearchComponent,
    SearchBoxComponent,
    MovieListComponent
  ],
  imports: [
    HttpClientModule,
    SharedModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SearchRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class SearchModule {
}
