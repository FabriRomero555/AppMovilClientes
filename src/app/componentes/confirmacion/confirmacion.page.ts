import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { PedidosService } from "../../servicios/pedidos.service";
@Component({
  selector: 'app-confirmacion',
  templateUrl: './confirmacion.page.html',
  styleUrls: ['./confirmacion.page.scss'],
})
export class ConfirmacionPage implements OnInit {

  private callePrincipal : string;
  private calleAux1 : string;
  private calleAux2 : string;
  private referenciaCasa : string;
  private numeroCasa : string;

  constructor(public router : Router,
    public pedidosService : PedidosService) { }

  ngOnInit() {
  }

  VolverAPedido(){
    this.router.navigate(['/pedido']);
  }

  TerminarOrden(){
      this.pedidosService.SetDireccionPedido('aidLu4g9XAEu8BAw4zn3', this.callePrincipal, this.calleAux1, this.calleAux2, this.referenciaCasa, this.numeroCasa)
      this.router.navigate(['/final']);
  }

}
