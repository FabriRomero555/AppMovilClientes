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

  private ordenesCollection : AngularFirestoreCollection<orden>
  //private orden : Observable<orden>

  constructor(public  db : AngularFirestore) {
    this.ordenesCollection = db.collection<orden>('pedidos')

    console.log('llega la servicio')
   }

  public Hola(){
    console.log("holitas")
  }

  public CrearPedido( orden : orden )
  {
    
    return this.ordenesCollection.add(orden)
  }
  registrarPedido(telefono: string ,nombreMoto: string) {
    
    return new Promise((resolve, reject) => {  
      this.db.collection('pedido').add({
        UIDMoto: 'moto',
        nombreMototaxi: nombreMoto,
        telefono: telefono, 
        entregado: false,
        
        
      }).catch(err => reject(err));

     // alert("Pedido realizado");
      
      
    });
    
  }
}