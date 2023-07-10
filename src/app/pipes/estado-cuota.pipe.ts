import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'estadoCuota'
})
export class EstadoCuotaPipe implements PipeTransform {

  transform(value: Boolean): unknown {
    if (value === true){
      return "Pagado";
    }
    if (value === false){
      return "Impaga";
    }
    return "Desconocido";
  }

}
