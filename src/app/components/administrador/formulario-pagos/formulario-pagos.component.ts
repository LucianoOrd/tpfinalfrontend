import { Component, OnInit } from '@angular/core';
import { InsumoService } from 'src/app/services/insumo.service';
import { Insumo } from 'src/app/models/insumo';
import { Pago } from 'src/app/models/pago';
import { Subject } from 'rxjs';
import { MercadoPagoService } from 'src/app/services/mercado-pago.service';

@Component({
  selector: 'app-formulario-pagos',
  templateUrl: './formulario-pagos.component.html',
  styleUrls: ['./formulario-pagos.component.css']
})

export class FormularioPagosComponent implements OnInit {

  linkPago!: string;
  qrPago!: string;
  insumo!: Insumo;
  arrayInsumos!: Array<Insumo>;
  arrayCarrito!: Array<Insumo>;
  total !: number;
  carritoVacio!: Boolean;
  dtoptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();


  constructor(private pagoInsumoService: InsumoService, private mercadoPagoInsumoService: MercadoPagoService) {
    this.carritoVacio = true;
    this.linkPago = '';
    this.total = 0;
    this.arrayInsumos = new Array();
    this.arrayCarrito = new Array();
    this.insumo = new Insumo();
    this.obtenerInsumos();

  }

  ngOnInit(): void {
    this.dtoptions = {
      pagingType: 'simple'
    }
  }

  obtenerInsumos() {
    this.pagoInsumoService.getInsumos().subscribe(
      (result) => {
        this.dtTrigger.next(null);
        this.arrayInsumos = new Array<Insumo>();
        var aux: Insumo = new Insumo();
        result.forEach((insumo: Insumo) => {
          Object.assign(aux, insumo);
          aux.precio = Number(aux.precio);
          this.arrayInsumos.push(aux);
          aux = new Insumo();
        });
        console.log(this.arrayInsumos)
      },
      (error) => { console.log(error); }
    )
  }

  agregarCarrito(ins: Insumo) {
    this.arrayCarrito.push(ins);
    this.carritoVacio = false;
    this.total = this.total + Number(ins.precio);
    console.log(this.arrayCarrito);
  }

  quitarCarrito(ins: number) {
    this.total = this.total - Number(this.arrayCarrito[ins].precio);
    this.arrayCarrito.splice(ins, 1);
    if(this.total === 0){
      this.carritoVacio = true;
    }
    console.log(this.arrayCarrito);
  }

  modificarInsumos() {
    this.pagoInsumoService.modificarInsumos(this.arrayCarrito).subscribe(
      (result) => {
        this.obtenerInsumos();
        this.arrayCarrito = new Array<Insumo>();
        this.total = 0;
      },
      (error) => { }
    );
  }

  pagoInsumo(){
    this.mercadoPagoInsumoService.pagoInsumo(this.arrayCarrito).subscribe(
      (result) => {
        this.linkPago = result.link
        this.qrPago = result.qr
        this.modificarInsumos();
      },
      (error) => { 
        console.log(error);
      }
    )
  }

  resetCarrito(){
    this.linkPago = '';
    this.qrPago = '';
    this.arrayCarrito = new Array();
  }

}
