import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Alumno } from 'src/app/models/alumno';
import { Cuota } from 'src/app/models/cuota';
import { CuotasService } from 'src/app/services/cuotas.service';

@Component({
  selector: 'app-formulario-pagos-cuota',
  templateUrl: './formulario-pagos-cuota.component.html',
  styleUrls: ['./formulario-pagos-cuota.component.css']
})
export class FormularioPagosCuotaComponent implements OnInit {

  cuota!: Cuota;
  dni!: number;
  arrayCuotas!: Array<Cuota>;
  dtoptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private pagoCuotaService: CuotasService) {
    this.cuota = new Cuota();
  }

  ngOnInit(): void {
    this.dtoptions = {
      pagingType: 'full_numbers'
    }
  }

  obtenerCuotas() {
    this.pagoCuotaService.getCuotas().subscribe(
      (result) => {
        this.arrayCuotas = new Array<Cuota>();
        var aux: Cuota = new Cuota();
        result.forEach((cuota: Cuota) => {
          Object.assign(aux, cuota);
          this.arrayCuotas.push(aux);
          aux = new Cuota();
        });
        this.dtTrigger.next(null);
      },
      (error) => { console.log(error); }
    )
  }

  obtenerCuotasDni() {
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
        this.dtTrigger.next(null);
      },
      (error) => { console.log(error); }
    )
  }

  generarCuponPago(cuot: Cuota) {
    this.cuota = new Cuota(cuot.fechaDePago, cuot.fechaCaducidad, cuot.pagado, cuot.importe, cuot.alumno);
  }
}
