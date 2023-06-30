import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';

import { FormularioAlumnoComponent } from './components/administrador/formulario-alumno/formulario-alumno.component';
import { ListaAlumnosComponent } from './components/administrador/lista-alumnos/lista-alumnos.component';



import { PerfilComponent } from './components/alumno/perfil/perfil.component';
import { VerSubscripcionComponent } from './components/alumno/ver-subscripcion/ver-subscripcion.component';
import { SemanarutinasComponent } from './components/alumno/semanarutinas/semanarutinas.component';


//agregar nuevas paginas aca              vvvvvv
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'navbar', component: NavbarComponent },

  { path: 'home', component: HomeComponent },
  { path: 'formulario-alumno/:id', component: FormularioAlumnoComponent},
  { path: 'lista-alumnos', component: ListaAlumnosComponent},

  { path: 'alumno/perfil', component: PerfilComponent },
  { path: 'alumno/cuota', component: VerSubscripcionComponent },
  { path: 'alumno/calendario', component: SemanarutinasComponent },
  { path: '**', component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
