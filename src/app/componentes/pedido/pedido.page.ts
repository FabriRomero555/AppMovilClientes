import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.page.html',
  styleUrls: ['./pedido.page.scss'],
})
export class PedidoPage implements OnInit {

  constructor(public router : Router) { }

  ngOnInit() {
  }

  IraConfirmar(){
    this.router.navigate(['/confirmacion']);
  }
  IraMenu(){
    this.router.navigate(['/menu-orden'])
  }
}
