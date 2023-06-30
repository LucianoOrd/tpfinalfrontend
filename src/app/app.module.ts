import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioAlumnoComponent } from './components/administrador/formulario-alumno/formulario-alumno.component';
import { ListaAlumnosComponent } from './components/administrador/lista-alumnos/lista-alumnos.component';

import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';

import { FormsModule } from '@angular/forms';
import { FormularioPagosComponent } from './components/administrador/formulario-pagos/formulario-pagos.component';


import { PerfilComponent } from './components/alumno/perfil/perfil.component';
import { VerSubscripcionComponent } from './components/alumno/ver-subscripcion/ver-subscripcion.component';
import { SemanarutinasComponent } from './components/alumno/semanarutinas/semanarutinas.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    FormularioAlumnoComponent,
    ListaAlumnosComponent,
    LoginComponent,

    SignupComponent,

    SignupComponent,
    NavbarComponent,
    HomeComponent,

    FormularioPagosComponent,


    PerfilComponent,
    VerSubscripcionComponent,
    SemanarutinasComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
