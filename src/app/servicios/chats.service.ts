import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { map } from "rxjs/operators";

export interface DetalleChacha {
  
  Id_Orden : string
  Nombre_Empanada : string
  Precio_Empanada : number
  Cantidad  : number
  
}

@Injectable({
  providedIn: 'root'
})
export class ChatsService {
  constructor( private db : AngularFirestore) { }
  public getChats(){
    return this.db.collection('DetalleTipoEmpanada').snapshotChanges().pipe(map(Detalle_Pedidotipos =>{
      return Detalle_Pedidotipos.map(a =>{
        const data = a.payload.doc.data() as DetalleChacha;
        data.Id_Orden = a.payload.doc.id;
return data;;
})
}))
}

}


