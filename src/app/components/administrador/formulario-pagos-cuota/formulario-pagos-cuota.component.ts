import { Component } from '@angular/core';
import { Alumno } from 'src/app/models/alumno';
import { Cuota } from 'src/app/models/cuota';
import { CuotasService } from 'src/app/services/cuotas.service';

@Component({
  selector: 'app-formulario-pagos-cuota',
  templateUrl: './formulario-pagos-cuota.component.html',
  styleUrls: ['./formulario-pagos-cuota.component.css']
})
export class FormularioPagosCuotaComponent {

  cuota!: Cuota;
  dni!: number;
  arrayCuotas!: Array<Cuota>;
  constructor(private pagoCuotaService: CuotasService) {

  }

  obtenerCuotas(){
    this.pagoCuotaService.getCuotas().subscribe(
      (result) => {
        this.arrayCuotas = new Array<Cuota>();
        var aux: Cuota = new Cuota();
        result.forEach((cuota: Cuota) => {
          Object.assign(aux, cuota);
          this.arrayCuotas.push(aux);
          aux = new Cuota();
        });
      },
      (error) => { console.log(error); }
    )
  }

  obtenerCuotasDni(){
    this.pagoCuotaService.getCuotaByDni(this.dni).subscribe(
      (result) => {
        this.arrayCuotas = new Array<Cuota>();
        var aux: Cuota = new Cuota();
        result.forEach((cuota: Cuota) => {
          Object.assign(aux, cuota);
          console.log(result[0].importe.$numberDecimal)
          aux.importe = result[0].importe.$numberDecimal
          this.arrayCuotas.push(aux);
          aux = new Cuota();
        });
        console.log(this.arrayCuotas)
        
      },
      (error) => { console.log(error); }
    )
  }
}
