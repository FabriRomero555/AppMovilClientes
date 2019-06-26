import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { CantidadOrdenComponent } from "../cantidad-orden/cantidad-orden.component";
import { PedidosService } from "../../servicios/pedidos.service";

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.page.html',
  styleUrls: ['./pedido.page.scss'],
})

export class PedidoPage implements OnInit {

  public detallesList = [];
  public pedido : any;

  constructor(public router : Router,
    public pedidosService : PedidosService,
    ) { }

  ngOnInit() {

    this.pedidosService.GetPedidoFB('aidLu4g9XAEu8BAw4zn3').subscribe( pedido => {
      console.log(pedido);
      this.pedido = pedido;
})
    
  }

  IraConfirmar(){
    this.router.navigate(['/confirmacion']);
  }
  IraMenu(){
    this.router.navigate(['/menu-orden'])
  }
}
