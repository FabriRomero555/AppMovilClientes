import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { ChachasService, chacha} from "../../servicios/chachas.service";
import { ModalController } from "@ionic/angular";
import { CantidadOrdenComponent } from "../cantidad-orden/cantidad-orden.component";

@Component({
  selector: 'app-menu-orden',
  templateUrl: './menu-orden.page.html',
  styleUrls: ['./menu-orden.page.scss'],
})
export class MenuOrdenPage implements OnInit {
  public chachaslist:any=[];

  constructor(public router : Router, public chachasservice : ChachasService, private modal : ModalController) { }

  ngOnInit() {
    this.chachasservice.getChachas().subscribe(chachas => {
      this.chachaslist = chachas;
    })
  }
    
  VolverHome(){
    this.router.navigate(['/home']);
  }

  SeleccionarChachaPedido(chacha){
    this.modal.create({
      component : CantidadOrdenComponent,
      componentProps :{
        nombre : chacha.nombre_chacha,
        img : chacha.img,
        precio : chacha.precio_chacha
      }
    }).then( (modal) => modal.present())

  }
}
