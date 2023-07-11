import { Component, OnInit } from '@angular/core';
import { AlumnoService } from 'src/app/services/alumno.service';
import { MercadopService } from 'src/app/services/mercadop/mercadop.service';
import { PlanService } from 'src/app/services/plannes/plan.service';

@Component({
  selector: 'app-formulario-pagos',
  templateUrl: './formulario-pagos.component.html',
  styleUrls: ['./formulario-pagos.component.css'],
})
export class FormularioPagosComponent implements OnInit {
  categoriaActual: any = 'insumo';
  alumnos:any
  alumno: any
  planes: any
  qr:any
  enlace:any
  form = {
    precio: 0,
    descripcion: '',
    categoria: '',
    fecha: new Date(),
  };

  mp = {
    precio: 0,
    descripcion: ''
  }
  constructor(private planS: PlanService, private alumnoS:AlumnoService, private mercadop: MercadopService) {
  this.getplanes()    
  this.getalumnos()
  }

  getplanes = () =>{
    this.planS.getPlanes().subscribe((result)=>{
      this.planes = result
    })
  }

  getalumnos = () =>{
    this.alumnoS.getAlumnos().subscribe((result)=>{
      this.alumnos = result
    })
  }
  generarqr = () =>{
    this.mercadop.generarqrrr(this.mp).subscribe((result: any)=>{
      console.log("qrrr???: ", result);
      this.qr = result.message
      this.enlace = result.enlance
    })
  }

  ngOnInit(): void {}
  onCategoriaChange = (ca: string) => {
    this.categoriaActual = ca;
  };

  guardarplan=()=>{
    console.log("alumno pagado: ", this.alumno)
  }
}
