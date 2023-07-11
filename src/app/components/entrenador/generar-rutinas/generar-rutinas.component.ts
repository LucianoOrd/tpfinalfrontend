import { Component } from '@angular/core';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-generar-rutinas',
  templateUrl: './generar-rutinas.component.html',
  styleUrls: ['./generar-rutinas.component.css'],
})
export class GenerarRutinasComponent {
  alumnos: any;
  alumnoa: any
  constructor(private alumnoService: AlumnoService) {}
  ngOnInit() {
    this.alumnoService.getAlumnos().subscribe((result: any) => {
      console.log(result);
      this.alumnos = result;
    });
  }
  setearModificar = (alumn:any) =>{
    this.alumnoa = alumn
  }
  guardar = () =>{
    console.log("ALUMNO GUARDADO: ",this.alumnoa);
    
  }
}
