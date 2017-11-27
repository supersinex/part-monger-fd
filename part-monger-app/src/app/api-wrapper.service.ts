import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { HttpClient } from '@angular/common/http';
import { Part } from './part';

@Injectable()
export class ApiWrapperService {

  // Variables
  url: string = 'http://localhost:9001';

  constructor(private http: HttpClient) { }

  get(endpoint: string) {
    return this.http.get<Part[]>(`${this.url}/${endpoint}`)
    .map(res => res);
  }

}
