import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Details } from '../models/details';

const API_DETAIL_URL: string = 'https://fr.openfoodfacts.org/api/v0/product/';

@Injectable({
  providedIn: 'root'
})
export class ApiDetailsService {

  private _http: HttpClient;

  constructor(param_service: HttpClient) {
    this._http = param_service;
  }

  public getDetails(id): Observable<any> {
    const obs1: Observable<any> = this._http.get(API_DETAIL_URL + id + '.json');
    const treatment = (data: any): Details => {
      return data as Details;
    };

    return obs1.pipe(map(treatment));
  }
}
