import { Rol } from "./rol";

export class Usuario {
    _id!:string;
    nombreUsuario!: string;
    password!: string;
    rol!: Rol;

    // constructor(nombreUsuario: string= '', password: string= '', rol: Rol ){
    //     this.nombreUsuario = nombreUsuario;
    //     this.password = password;
    //     this.rol = rol
    // }
}
