import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioAlumnoComponent } from './components/formulario-alumno/formulario-alumno.component';
import { ListaAlumnosComponent } from './components/lista-alumnos/lista-alumnos.component';

import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';


@NgModule({
  declarations: [
    AppComponent,

    FormularioAlumnoComponent,
    ListaAlumnosComponent

    LoginComponent,
    SignupComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
