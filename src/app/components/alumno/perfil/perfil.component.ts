import { Component } from '@angular/core';
import { DatosUsuarioService } from 'src/app/services/datos/datos-usuario.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  editar: boolean = false
  today: Date = new Date
  alumno: any
  constructor(private usuarioData: DatosUsuarioService, private usuarioService: UsuarioService){
    this.today = new Date;
   
  }
  ngOnInit(){
    let token = window.localStorage.getItem("token")
    if(token){
      this.usuarioService.getData(token!).subscribe((result:any)=>{
        this.alumno = result[0]
        console.log(this.alumno);
         
      })
    }
    this.usuarioData.userData$.subscribe(userdata =>{
      console.log("USER DATA: ", userdata.alumno[0]);
      this.alumno = userdata.alumno[0]
      
    })
  }
  handleEdit = () =>{
    this.editar = !this.editar
   
  }
}
