import { Alumno } from "./alumno"

export class Cuota {
    fechaDePago!: Date;
    fechaCaducidad!: Date;
    pagado!: Boolean;
    importe!: number;
    alumno!: Alumno;
}
