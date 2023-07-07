import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Alumno } from 'src/app/models/alumno';
import { AlumnoService } from 'src/app/services/alumno.service';


@Component({
  selector: 'app-formulario-alumno',
  templateUrl: './formulario-alumno.component.html',
  styleUrls: ['./formulario-alumno.component.css']
})
export class FormularioAlumnoComponent implements OnInit {

  alumno:Alumno;
  accion:string = "";

  constructor(private alumnoService: AlumnoService, private activaedRoute:ActivatedRoute, private router:Router){
    this.alumno = new Alumno();
  }
  submitted : boolean=false;

  ngOnInit(): void {
    this.activaedRoute.params.subscribe(params =>{
      if(params['id'] == 0){
        this.accion = "new";
      }
      else{
        this.accion = "update"
        this.cargarAlumno(params['id']);
      }
    })
  }
  public cargarAlumno(id: string){
    this.alumnoService.getAlumnoById(id).subscribe((result:any) => {
      Object.assign(this.alumno, result)
    })
  }

  public confirmarModificacion(){
    this.alumnoService.updateAlumno(this.alumno).subscribe((result:any) => {
      alert("alumno modificado");
    })
    location.reload();
  }

  public crearAlumno(){
    console.log(this.alumno)
    this.alumnoService.createAlumno(this.alumno).subscribe((result:any) => {
      console.log(result);
    });
    location.reload();
  }

  public guardarAlumno(){
    this.alumno = new Alumno();
    this.router.navigate(["administrador/formulario/alumno", 0])

  }

  procesarForm(){
    this.submitted=true;
  }

}
