import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Insumo } from 'src/app/models/insumo';
import { InsumoService } from 'src/app/services/insumo.service';

@Component({
  selector: 'app-lista-insumos',
  templateUrl: './lista-insumos.component.html',
  styleUrls: ['./lista-insumos.component.css']
})
export class ListaInsumosComponent {

  insumos:Array<Insumo>;

  constructor(private insumoSrevice: InsumoService, private router:Router){
    this.insumos = new Array<Insumo>();
    this.obtenerInsumos();
  }

  public obtenerInsumos(){
    this.insumoSrevice.getInsumos().subscribe((result:any) => {
      console.log(result);
      this.insumos = [];
      let unInsumo : Insumo = new Insumo();
      result.forEach((element:any) => {
        Object.assign(unInsumo, element);
        this.insumos.push(unInsumo);
        unInsumo = new Insumo();
      });
    })
  }

  public modificarInsumo(insumo: Insumo){
    this.router.navigate(["administrador/formulario/insumo/", insumo._id])
  }

  public eliminarInsumo(insumo:Insumo){
    this.insumoSrevice.eliminarInsumo(insumo._id).subscribe((result:any) => {
      const index = this.insumos.indexOf(insumo);
      if(index > -1){
        this.insumos.splice(index, 1);
      }
    });
    location.reload();
    // Nose xq no se redirige a la url formulario-alumno/0 cuando elimino el alumno, se queda en el id en la url
    // this.router.navigate(["administrador/formulario/insumo/", 0])
  }

}
