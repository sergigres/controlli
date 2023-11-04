import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ApiData } from 'src/app/core/models/apiData';

@Injectable({ providedIn: 'root' })
export class SearchService {

  constructor(private http: HttpClient) {}


  search(query: string) {
    const url = environment.apiBase;

    const params = new HttpParams()
    .set('apikey', environment.apiKey)
    .set('s', query);

    return this.http.get<ApiData>(url, {  params });
  }
}
