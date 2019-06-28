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


  getChachaRooms(){

    return this.db.collection('chachaRooms').snapshotChanges()
  }
}
