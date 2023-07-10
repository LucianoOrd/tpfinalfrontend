import { Component, Input } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { DatosUsuarioService } from 'src/app/services/datos/datos-usuario.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  ngOnInit(){
    let token = window.localStorage.getItem("token")
    if(token){
      this.usuarioService.userOnly(token!).subscribe((result:any)=>{
        //hay dats {id: '64aaf46182be77453822e5a3', rol: 'alumno', iat: 1688940367}
         if(result.rol == 'alumno'){
          this.router.navigate(["alumno/perfil"])
         }
      })
    }
  }
  user: Usuario = new Usuario() 
  constructor(private usuarioService: UsuarioService, private datosUsuario: DatosUsuarioService, private router:Router){
    
  }
  
  login = () =>{
    this.usuarioService.ingresarUser(this.user).subscribe(
      (result:any)=>{
        this.datosUsuario.setUserData(result)
        this.router.navigate(["alumno/perfil"])
        window.localStorage.setItem("token", result.token)
      }
    )
  }
}
