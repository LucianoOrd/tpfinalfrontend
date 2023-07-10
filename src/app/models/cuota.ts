import { Alumno } from "./alumno"

export class Cuota {
    fechaDePago!: Date;
    fechaCaducidad!: Date;
    pagado!: Boolean;
    importe!: number;
    alumno!: Alumno;

    constructor(fechaDePago?: Date, fechaCaducidad?: Date, pagado?: Boolean, importe?: number, alumno?: Alumno){
        this.fechaDePago = fechaDePago!;
        this.fechaCaducidad = fechaCaducidad!;
        this.pagado = pagado!;
        this. importe = importe!;
        this.alumno = new Alumno(alumno?._id, alumno?.apellido, alumno?.nombre, alumno?.fechaNacimiento, alumno?.dni, alumno?.email, alumno?.nroCelular, alumno?.domicilio, alumno?.fechaInicio, alumno?.plan, alumno?.usuario);
    }
}
