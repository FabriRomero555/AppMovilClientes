import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
//import { orden } from "../../modelos/orden";
import { PedidosService , pedido} from "../../servicios/pedidos.service";
//import { ChatsService, DetalleChacha } from "../../servicios/Chats.service";
import { ModalController } from "@ionic/angular";
import { DetallesComponent } from "../../componentes/detalles/detalles.component";
import { ChachasService } from "../../servicios/chachas.service"

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.page.html',
  styleUrls: ['./ordenar.page.scss'],
})
export class OrdenarPage implements OnInit  {
  
  public chachaslist:any=[];
  private cod ;
  private referencia : string;
  private telefono : string;
  //public orden : orden
  
  
  constructor(
     public codigo : ChachasService, 
     public router : Router,
     public pedidoService:PedidosService,
     private modal : ModalController) {
     this.cod =  this.pedidoService.getContadorPedido()
     console.log("log: "+ this.cod)
     this.pedidoService.getMotos();
     }
 
  ngOnInit() {
  }

  VolverHome(){
    this.router.navigate(['/home']);
  }
 
  EmpezarPedido(){
  
    this.pedidoService.RegistrarPedidoFB(this.telefono, this.referencia);
    this.router.navigate(['/menu-orden']);
  }
}
