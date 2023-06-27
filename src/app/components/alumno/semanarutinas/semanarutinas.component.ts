import { Component } from '@angular/core';

@Component({
  selector: 'app-semanarutinas',
  templateUrl: './semanarutinas.component.html',
  styleUrls: ['./semanarutinas.component.css']
})
export class SemanarutinasComponent {
  diasSemana: string[] = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
  today: Date = new Date
  ejercicio: any
  ejerciciosGold: any = {
    Lunes: [
      { demostracion: 'youtube', ejercicio: 'asindon' },
      { demostracion: 'youtube', ejercicio: 'asindon2' },
      { demostracion: 'youtube4', ejercicio: 'asindon3' },
      { demostracion: 'youtube', ejercicio: 'asindon4' },
      { demostracion: 'youtube', ejercicio: 'asindon5' }
    ],
    Martes: [
      { demostracion: 'youtube', ejercicio: 'ejercicio1' },
      { demostracion: 'youtube', ejercicio: 'ejercicio2' },
      { demostracion: 'youtube', ejercicio: 'ejercicio3' },
      { demostracion: 'youtube', ejercicio: 'ejercicio4' },
      { demostracion: 'youtube', ejercicio: 'ejercicio5' }
    ],
    Miércoles: [
      { demostracion: 'youtube', ejercicio: 'entrenamiento1' },
      { demostracion: 'youtube', ejercicio: 'entrenamiento2' },
      { demostracion: 'youtube', ejercicio: 'entrenamiento3' },
      { demostracion: 'youtube', ejercicio: 'entrenamiento4' },
      { demostracion: 'youtube', ejercicio: 'entrenamiento5' }
    ],
    Jueves: [
      { demostracion: 'youtube', ejercicio: 'cardio1' },
      { demostracion: 'youtube', ejercicio: 'cardio2' },
      { demostracion: 'youtube', ejercicio: 'cardio3' },
      { demostracion: 'youtube', ejercicio: 'cardio4' },
      { demostracion: 'youtube', ejercicio: 'cardio5' }
    ],
    Viernes: [
      { demostracion: 'youtube', ejercicio: 'flexibilidad1' },
      { demostracion: 'youtube', ejercicio: 'flexibilidad2' },
      { demostracion: 'youtube', ejercicio: 'flexibilidad3' },
      { demostracion: 'youtube', ejercicio: 'flexibilidad4' },
      { demostracion: 'youtube', ejercicio: 'flexibilidad5' }
    ]
  };

  ejerciciosBasic: any = {
    Lunes: [
      { demostracion: 'youtube', ejercicio: 'asindon' },
      { demostracion: 'youtube', ejercicio: 'asindon2' },
      { demostracion: 'youtube4', ejercicio: 'asindon3' },
      { demostracion: 'youtube', ejercicio: 'asindon4' },
      { demostracion: 'youtube', ejercicio: 'asindon5' }
    ],
    Miércoles: [
      { demostracion: 'youtube', ejercicio: 'entrenamiento1' },
      { demostracion: 'youtube', ejercicio: 'entrenamiento2' },
      { demostracion: 'youtube', ejercicio: 'entrenamiento3' },
      { demostracion: 'youtube', ejercicio: 'entrenamiento4' },
      { demostracion: 'youtube', ejercicio: 'entrenamiento5' }
    ],
    Viernes: [
      { demostracion: 'youtube', ejercicio: 'flexibilidad1' },
      { demostracion: 'youtube', ejercicio: 'flexibilidad2' },
      { demostracion: 'youtube', ejercicio: 'flexibilidad3' },
      { demostracion: 'youtube', ejercicio: 'flexibilidad4' },
      { demostracion: 'youtube', ejercicio: 'flexibilidad5' }
    ]
  };
  constructor(){
    this.today = new Date;
    const diaActual = this.diaActual(this.today);
    this.ejercicio = this.obtenerEjercicioDia(diaActual);
  }
  
  diaActual = (fecha: Date): string=>{
    const opcionesFecha: Intl.DateTimeFormatOptions = { weekday: 'long' };
  return fecha.toLocaleDateString('es-ES', opcionesFecha);
  }
  obtenerEjercicioDia(dia: string): any {
    console.log("DIA HOY: ",dia);
    
    if (this.ejerciciosGold.hasOwnProperty(dia)) {
      return this.ejerciciosGold[dia];
    } else {
      return [{ demostracion: 'No hay ejercicios disponibles', ejercicio: 'Descanso' }];
    }
  }
}
