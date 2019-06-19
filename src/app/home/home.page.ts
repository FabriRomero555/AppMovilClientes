import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router' 



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage{

  constructor(
    public router : Router,
    
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
  