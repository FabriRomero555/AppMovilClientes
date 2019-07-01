import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { CantidadOrdenComponent } from "../cantidad-orden/cantidad-orden.component";
import { PedidosService, pedido } from "../../servicios/pedidos.service";

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.page.html',
  styleUrls: ['./pedido.page.scss'],
})

export class PedidoPage implements OnInit {

  public detallesList = [];
  public pedido : pedido;
  public precioTotal : number;

  constructor(public router : Router,
    public pedidosService : PedidosService,
    ) { }

  ngOnInit() {

    this.pedidosService.GetPedidoFB().subscribe( pedido => {
      //console.log(pedido);
      this.pedido = pedido; 
      this.precioTotal = this.pedido.precio_pedido;

    console.log(pedido.precio_pedido)
    console.log(this.precioTotal)
})
    
  }

  IraConfirmar(){
    this.router.navigate(['/confirmacion']);
  }
  IraMenu(){
    this.router.navigate(['/menu-orden'])
  }
  
}
