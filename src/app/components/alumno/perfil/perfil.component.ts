import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  editar: boolean = false
  today: Date = new Date
 
  constructor(){
    this.today = new Date;
   
  }
  
  handleEdit = () =>{
    this.editar = !this.editar
   
  }

}
