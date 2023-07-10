import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  urlBase: string = 'http://localhost:3000';
  constructor(private _http: HttpClient) {}

  public ingresarUser = (user: Usuario) => {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      params: new HttpParams()
    };
    const nombreUsuario = user.nombreUsuario
    const password = user.password
    let body = {
      nombreUsuario, password
    }
    return this._http.post(this.urlBase + "/api/usuario/login", body);
  };

  public getData = (token: string) =>{
    const httpOptions = {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${token}`
      }),
      params: new HttpParams()
    };
    return this._http.get(this.urlBase + "/api/usuario/getUser", httpOptions);
  }

  public userOnly = (token: string) =>{
    const httpOptions = {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${token}`
      }),
      params: new HttpParams()
    };
    return this._http.get(this.urlBase + "/api/usuario/verify", httpOptions);
  }
}
