import { Component, OnInit } from '@angular/core';
import {NavParams, ModalController} from "@ionic/angular";

@Component({
  selector: 'app-chacha',
  templateUrl: './chacha.component.html',
  styleUrls: ['./chacha.component.scss'],
})
export class ChachaComponent implements OnInit {

  public chacha : any;
  constructor( 
    private navparams : NavParams, 
    private modal: ModalController
    ) { }

  ngOnInit() {

    this.chacha = this.navparams.get('chacha')
  }

  closeChacha(){
    this.modal.dismiss();
  }

}
