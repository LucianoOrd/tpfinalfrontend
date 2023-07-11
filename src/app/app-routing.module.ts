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
import { FormularioInsumosComponent } from './components/administrador/formulario-insumos/formulario-insumos.component';
import { ListaInsumosComponent } from './components/administrador/lista-insumos/lista-insumos.component';
import { InsumosComponent } from './components/alumno/insumos/insumos.component';
import { GenerarRutinasComponent } from './components/entrenador/generar-rutinas/generar-rutinas.component';


const routes: Routes = [


  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'navbar', component: NavbarComponent },

  // Rutas del Administrador
  { path: 'administrador/formulario/insumo/:id', component:FormularioInsumosComponent},
  { path: 'administrador/lista-insumos', component:ListaInsumosComponent},
  { path: 'administrador/formulario/alumno', component: FormularioAlumnoComponent},
  { path: 'administrador/formulario/alumno/:id', component: FormularioAlumnoComponent},
  { path: 'administrador/lista-alumnos', component: ListaAlumnosComponent},

  { path: 'home', component: HomeComponent },
//ENTRENADOR
{ path: 'generarRutinas', component: GenerarRutinasComponent},
  //rutas alumno
  { path: 'alumno/perfil', component: PerfilComponent },
  { path: 'alumno/cuota', component: VerSubscripcionComponent },
  { path: 'alumno/calendario', component: SemanarutinasComponent },
  { path: 'alumno/insumos', component: InsumosComponent },
  { path: '**', component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
