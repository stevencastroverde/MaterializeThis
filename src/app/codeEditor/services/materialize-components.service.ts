import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class MaterializeComponentsService {

  constructor(private http: Http) { }

  getCards(): Observable<any>{
    return this.http.get('http://localhost:3000/materialize/cards')
      .map(res => res.json());
  }



}

