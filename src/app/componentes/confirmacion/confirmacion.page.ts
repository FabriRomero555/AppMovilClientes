import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { NavController, AlertController } from '@ionic/angular';
@Component({
  selector: 'app-confirmacion',
  templateUrl: './confirmacion.page.html',
  styleUrls: ['./confirmacion.page.scss'],
})
export class ConfirmacionPage implements OnInit {
  myModel: any; // Modelo de datos.
  

  constructor(public router : Router,
    public navCtrl:   NavController,
     public alertCtrl: AlertController
    ) {this.myModel = {}; }

  ngOnInit() {
  }
  VolverAPedido(){
    this.router.navigate(['/pedido']);
  }
}
