import { Component} from '@angular/core';
import {NavParams} from "@ionic/angular";
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-masinfo',
  templateUrl: './masinfo.component.html',
  styleUrls: ['./masinfo.component.scss'],

})
export class MasinfoComponent  {
  
  public nombresuc: string;
  public direccionsuc: string;
  public telefonosuc: string;
  public ubicacion : any;
  public imagensuc: any;
  public latitudsuc: number;
  public longitudsuc: number;
 
  constructor( private navparams: NavParams, 
    public router : Router, 
    public modal: ModalController,
     
  
  ) { }

  ngOnInit() {
    this.navparams.get('nombresuc')
    this.navparams.get('direccionsuc')
    this.navparams.get('telefonosuc')
    this.navparams.get('ubicacion')
    this.navparams.get('imagensuc')
    this.navparams.get('latitudsuc')
    this.navparams.get('longitudsuc')
    
  }

  Cerrar() 
  {
    this.modal.dismiss();
  }
  
 
 AbrirMapa()
 {
  this.modal.dismiss();
   this.router.navigate(['/mapa']);

  }
 
  }
