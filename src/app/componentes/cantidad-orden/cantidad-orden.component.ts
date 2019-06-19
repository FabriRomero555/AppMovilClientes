import { Component, OnInit } from '@angular/core';
import {NavParams, ModalController} from '@ionic/angular';
import {Router} from '@angular/router'
import { DetallesComponent } from "../detalles/detalles.component";
import { detalle } from "../../modelos/detalle";

@Component({
  selector: 'app-cantidad-orden',
  templateUrl: './cantidad-orden.component.html',
  styleUrls: ['./cantidad-orden.component.scss'],
})
export class CantidadOrdenComponent implements OnInit {

  public detallesList = [
    'hola', 'holitas', 'holotas'
  ];

  public detalle : detalle;

  public precio : number;
  private cantidad_chacha : number;
  private precio_total : number;
  cant : number;
  nombre : string

  constructor(private navparams : NavParams, private modal : ModalController, public router : Router) { }

  ngOnInit() {

    this.precio = this.navparams.get('precio');
    this.nombre = this.navparams.get('nombre');
    this.cantidad_chacha = 1;
    this.precio_total = (this.cantidad_chacha * this.precio) 

  }
//recuperar cada que cambia por el teclado la cantidad que se pone
  VolverMenu(){
    this.modal.dismiss()

  }

  Aumentar1(){
    //limite de pedir chachas???
      this.cantidad_chacha = this.cantidad_chacha + 1;
      this.precio_total = (this.cantidad_chacha * this.precio);
  }

  Disminuir1(){
    if  (this.cantidad_chacha >> 1 ){
    this.cantidad_chacha = this.cantidad_chacha - 1;
    this.precio_total = (this.cantidad_chacha * this.precio);}
    else{ console.log("no se puede pedir menos de 1 chacha");}
  }

  MandarDetalle(){
    this.router.navigate(['/pedido']);
    
    
    console.log(this.detallesList);
    console.log(this.cantidad_chacha);
    console.log(this.precio_total);

    this.modal.dismiss();
  }

  SeleccionarCantidadPedido(){
    this.modal.create({
      component : CantidadOrdenComponent,
      componentProps :{
        ////
      }
    }).then( (modal) => modal.present())

  }

  AgregarLista(){
    this.detallesList.push(this.detalle.toString())
  }
}
