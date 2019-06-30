import { AfterContentInit, Component, OnInit, ViewChild } from '@angular/core';
import { SucursalesService,sucursal} from 'src/app/servicios/sucursales.service';

import {Geolocation} from '@ionic-native/geolocation/ngx';
declare var google;
@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit, AfterContentInit  {
  
  map :any ;
  public  lat: number;
  public lng : number;
  listaSuc : any =[];

  @ViewChild('mapElement') mapElement;
  constructor(public SucursalesService:SucursalesService,public geolocation: Geolocation) { }

  ngOnInit() {

    this.SucursalesService.getSucursales().subscribe(sucursales =>{
    this.listaSuc = sucursales;
    console.log(this.listaSuc);
    this.AddMarker(this.listaSuc);
  
  })

  }
  ngAfterContentInit(): void {

    this.map = new google.maps.Map(
      this.mapElement.nativeElement,
      {
        center: {lat: -16.397, lng: -68.644},
        zoom: 8
      });
    this.geolocation.getCurrentPosition().then((resp) => {
      let latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
      let mapOptions = {
        center: latLng,
        zoom: 18,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
    });
    this.ObtenerPosicionActual();
     
  }

ObtenerPosicionActual()
{
  this.geolocation.getCurrentPosition().then((position) =>  {
    this.lat = position.coords.latitude;
    this.lng = position.coords.longitude;
    setTimeout(()=>{
      let latLng = new google.maps.LatLng(this.lat, this.lng);   
    let marker = new google.maps.Marker({
      position: latLng,
      animation: google.maps.Animation.Drop,
      icon: { url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png" },
      label: {text:'Aqui Estas!'},
      size: 20 ,
      map: this.map})
    
  }, 3000);

});

}
AddMarker(listaSuc)
{ 
  for (let sucursal of this.listaSuc)
  {
    
    let latLng = new google.maps.LatLng(sucursal.latitud, sucursal.longitud);   
    let marker = new google.maps.Marker({
      position: latLng,
      animation: google.maps.Animation.Drop,
      icon: { url: "http://maps.google.com/mapfiles/kml/pal2/icon32.png" },
      label: {text: sucursal.nombre_sucursal},

      map: this.map
    });
    
  }

}
}
