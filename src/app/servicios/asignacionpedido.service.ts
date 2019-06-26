import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
declare var google;

@Injectable({
  providedIn: 'root'
})
export class AsignacionpedidoService {
  ubicaciones: Observable<any>;
  sucursalesChachas: Observable<any>;
  listaUbicaciones: AngularFirestoreCollection<any>;
  listaSucursales: AngularFirestoreCollection<any>;
  motosUbicaciones = [];
  sucursales = [];
  map: any;
  constructor(private db: AngularFirestore) { }
  registrarPedido(nombreMoto: string, apellidoMoto: string, latitudMoto: number, longitudMoto: number) {
    this.cambiarEstado(this.asignacionMoto(this.motosUbicaciones));
    return new Promise((resolve, reject) => {  
      this.db.collection('pedido').add({
        UIDMotoTaxi: this.asignacionMoto(this.motosUbicaciones),
        nombreMototaxi: nombreMoto,
        apellidoMotoTaxi: apellidoMoto, 
        entregado: false,
        latitud: latitudMoto,
        longitud: longitudMoto,
        
      })

     // alert("Pedido realizado");
      
      
    });
    
  }
  getMotos(){
    
    this.listaUbicaciones = this.db.collection('motoTaxis');

    //Cargando datos de firebase
      this.ubicaciones = this.listaUbicaciones.snapshotChanges().pipe(
        map(actions => 
          actions.map(a => {
            const data = a.payload.doc.data();
            const id =  a.payload.doc.id;
            return { id, ...data };
          })
        )
      );
    this.ubicaciones.subscribe(ubicaciones =>
      {
       this.motosUbicaciones = ubicaciones;
       console.log('ubicaciones de los conductores: ', ubicaciones); 
       console.log(this.asignacionMoto(ubicaciones));
       
      })
   return this.ubicaciones;   
}
getSucursales(){
    
  this.listaSucursales = this.db.collection('sucursales');

  //Cargando datos de firebase
    this.sucursalesChachas = this.listaSucursales.snapshotChanges().pipe(
      map(actions => 
        actions.map(a => {
          const data = a.payload.doc.data();
          const id =  a.payload.doc.id;
          return { id, ...data };
        })
      )
    );
  this.sucursalesChachas.subscribe(sucursales =>
    {
     this.sucursales = sucursales;
     console.log('ubicaciones de las sucursales: ', sucursales); 
     console.log(this.asignacionMoto(sucursales));
     
    })
 return this.ubicaciones;   
}
asignacionMoto(ubicaciones){
  let motosDistancias = [];
  let sucursal = new google.maps.LatLng(-17.3921318,-66.2234896);
  for (let loc of ubicaciones){
    
    if(loc.latitud != null && loc.disponible === true){ 
      let latLng = new google.maps.LatLng(loc.latitud, loc.longitud); 
      let total = google.maps.geometry.spherical.computeDistanceBetween(latLng, sucursal); 
      console.log('La distancia del conductor '+loc.apellidoMotoTaxi + ' '+ loc.uid +' es '+ total + ' metros');
      motosDistancias.push(total);
    }   
  } 
  var moto: string;
  var min=Math.min.apply(null, motosDistancias);
  for (let loc of ubicaciones){
    
    if(loc.latitud != null && loc.disponible === true){
      let latLng = new google.maps.LatLng(loc.latitud, loc.longitud); 
      let total = google.maps.geometry.spherical.computeDistanceBetween(latLng, sucursal);
      if( total === min){
        moto = loc.uid;
      }
    }   
  } 
  
  console.log('La menor distancia es '+ min +' de '+ moto);     
  return moto;
  } 
  asignacionSucursal(sucursales){
    let sucursalesDistancias = [];
    let pedido = new google.maps.LatLng(-17.3921318,-66.2234896);
    for (let loc of sucursales){
      
      if(loc.latitud != null && loc.disponible === false){ 
        let latLng = new google.maps.LatLng(loc.latitud, loc.longitud); 
        let total = google.maps.geometry.spherical.computeDistanceBetween(latLng, pedido); 
        console.log('La sucursal mas cercana al pedido es la de '+loc.nombre_sucursal+' ubicada en la '+ loc.direccionSucursal);
        sucursalesDistancias.push(total);
      }   
    } 
    var sucursal = null;
    var min=Math.min.apply(null, sucursalesDistancias);
    for (let loc of sucursales){
      
      if(loc.latitud != null && loc.disponible === false){
        let latLng = new google.maps.LatLng(loc.latitud, loc.longitud); 
        let total = google.maps.geometry.spherical.computeDistanceBetween(latLng, sucursal);
        if( total === min){
          sucursal = loc.nombre_sucursal;
        }
      }   
    } 
    
    console.log('La menor distancia es '+ min +' de '+ sucursal);     
    return sucursal;
    } 
    cambiarEstado(uid){
      this.db.collection('motoTaxis').doc(uid).update({
       enPedido: true
      })
    }
}
