import { Plan } from "./plan";
import { Usuario } from "./usuario";

export class Alumno {
  _id!:string;
  apellido!:string;
  nombre!:string;
  fechaNacimiento!:Date;
  dni!:Number;
  email!:string;
  nroCelular!:string;
  domicilio!:string;
  fechaInicio!:string;
  plan!: Plan;
  usuario!: Usuario;
}
