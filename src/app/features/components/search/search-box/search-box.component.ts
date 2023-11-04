import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: [ './search-box.component.scss' ]
})
export class SearchBoxComponent {

  constructor(private fb: FormBuilder) { 
    this.searchForm = new FormGroup({
      query: new FormControl()
    });
  }

  searchText = '';
  searchForm: FormGroup;
  @Output() searchChange = new EventEmitter<string>();

  onSubmit() {
    if (this.searchForm.valid) {
      this.searchChange.emit(this.searchForm.value.query);
    }
  }

  onKeyUp() {
    // if (this.searchForm.valid && this.searchForm.value.query && this.searchForm.value.query.length > 3) {
    //   this.searchChange.emit(this.searchForm.value.query);
    // }
  }
}
