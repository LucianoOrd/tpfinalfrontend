import { Categoria } from "./categoria";

export class Insumo {
  _id!:string;
  nombre!:string;
  descripcion!:string;
  precio!:number;
  stock!:number;
  imagen!:string;
  categoria!:Categoria;

  constructor(_id?: string, nombre?: string, descripcion?: string, precio?: number, stock?: number, imagen?: string, categoria?: Categoria){
    this._id = _id!;
    this.nombre = nombre!;
    this.descripcion = descripcion!;
    this.precio = precio!;
    this.stock = stock!;
    this.imagen = imagen!;
    this.categoria = new Categoria(categoria?._id, categoria?.descripcion);

  }
}
