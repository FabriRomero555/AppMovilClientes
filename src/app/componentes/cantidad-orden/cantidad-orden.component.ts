import { Component, OnInit } from '@angular/core';
import {NavParams, ModalController} from '@ionic/angular';
import {Router} from '@angular/router'
import { detalle } from "../../modelos/detalle";
import { PedidosService } from "../../servicios/pedidos.service"

@Component({
  selector: 'app-cantidad-orden',
  templateUrl: './cantidad-orden.component.html',
  styleUrls: ['./cantidad-orden.component.scss'],
})
export class CantidadOrdenComponent implements OnInit {

  public detallesList = [];
  private cantidad_chacha : number;
  public precio_chacha : number;
  private precio_detalle : number;
  public nombre_chacha : string
  public precio_pedido : number;
  public prueba : number;

    
  constructor(private navparams : NavParams,
     private modal : ModalController,
      public router : Router,
      private pedidosService : PedidosService) {
        this.prueba = this.cantidad_chacha;
    }


  ngOnInit() {

    this.precio_chacha = this.navparams.get('precio');
    this.nombre_chacha = this.navparams.get('nombre');
    this.cantidad_chacha = 1;
    //this.CalcularPrecio(this.cantidad_chacha)
    this.precio_detalle = (this.cantidad_chacha * this.precio_chacha) 
    //this.detalle = (this.cantidad_chacha.toString() +' '+ this.nombre_chacha);
    //this.precio_pedido = this.pedidosService.GetPrecio('DPDIWSZjrrPrlPCfoIq8');
    
  }
//recuperar cada que cambia por el teclado la cantidad que se pone
  Aumentar1(){
    //limite de pedir chachas???
      this.cantidad_chacha = (this.cantidad_chacha - -1);
      //this.CalcularPrecio(this.precio_chacha);
      //this.precio_detalle = (this.cantidad_chacha * this.precio_chacha);
      //console.log(this.precio_detalle)
      
  }

  Disminuir1(){
      if  (this.cantidad_chacha >> 1 ){
      this.cantidad_chacha = (this.cantidad_chacha - 1);
      //this.precio_detalle = (this.cantidad_chacha * this.precio_chacha);
      //console.log(this.precio_detalle)
      }
      else{ alert("no se puede pedir menos de 1 chacha");}
  }

  MandarDetalle(){

    const detalle : detalle = {
        nombre_chacha : this.nombre_chacha,
        cantidad_chacha : this.cantidad_chacha,
     }

  this.precio_pedido = this.precio_pedido + this.precio_detalle;
  this.pedidosService.SetPrecioDetalleFB('RPHJc7z7EfRywvYsmlZH' , (this.cantidad_chacha*this.precio_chacha));
  //console.log(this.cantidad_chacha*this.precio_chacha)

  this.detallesList.push(detalle)  

  this.pedidosService.EnviarDetalleaFB(detalle , 'RPHJc7z7EfRywvYsmlZH', this.precio_pedido)

  this.router.navigate(['/pedido']);

  /*console.log(this.detallesList);
  console.log(this.detalle)
  console.log(this.cantidad_chacha);
  console.log(this.precio_detalle);
  console.log(this.precio_pedido);*/

    this.modal.dismiss();
  }

  Cancelar(){
    this.modal.dismiss();
  }
}
