import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Insumo } from '../models/insumo';
import { Observable } from 'rxjs';
import { Cuota } from '../models/cuota';
// import { param } from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class MercadoPagoService {

  urlBase: string = "http://localhost:3000/api/mercadopago/crearpago";

  constructor(private _http: HttpClient) { }

  pagoInsumo(insumos: Array<Insumo>): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),

    };

    let body = {'tipo': 'insumos', 'insumos': JSON.parse(JSON.stringify(insumos))}


    return this._http.post(this.urlBase, body, httpOptions);
  }

  pagoCuota(cuota: Cuota): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),

    };
    console.log(cuota);

    let body = {'tipo': 'cuota', 'cuota': JSON.parse(JSON.stringify(cuota))}

    console.log(body);


    return this._http.post(this.urlBase, body, httpOptions);
  }
}
