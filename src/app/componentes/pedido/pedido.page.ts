import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { ChachasService,DetalleChachas } from "../../servicios/Chachas.service";


@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.page.html',
  styleUrls: ['./pedido.page.scss'],
})
export class PedidoPage implements OnInit {

  public chachaslist:any=[];

  constructor(public router : Router, public chachasservice : ChachasService) { }

  ngOnInit() {
    this.chachasservice .getchachitas().subscribe(DetalleTipoEmpanada => {
      this.chachaslist = DetalleTipoEmpanada;
  })
  }






  IraConfirmar(){
    this.router.navigate(['/confirmacion']);
  }
  IraMenu(){
    this.router.navigate(['/menu-orden'])
  }
}
