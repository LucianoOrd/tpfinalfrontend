import { Alumno } from "./alumno"

export class Cuota {
    _id!: string;
    fechaDePago!: Date;
    fechaCaducidad!: Date;
    pagado!: Boolean;
    importe!: number;
    alumno!: Alumno;

    constructor(_id?: string ,fechaDePago?: Date, fechaCaducidad?: Date, pagado?: Boolean, importe?: number, alumno?: Alumno){
        this._id = _id!;
        this.fechaDePago = fechaDePago!;
        this.fechaCaducidad = fechaCaducidad!;
        this.pagado = pagado!;
        this. importe = importe!;
        this.alumno = new Alumno(alumno?._id, alumno?.apellido, alumno?.nombre, alumno?.fechaNacimiento, alumno?.dni, alumno?.email, alumno?.nroCelular, alumno?.domicilio, alumno?.fechaInicio, alumno?.plan, alumno?.usuario);
    }
}
