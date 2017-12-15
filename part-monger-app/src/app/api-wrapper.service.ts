import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import { Part } from './part';
import { Inventory } from './inventory';
import { HttpHeaderResponse } from '@angular/common/http/src/response';


@Injectable()
export class ApiWrapperService {

  // Variables
  url: string = 'http://localhost:9001';

  constructor(private http: HttpClient) { }

  getParts(endpoint: string) {
    return this.http.get<Part[]>(`${this.url}/${endpoint}`)
    .map(res => res);
  }

  getPartDetails(endpoint: string) {
    return this.http.get<Part>(`${this.url}/${endpoint}`)
    .map(res => res);
  }

  updatePartDetails(endpoint: string, part: Part) {
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json');
    return this.http.put(`${this.url}/${endpoint}`, JSON.stringify(part), { headers: headers })
    .map(res => res);
  }

  addPart(endpoint: string, part: any) {
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json');
    const body = {
      'name': part.name,
      'partNumber': part.partNumber,
      'description': part.description,
      'cost': part.cost
    }
    return this.http.post(`${this.url}/${endpoint}`, JSON.stringify(body), { headers: headers })
    .map(res => res);
  }

  getInventory(endpoint: string) {
    return this.http.get<Inventory>(`${this.url}/${endpoint}`)
    .map(res => res);
  }

  updateInventory(endpoint: string, inv: any) {
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json');
    return this.http.put(`${this.url}/${endpoint}`, JSON.stringify(inv), { headers: headers })
    .map(res => res);
  }

}
