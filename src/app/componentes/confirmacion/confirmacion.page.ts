import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { PedidosService } from "../../servicios/pedidos.service";
import { Geolocation } from '@ionic-native/geolocation/ngx';


import { NavController, AlertController } from '@ionic/angular';
@Component({
  selector: 'app-confirmacion',
  templateUrl: './confirmacion.page.html',
  styleUrls: ['./confirmacion.page.scss'],
})
export class ConfirmacionPage implements OnInit {
  myModel: any; // Modelo de datos.
  

  private callePrincipal : string;
  private calleAux1 : string;
  private calleAux2 : string;
  private referenciaCasa : string;
  private numeroCasa : string;

  latitud_cliente : number;
  longitud_cliente : number;

  constructor(public router : Router,
    public pedidosService : PedidosService,
    private geolocation : Geolocation,
    public navCtrl:   NavController,
     public alertCtrl: AlertController
    ) {this.myModel = {} } 
  ngOnInit() {
  }

  VolverAPedido(){
    this.router.navigate(['/pedido']);
  }

  TerminarOrden(){
      this.pedidosService.SetDireccionPedidoFB('RPHJc7z7EfRywvYsmlZH', this.callePrincipal, this.calleAux1, this.calleAux2, this.referenciaCasa, this.numeroCasa)
      this.router.navigate(['/final']);
  }

  EnviarMiUbicacion(){
    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      this.latitud_cliente = resp.coords.latitude;
      this.longitud_cliente = resp.coords.longitude;

      console.log(this.latitud_cliente);
      console.log(this.longitud_cliente);

      this.pedidosService.SetCordenadasClienteFB('RPHJc7z7EfRywvYsmlZH',this.latitud_cliente,this.longitud_cliente)

     }).catch((error) => {
       console.log('Error getting location', error);
     });

  }

}
