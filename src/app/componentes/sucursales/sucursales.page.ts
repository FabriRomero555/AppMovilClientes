import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SucursalesService,sucursal} from 'src/app/servicios/sucursales.service';
import { ChangeDetectorStatus } from '@angular/core/src/change_detection/constants';
import { map } from "rxjs/operators";
import { ModalController } from '@ionic/angular';

import { MasinfoComponent } from '../masinfo/masinfo.component';


@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.page.html',
  styleUrls: ['./sucursales.page.scss'],
})
export class SucursalesPage implements OnInit {
 
  public listaSuc: any =[];

  constructor(public router: Router, public SucursalesService:SucursalesService, private modal : ModalController ) {}
  
  
   MasInformacion(sucursal)
   {
     this.modal.create({
       component: MasinfoComponent, 
       componentProps : {
       nombresuc : sucursal.nombre_sucursal,
       direccionsuc: sucursal.direccion_sucursal,
       telefonosuc: sucursal.telefono_sucursal,
       ubicacion: sucursal.ubicacion,
       imagensuc: sucursal.imagen_sucursal,
       latitudsuc: sucursal.latitud,
       longitudsuc: sucursal.longitud
       
       }
     }).then ((modal)=>modal.present())
     
    }

  ngOnInit() 
  {
    this.SucursalesService.getSucursales().subscribe(sucursales =>{
    this.listaSuc = sucursales;
      
    })
  }

  VolverHome(){
    this.router.navigate(['/home']);
  }
}
