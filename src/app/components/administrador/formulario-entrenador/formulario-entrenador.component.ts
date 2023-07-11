import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Entrenador } from 'src/app/models/entrenador';
import { Rol } from 'src/app/models/rol';
import { Usuario } from 'src/app/models/usuario';
import { EntrenadorService } from 'src/app/services/entrenador/entrenador.service';
import { RolService } from 'src/app/services/rol/rol.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-formulario-entrenador',
  templateUrl: './formulario-entrenador.component.html',
  styleUrls: ['./formulario-entrenador.component.css']
})
export class FormularioEntrenadorComponent {
  entrenador:Entrenador;
  usuario:Usuario;
  accion:string = "";
  roles:Array<Rol>;
  rol: any;
  usuarios:Array<Usuario>;
  iduser:string;
  username!:string;
  user:any;
  id:string = "64acb2abc4e61b109525100e";

  constructor(private entrenadorService: EntrenadorService,
              private activaedRoute:ActivatedRoute,
              private router:Router,
              private usuarioService:UsuarioService,
              private rolService:RolService,
              ){
    this.entrenador = new Entrenador();
    this.usuario = new Usuario();
    this.rol = new Rol();
    this.roles = new Array<Rol>();
    this.usuarios = new Array<Usuario>();
    this.iduser = "";
    this.user = new Usuario();
  }
  submitted : boolean=false;

  public obtenerUsuarios() {
    this.usuarioService.getUsuarios().subscribe((result: any) => {
      console.log(result);
      this.usuarios = [];
      result.forEach((element: any) => {
        let unUsuario: Usuario = new Usuario();
        Object.assign(unUsuario, element);
        this.usuarios.push(unUsuario);
      });
      console.log(this.usuarios); // Imprimir los usuarios obtenidos
    });
  }

  // public obtenerRoles() {
  //   this.rolService.getRolRols().subscribe((result: any) => {
  //     console.log(result);
  //     this.roles = [];
  //     result.forEach((element: any) => {
  //       let unRol: Rol = new Rol();
  //       Object.assign(unRol, element);
  //       this.roles.push(unRol);
  //     });
  //     console.log(this.roles); // Imprimir los roles obtenidos
  //   });
  // }

  public obtenerRolById(){
    this.rolService.getRolRolById(this.id).subscribe((result:any) => {
      this.rol = result;
      console.log(this.rol)
    })
  }


  ngOnInit(): void {
    // this.obtenerRoles();
    this.obtenerUsuarios();
    this.obtenerRolById();
    // this.rol = this.roles.find((rol) => rol.nombreRol == "entrenador");
    // console.log(this.rol);
    this.activaedRoute.params.subscribe(params =>{
      if(params['id'] == 0){
        this.accion = "new";
      }
      else{
        this.accion = "update"
        this.cargarEntrenador(params['id']);
      }
    })
  }
  public cargarEntrenador(id: string){

    this.entrenadorService.getEntrenadorById(id).subscribe((result:any) => {
      Object.assign(this.entrenador, result)
    })
  }

  public confirmarModificacion(){
    this.entrenadorService.updateEntrenador(this.entrenador).subscribe((result:any) => {
      alert("entrenador modificado");
    })
    location.reload();
  }

  public crearEntrenador(){
    console.log(this.entrenador)

    this.user =  this.usuarios[this.usuarios.length - 1];

    this.entrenador.usuario = this.user;
    this.entrenadorService.createEntrenador(this.entrenador).subscribe((result:any) => {
      console.log(result);
    });
  }

  public crearUsuario(){
    this.usuario.rol = this.rol;
    this.username = this.usuario.nombreUsuario;
    console.log(this.username)
    this.usuarioService.createUser(this.usuario).subscribe((result: any) => {
      console.log("-----USUARIO GUARDADO?-----");
      console.log(result);
    })
    this.obtenerUsuarios();
  }

  public confirmarAlta(){
    console.log("-------creando usuario-------")
    this.crearUsuario();
    this.obtenerUsuarios();
    console.log("-------creando entrenador-------")
    setTimeout(() => {
        this.crearEntrenador();
    }, 1000);
}


  public guardarEntrenador(){
    this.entrenador = new Entrenador();
    this.router.navigate(["administrador/formulario/entrenador", 0])

  }
}
