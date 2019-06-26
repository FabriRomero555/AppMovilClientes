import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { map } from "rxjs/operators";


export interface chacha {
  id_chacha :string
  nombre_chacha : string
  descripcion_chacha : string
  img : string
  precio_chacha : number
}

export interface DetalleChachas {
 
  Id_Orden : string
  Nombre_Empanada : string
  Precio_Empanada : number
  Cantidad  : number 
}

@Injectable({
  providedIn: 'root'
})
export class ChachasService {

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
  public getchachitas(){
    return this.db.collection('DetalleTipoEmpanada').snapshotChanges().pipe(map(Detalle_Pedidotipos =>{
      return Detalle_Pedidotipos.map(a =>{
        const data = a.payload.doc.data() as  DetalleChachas;
        data.Id_Orden = a.payload.doc.id;
return data;
})
}))
}


  getChachaRooms(){

    return this.db.collection('chachaRooms').snapshotChanges()
  }
}
