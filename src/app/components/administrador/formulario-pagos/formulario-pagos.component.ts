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
  arrayCarrito!: Array<Insumo>;
  total !: number;

  constructor(private pagoInsumoService: InsumoService) {
    this.arrayInsumos = new Array();
    this.arrayCarrito = new Array();
    this.insumo = new Insumo();

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
        console.log(this.arrayInsumos)
      },
      (error) => { console.log(error); }
    )
  }

  agregarCarrito(ins: Insumo){
    this.arrayCarrito.push(ins);
    this.total = this.total + ins.precio;
    console.log(this.arrayCarrito);
  }

  quitarCarrito(ins: number){
    this.total = this.total - this.arrayCarrito[ins].precio;
    this.arrayCarrito.splice(ins, 1);
    console.log(this.arrayCarrito);
  }

  modificarInsumos(){
    this.pagoInsumoService.modificarInsumos(this.arrayCarrito).subscribe(
      (result) => {
        this.obtenerInsumos();
        this.arrayCarrito = new Array<Insumo>();
      },
      (error) => {}
    );


  }

}
