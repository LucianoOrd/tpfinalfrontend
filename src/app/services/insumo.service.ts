import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Insumo } from '../models/insumo';

@Injectable({
  providedIn: 'root'
})
export class InsumoService {

  urlBase: string = "http://localhost:3000/api/insumo";

  constructor(private _http:HttpClient) { }

  public createInsumo(insumo: Insumo): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      params: new HttpParams()
    };
    let body = JSON.stringify(insumo);
    return this._http.post(this.urlBase + "/", body, httpOptions);
  }

  public modificarInsumos(insumos: Array<Insumo>): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      params: new HttpParams()
    };
    let body = JSON.stringify(insumos);
    return this._http.post(this.urlBase + "/modificarInsumos", body, httpOptions);
  }

  public updateInsumo(insumo: Insumo): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      params: new HttpParams()
    };
    let body = JSON.stringify(insumo);
    return this._http.put(this.urlBase + "/" + insumo._id, body, httpOptions);
  }

  public eliminarInsumo(id: string): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      params: new HttpParams()
    };

    return this._http.delete(this.urlBase + "/" + id, httpOptions);
  }

  public getInsumos():Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({

      }),
    }
    return this._http.get(this.urlBase + "/", httpOptions);
  }

  // Obtener alumno segun el ID

  public getInsumoById(id:string):Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams()
    }
    return this._http.get(this.urlBase + "/detalle/" + id, httpOptions);
  }

}
