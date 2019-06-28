import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {AngularFireModule} from '@angular/fire';
import { AngularFirestoreModule, FirestoreSettingsToken} from '@angular/fire/firestore';
import { firebaseConfig  }from '../environments/environment';
import { AngularFireAuthModule} from '@angular/fire/auth'
import { MasinfoComponent} from './componentes/masinfo/masinfo.component';
//import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { CantidadOrdenComponent } from "./componentes/cantidad-orden/cantidad-orden.component";
import { ChachaComponent } from "./componentes/chacha/chacha.component"; 
import { PedidoComponent } from "./componentes/pedido/pedido.component";
import { DetallesComponent } from "./componentes/detalles/detalles.component";
import { FormsModule } from '@angular/forms';

import { Geolocation } from '@ionic-native/geolocation/ngx';
import { CustomFormsModule } from 'ng2-validation' // ng2-validation

@NgModule({
  declarations: [AppComponent, CantidadOrdenComponent, PedidoComponent, DetallesComponent, ChachaComponent , MasinfoComponent ],
  entryComponents: [CantidadOrdenComponent, PedidoComponent, DetallesComponent, ChachaComponent, MasinfoComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, 
  AngularFireModule.initializeApp(firebaseConfig), AngularFirestoreModule, FormsModule,      // Esto le da acceso a la aplicación a todas las características de formularios de plantilla, incluyendo ngModel.
  CustomFormsModule // Validación personalizadas de formularios en Angular, inspirada en la validación de jQuery.

],

  providers: [
    //InAppBrowser,
    StatusBar,
    Geolocation,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {provide: FirestoreSettingsToken, useValue: {} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
