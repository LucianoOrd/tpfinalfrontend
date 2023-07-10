import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosUsuarioService {
  private userDataSubject = new BehaviorSubject<any>(null);
  public userData$ = this.userDataSubject.asObservable();
  constructor() { }
  setUserData(userData: any) {
    this.userDataSubject.next(userData);
  }
}
