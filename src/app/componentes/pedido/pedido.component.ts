import { Component, OnInit } from '@angular/core';
import {NavParams, ModalController} from '@ionic/angular';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.scss'],
})
export class PedidoComponent implements OnInit {
  public detallesList = [];

  public detalle : {

    nombre_chacha : string,
    cantidad_chacha : number,
    precio_detalle : number,

  }

  

  constructor() { }

  ngOnInit() {}

}
