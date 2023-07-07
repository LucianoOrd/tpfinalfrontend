import { Component, OnInit } from '@angular/core';
import { InsumoService } from 'src/app/services/insumo.service';
import { Insumo } from 'src/app/models/insumo';
import { Pago } from 'src/app/models/pago';


@Component({
  selector: 'app-formulario-pagos',
  templateUrl: './formulario-pagos.component.html',
  styleUrls: ['./formulario-pagos.component.css']
})

export class FormularioPagosComponent implements OnInit {

  pago!: Pago;
  insumo!: Insumo;
  arrayInsumos!: Array<Insumo>;

  constructor(private pagoInsumoService: InsumoService) {

  }

  ngOnInit(): void {

  }

  obtenerInsumos() {
    this.pagoInsumoService.getInsumos().subscribe(
      (result) => {
        this.arrayInsumos = new Array<Insumo>();
        var aux: Insumo = new Insumo();
        result.forEach((insumo: Insumo) => {
          Object.assign(aux, insumo);
          this.arrayInsumos.push(aux);
          aux = new Insumo();
        });
      },
      (error) => { console.log(error); }
    )
  }

  calcularTotal(){
    
  }

}
