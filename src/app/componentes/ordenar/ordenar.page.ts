import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { orden } from "../../modelos/orden";
import { PedidosService } from "../../servicios/pedidos.service";
// verificar si la direccion esta bien 
import { ChachasService  } from "../../servicios/Chachas.service";




@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.page.html',
  styleUrls: ['./ordenar.page.scss'],
})
export class OrdenarPage implements OnInit  {
  
  public chachaslist:any=[];

  private referencia : string;
  private telefono : string;
  public orden : orden
  
  
  constructor(public router : Router, public chachasservice : ChachasService, public pedidoService:PedidosService) { }

  
  



ngOnInit() {
  this.chachasservice .getChaCHACHAS().subscribe(DetalleTipoEmpanada => {
    this.chachaslist = DetalleTipoEmpanada;
  })
}
  VolverHome(){
    this.router.navigate(['/home']);
  }

  EmpezarPedido(){
    

    this.router.navigate(['/menu-orden']);
  }
}


