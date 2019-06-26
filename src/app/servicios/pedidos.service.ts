import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore'
import { orden } from '../modelos/orden'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { unescapeIdentifier } from '@angular/compiler';
import { firestore } from 'firebase';

export interface pedido{
  id : string,
  nombreCliente : string,
  telefonoCliente : string,
}


@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  public detalles = []

  fecha : Date = new Date();

  private ordenesCollection : AngularFirestoreCollection<orden>
  
  constructor(public  db : AngularFirestore) {
    this.ordenesCollection = db.collection<orden>('pedidos')
   }

  registrarPedido(telefono: string ,nombre: string) { 
    return new Promise((resolve, reject) => {  
      this.db.collection('pedidos').add({
        UIDMoto: 'motoid',
        latitudCliente : '00.00',
        longitudCliente : '00.00',
        nombreCliente: nombre,
        telefonoCliente: telefono, 
        entregado: false,
        fecha : (this.fecha.getDate().toString() +'-'+ this.fecha.getMonth().toString() +'-'+ this.fecha.getFullYear().toString()),
        detalles : this.detalles,
        callePrincipal : '-',
        numeroCasa : '-',
        referenciaCasa : '-',
        calleAux1 : '-',
        calleAux2 : '-'

      }).catch(err => reject(err));        
    });
  }

  /*getPedidoid(pedidoid : string){
    return this.db.collection('pedidos').doc(pedidoid).valueChanges()
  }*/

  GetPedido(pedidoid : string){
    return this.db.collection('pedidos').doc(pedidoid).valueChanges()
    //obtiene un observable
  }
  
  EnviarDetalleaFB(detallePedido : string , pedido_id : string, precio_pedido : number){
      this.db.collection('pedidos').doc(pedido_id).update({
      detalles : firestore.FieldValue.arrayUnion(detallePedido),
      precio_pedido : precio_pedido
    })
}
  SetDireccionPedido(pedido_id : string, callePrincipal : string , calleAux1 : string , calleAux2 : string, referenciaCasa : string,
    numeroCasa : string)
  {
    this.db.collection('pedidos').doc(pedido_id).update({
      callePrincipal : callePrincipal,
      calleAux1 : calleAux1,
      calleAux2 : calleAux2,
      referenciaCasa : referenciaCasa,
      numeroCasa : numeroCasa

    })
  }

  

}