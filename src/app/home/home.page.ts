import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router' 
import { AsignacionpedidoService } from '../servicios/asignacionpedido.service'



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage{

  constructor(
    public router : Router,
    public asigP : AsignacionpedidoService,
     ) {}

  
  IrAMenu(){
    this.router.navigate(['/menu']);
  }
  IrAOrdenar(){
    this.router.navigate(['/ordenar']);
  }
  IrASucursales(){
    this.router.navigate(['/sucursales']);
  }
}
  