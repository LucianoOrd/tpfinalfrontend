import { Usuario } from "./usuario";

export class Entrenador {
  _id!:string;
  apellido!: string;
  nombre!: string;
  fechaNacimiento!: Date;
  dni!: string;
  email!: string;
  nroCelular!: string;
  domicilio!: string;
  fechaInicio!: string;
  usuario!: Usuario;
}
