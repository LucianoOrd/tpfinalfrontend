import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-formulario-alumno',
  templateUrl: './formulario-alumno.component.html',
  styleUrls: ['./formulario-alumno.component.css']
})
export class FormularioAlumnoComponent implements OnInit {
  
  constructor(){}
submitted : boolean=false;

  ngOnInit(): void {

  }

  procesarForm(){
    this.submitted=true;
  }

}
