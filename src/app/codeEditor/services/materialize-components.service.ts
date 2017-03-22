import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class MaterializeComponentsService {

  constructor(private http: Http) { }
  private _dbUrl:string = 'https://materialziethis.herokuapp.com';
  getCards(): Observable<any>{
    return this.http.get(`${this._dbUrl}/materialize/components`)
      .map(res => res.json());
  }
  getTemplate(templateUrl: string){
    return this.http.get(`./assets/templates${templateUrl}`)
      .map(this.extractData);
  };

    extractData(res:Response):string{
      return res.text();
    }
}

