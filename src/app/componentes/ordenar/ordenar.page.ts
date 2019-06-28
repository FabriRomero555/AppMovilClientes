import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { orden } from "../../modelos/orden";
import { PedidosService } from "../../servicios/pedidos.service";

import { ChachasService  } from "../../servicios/Chachas.service";
import { NavController, AlertController } from '@ionic/angular';
//'@ionic-angular'





@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.page.html',
  styleUrls: ['./ordenar.page.scss'],
})
export class OrdenarPage implements OnInit  {
  
  myModel: any; // Modelo de datos.
  
  public chachaslist:any=[];

  private referencia : string;
  private telefono : string;
  public orden : orden
  
  
  constructor(public router : Router, public chachasservice : ChachasService,
     public pedidoService:PedidosService,
     public navCtrl:   NavController,
     public alertCtrl: AlertController
     ) {  this.myModel = {}; // Inicializacion del modelo como un objeto vacio.
    }

  
ngOnInit() {
  
}

  VolverHome(){
    this.router.navigate(['/home']);
  }

  EmpezarPedido(){
    

    this.router.navigate(['/menu-orden']);
  }
}


