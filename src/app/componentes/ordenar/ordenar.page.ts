import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { orden } from "../../modelos/orden";
import { PedidosService } from "../../servicios/pedidos.service";
// verificar si la direccion esta bien 
import { ChatsService, DetalleChacha } from "../../servicios/Chats.service";




@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.page.html',
  styleUrls: ['./ordenar.page.scss'],
})
export class OrdenarPage implements OnInit  {
  
  public chachaslist:any=[];

  private referencia : string;
  private telefono : string;
  public orden : orden
  
  
  constructor(public router : Router, public chatsservice : ChatsService, public pedidoService:PedidosService) { }

  ngOnInit() {

    //this.orden.referencia= this.referencia;
    //this.orden.telefono = this.telefono;

    this.chatsservice.getChats().subscribe(DetalleTipoEmpanada => {
      this.chachaslist = DetalleTipoEmpanada;
    })
  }

  VolverHome(){
    this.router.navigate(['/home']);
  }

  EmpezarPedido(){
    //console.log(this.orden.referencia)
    
    //console.log(this.orden)
    //this.pedidoService.Hola();
    //this.pedidoService.CrearPedido(this.telefono, this.referencia)

    this.router.navigate(['/menu-orden']);
  }
}

// export class Page {
//   public ocultar1: boolean = false;
//   accion1(){
//     this.ocultar1 = !this.ocultar1;
//   }
// }
