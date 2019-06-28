import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";


export interface chacha {
  id_chacha :string
  nombre_chacha : string
  descripcion_chacha : string
  img : string
  precio_chacha : number
}
@Injectable({
  providedIn: 'root'
})
export class ChachasService {
  contador: Observable<any>;
  listaContador: AngularFirestoreCollection<any>;
  //public codigo: number;
  constructor(private db :AngularFirestore) { }

  public getChachas(){
    return this.db.collection('chachas').snapshotChanges().pipe(map(chachastipos =>{
      return chachastipos.map(a =>{
        const data = a.payload.doc.data() as chacha;
        data.id_chacha = a.payload.doc.id;
        return data;
      })
    }))
  }
  public getContadorPedido(){
    this.listaContador = this.db.collection('contadorPedido');
    let codigo;
    //Cargando datos de firebase
      this.contador = this.listaContador.snapshotChanges().pipe(
        map(actions => 
          actions.map(a => {
            codigo = a.payload.doc.data().contador;
            const data = codigo;
            const id =  a.payload.doc.id;
            return { data };
          })
        )
      );
      
    //Actualizando mapa
    this.contador.subscribe(ubicaciones =>
      {
       console.log('ubicaciones de los conductores: ', ubicaciones);

      })
      return codigo;
  }
  getChachaRooms(){

    return this.db.collection('chachaRooms').snapshotChanges()
  }
}
