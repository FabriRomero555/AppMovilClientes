import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from "rxjs/operators";
 
export interface sucursal
{
  id : string
  direccion_sucursal: string
  ubicacion: any 
  telefono_sucursal: string
  nombre_sucursal: string
  imagen_sucursal: any
  latitud : number
  longitud : number
  }


@Injectable({
  providedIn: 'root'
})
export class SucursalesService {

  constructor(private db : AngularFirestore) { }

  public getSucursales()
  {
    return this.db.collection('sucursales').snapshotChanges().pipe(map(sucursales => {
      return sucursales.map(a =>{
          const data= a.payload.doc.data() as sucursal;
          data.id=a.payload.doc.id;
  return data;
          
        })
    }))
   

  }
}
