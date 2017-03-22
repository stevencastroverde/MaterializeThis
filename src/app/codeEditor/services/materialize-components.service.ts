import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class MaterializeComponentsService {

  constructor(private http: Http) { }

  getCards(): Observable<any>{
    return this.http.get('http://localhost:3000/materialize/components')
      .map(res => res.json());
  }
  getTemplate(templateUrl: string){
    return this.http.get(`../../assets/templates/${templateUrl}`)
      .map((html:any) => html);
  }



}

