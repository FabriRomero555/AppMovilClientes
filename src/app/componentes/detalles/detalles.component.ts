import { Component, OnInit } from '@angular/core';
import {NavParams, ModalController} from '@ionic/angular';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss'],
})
export class DetallesComponent implements OnInit {
  
  public detallesList = [
    'hola', 'holitas', 'holotas'
  ];
  public detalle : {

    nombre_chacha : string,
    
    precio_detalle : number,
  }
  public cantidad_chacha : number;

  constructor(private navparams : NavParams, private modal : ModalController) { }

  ngOnInit() {}

}

