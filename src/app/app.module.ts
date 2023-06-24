import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioAlumnoComponent } from './components/formulario-alumno/formulario-alumno.component';
import { ListaAlumnosComponent } from './components/lista-alumnos/lista-alumnos.component';

import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,

    FormularioAlumnoComponent,
    ListaAlumnosComponent

    LoginComponent,
<<<<<<< HEAD
    SignupComponent,
    NavbarComponent,
    HomeComponent
=======
    SignupComponent

>>>>>>> bf7b1a473d206f7ede282d7632c4a8c253a495a8
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
