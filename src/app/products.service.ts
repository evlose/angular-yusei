import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable()
export class ProductsService {

  constructor(private http: HttpClient) { }
  getProduits() : Observable<any>{
  let o = this.http.get('http://localhost:8888/produits');
  return o;
  }

}