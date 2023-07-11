import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Plan } from '../models/plan';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MercadopagoService {

  urlBase: string = "http://localhost:3000/api/mp/";

  constructor(private _http:HttpClient) { }

  public createOrder(plan: Plan): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      params: new HttpParams()
    };
    let body = JSON.stringify(plan);
    return this._http.post(this.urlBase + "create-orden", body, httpOptions);
  }
}
