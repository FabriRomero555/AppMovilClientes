import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore'
//import { orden } from '../modelos/orden'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { unescapeIdentifier } from '@angular/compiler';
import { firestore } from 'firebase';
import { detalle } from "../modelos/detalle";
declare var google;
export interface pedido{
    id : string
    UIDMoto: string,
    latitud_cliente : string,
    longitud_cliente : string,
    nombre_cliente: string,
    telefono_cliente: string, 
    entregado: boolean,
    precio_pedido : number,
    fecha : Date,
    detalles : any,
    callePrincipal : string,
    numeroCasa : string,
    referenciaCasa : string,
    calleAux1 : string,
    calleAux2 : string,

}

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  public detalles = []
  ubicaciones: Observable<any>;
  sucursalesChachas: Observable<any>;
  listaUbicaciones: AngularFirestoreCollection<any>;
  listaSucursales: AngularFirestoreCollection<any>;
  motosUbicaciones = [];
  fecha : Date = new Date();
  contador: Observable<any>;
  listacontador: AngularFirestoreCollection<any>;
  codigoPedido = [];
  sucursales = [];
  //private ordenesCollection : AngularFirestoreCollection<orden>
  
  constructor(public  db : AngularFirestore) {
    //this.ordenesCollection = db.collection<orden>('pedidos')
    //this.getSucursales();
   }

  RegistrarPedidoFB(telefono: string ,nombre: string) { 
    
    this.cambiarEstado(this.asignacionMoto(this.motosUbicaciones));
    return new Promise((resolve, reject) => {  
      this.db.collection('pedidos').doc(this.getContadorPedido().toString()).set({
        UIDMoto: this.asignacionMoto(this.motosUbicaciones),
        sucursalAsignada: '-',
        codigoPedido:this.getContadorPedido(),
        latitudCliente : '00.00',
        longitudCliente : '00.00',
        nombreCliente: nombre,
        telefonoCliente: telefono, 
        entregado: false,
        precio_pedido: 0,
        fecha : (this.fecha.getDate().toString() +'-'+ this.fecha.getMonth().toString() +'-'+ this.fecha.getFullYear().toString()),
        detalles : this.detalles,
        callePrincipal : '-',
        numeroCasa : '-',
        referenciaCasa : '-',
        calleAux1 : '-',
        calleAux2 : '-'

      }).catch(err => reject(err));   
      this.actualizarContador();     
    });
   
  }
  


  EnviarDetalleaFB(detalle : detalle ){
    var codigo = parseInt(this.getContadorPedido().toString()) -1;
      this.db.collection('pedidos').doc(codigo.toString()).update({
      detalles : firestore.FieldValue.arrayUnion(detalle),
      //precio_pedido : precio_pedido //aun no funciona precio de pedido
    })

  }

  SetDireccionPedidoFB(callePrincipal : string , calleAux1 : string , calleAux2 : string, referenciaCasa : string,
    numeroCasa : string)
  {
    var codigo = parseInt(this.getContadorPedido().toString()) -1;
    this.db.collection('pedidos').doc(codigo.toString()).update({
      callePrincipal : callePrincipal,
      calleAux1 : calleAux1,
      calleAux2 : calleAux2,
      referenciaCasa : referenciaCasa,
      numeroCasa : numeroCasa
    })
  }

  /*GetPedidoFB( pedido_id : string){
    return this.db.collection('pedidos').doc(pedido_id).valueChanges()}*/

  SetPrecioDetalleFB(precio_detalle : number){
    var codigo = parseInt(this.getContadorPedido().toString()) -1;
    this.db.collection('pedidos').doc(codigo.toString()).update({
      precio_pedido : precio_detalle
    })
  }

  SetCordenadasClienteFB(lat : number , long : number){
    var codigo = parseInt(this.getContadorPedido().toString()) -1;
    this.db.collection('pedidos').doc(codigo.toString()).update({
      latitudCliente : lat,
      longitudCliente : long,
      sucursalAsignada : this.asignacionSucursal(this.sucursales, lat, long)
    })
  }

  SetPrecioPedidoFB(precio_acumulado : number){
    var codigo = parseInt(this.getContadorPedido().toString()) -1;
    this.db.collection('pedidos').doc(codigo.toString()).update({
      precio_pedido : precio_acumulado,
    })
  }

  GetPedidoFB() {
    var codigo = parseInt(this.getContadorPedido().toString()) -1;
    return this.db.collection('pedidos').doc(codigo.toString()).snapshotChanges().pipe(map(pedidos => {
      const data = pedidos.payload.data() as pedido;
      data.id = pedidos.payload.id;
      return data;
      
    }))   
  }
  cambiarEstado(uid){
    this.db.collection('motoTaxis').doc(uid).update({
     enPedido: true
    })
  }
  actualizarContador(){
    const increment = firestore.FieldValue.increment(1);
    this.db.collection('contadorPedido').doc('contador').update({
     contador: increment
    })
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
    // console.log(this.asignacionSucursal(sucursales, 1,1));
     
    })
 return this.sucursales;   
}
  asignacionMoto(ubicaciones){
    let motosDistancias = [];
    let sucursal = new google.maps.LatLng(-17.3921318,-66.2234896);
    for (let loc of ubicaciones){
      
      if(loc.latitud != null && loc.disponible === true && loc.enPedido === false){ 
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
    asignacionSucursal(sucursales, lat, lng){
      let sucursalesDistancias = [];
      let pedido = new google.maps.LatLng(lat,lng);
      for (let loc of sucursales){
        
        if(loc.latitud != null){ 
          let latLng = new google.maps.LatLng(loc.latitud, loc.longitud); 
          let total = google.maps.geometry.spherical.computeDistanceBetween(latLng, pedido); 
          console.log('La distacia de la '+loc.nombre_sucursal+' ubicada en la '+ loc.direccion_sucursal + ' es de ' + total+' metros.');
          sucursalesDistancias.push(total);
        }   
      } 
      var sucursal = null;
      var temp = null;
      var min=Math.min.apply(null, sucursalesDistancias);
      for (let loc of sucursales){
        
        if(loc.latitud != null){
          let latLng = new google.maps.LatLng(loc.latitud, loc.longitud); 
          let total = google.maps.geometry.spherical.computeDistanceBetween(latLng, pedido);
          if( total === min){
            sucursal = 'La sucursal que se le asigno es la '+loc.nombre_sucursal+ ' ubicada en '+ loc.direccion_sucursal;
            temp = loc.nombre_sucursal+ ' ubicada en la '+ loc.direccion_sucursal;
          }
        }   
      } 
      
      console.log('La menor distancia es '+ min +' de la sucursal de '+ temp);     
      return sucursal;
      } 
    public getContadorPedido(){
    
      this.listacontador = this.db.collection('contadorPedido');
  
        //Cargando datos de firebase
          this.contador = this.listacontador.snapshotChanges().pipe(
            map(actions => 
              actions.map(a => {
                const data = a.payload.doc.data();
                const id =  a.payload.doc.id;
                return { id, ...data };
              })
            )
          );
  
          this.contador.subscribe(counter =>
            {
            this.codigoPedido = counter[0].contador;
             console.log('contador: ', this.codigoPedido);
             console.log('DATO: ' + this.getDato(counter));
  
            })
            return this.codigoPedido;
    }
    getDato(ubicaciones){
      var codigo = null;
     
         codigo = ubicaciones[0].contador; 
       
       return codigo
     } 
}