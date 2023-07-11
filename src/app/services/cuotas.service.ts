import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Cuota } from '../models/cuota';
import { Observable } from 'rxjs';
import { Alumno } from '../models/alumno';


@Injectable({
  providedIn: 'root'
})
export class CuotasService {
  urlBase: string = "http://localhost:3000/api/cuota"

  constructor(private _http:HttpClient) { }

  public createCuota(cuota: Cuota): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      params: new HttpParams()
    };
    let body = JSON.stringify(cuota);
    return this._http.post(this.urlBase + "/", body, httpOptions);
  }

  public getCuotas():Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({

      }),
    }
    return this._http.get(this.urlBase + "/", httpOptions);
  }

  public updateCuota(cuota: Cuota): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      params: new HttpParams()
    };
    let body = JSON.stringify(cuota);
    console.log(cuota);
    return this._http.put(this.urlBase + "/" + cuota._id, body, httpOptions);
  }

  public getCuotaByDni(dni: number):Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams()
    }
    return this._http.get(this.urlBase + "/alumno/" + dni, httpOptions);
  }

}
