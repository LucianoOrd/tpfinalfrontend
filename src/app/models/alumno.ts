import { Plan } from './plan';
import { Usuario } from './usuario';

export class Alumno {
  _id!:string;
  apellido!:string;
  nombre!:string;
  fechaNacimiento!:Date;
  dni!:Number;
  email!:string;
  nroCelular!:string;
  domicilio!:string;
  fechaInicio!:Date;
  plan!: Plan;
  usuario!: Usuario;

  constructor(_id?: string, apellido?: string, nombre?: string, fechaNacimiento?: Date, dni?: Number, email?: string, nroCelular?: string, domicilio?: string, fechaInicio?: Date, plan?: Plan, usuario?: Usuario){
    this._id = _id!;
    this.apellido = apellido!;
    this.nombre = nombre!;
    this.fechaNacimiento = fechaNacimiento!;
    this.dni = dni!;
    this.email = email!;
    this.nroCelular = nroCelular!;
    this.domicilio = domicilio!;
    this.fechaInicio = fechaInicio!;
    this.plan = new Plan(plan?.nombrePlan, plan?.cantDias);
    this.usuario = new Usuario(usuario?.nombreUsuario, usuario?.password);
  }
}
