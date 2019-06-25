import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore'
import { orden } from '../modelos/orden'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { unescapeIdentifier } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  fecha : Date = new Date();
  private ordenesCollection : AngularFirestoreCollection<orden>
  

  constructor(public  db : AngularFirestore) {
    this.ordenesCollection = db.collection<orden>('pedidos')

    //console.log('llega la servicio')
   }

  registrarPedido(telefono: string ,nombre: string) {
    
    return new Promise((resolve, reject) => {  
      this.db.collection('pedidos').add({
        UIDMoto: 'moto',
        latitudCliente : '00.00',
        longitudCliente : '00.00',
        nombreCliente: nombre,
        telefonoCliente: telefono, 
        entregado: false,
        fecha : (this.fecha.getDate().toString() +'-'+ this.fecha.getMonth().toString() +'-'+ this.fecha.getFullYear().toString()) 
        
        
     
        
      }).catch(err => reject(err));

     // alert("Pedido realizado");
      
      
    });
    
  }
}