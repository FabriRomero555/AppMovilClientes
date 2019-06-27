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

  constructor(public router : Router,
    public pedidosService : PedidosService,
    ) { }

  ngOnInit() {

    this.pedidosService.GetPedidoFB('RPHJc7z7EfRywvYsmlZH').subscribe( pedido => {
      console.log(pedido);
      this.pedido = pedido; 

    this.MostrarTotalPrueba();
})
    
  }

  IraConfirmar(){
    this.router.navigate(['/confirmacion']);
  }
  IraMenu(){
    this.router.navigate(['/menu-orden'])
  }
  MostrarTotalPrueba(){
    console.log(this.pedido.precio_pedido); 
  }
}
