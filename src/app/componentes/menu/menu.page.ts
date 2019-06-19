import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {Router} from '@angular/router'
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import {ModalController} from "@ionic/angular";
import {ChachaComponent} from "../chacha/chacha.component";
import { ChachasService } from 'src/app/servicios/chachas.service';

interface chacha {
  id : string
  descripcion : string
  nombre : string
  img : string
  precio : number

}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit{

  public chachaRooms :any = [];

  empanadas: Observable<any>;
  listaEmpanadas: AngularFirestoreCollection<any>;

  map: any;
  constructor( public chachaservice : ChachasService,
    public router : Router, private database: AngularFirestore, 
    private modal : ModalController) {
    this.getEmpanadas();
   }

   getEmpanadas (){
     this.listaEmpanadas = this.database.collection('chachas');

     this.empanadas = this.listaEmpanadas.snapshotChanges().pipe(
       map(actions => 
        actions.map(a => {
         const data = a.payload.doc.data();
         const id = a.payload.doc.id;
         return { id, ...data};
       })
      )
     );   
   }

  ngOnInit() {
    this.chachaservice.getChachaRooms().subscribe( chachas => {
      chachas.map(chacha => {

        const data : chacha = chacha.payload.doc.data() as chacha;
        data.id = chacha.payload.doc.id;

        console.log(chacha.payload.doc.data())
      })
    })
  }
    
  VolverHome(){
    this.router.navigate(['/home']);
  }

  openChacha(chacha){

    this.modal.create({
      component : ChachaComponent,
      componentProps : {
        chacha: chacha
      }
    }).then((modal) => modal.present())

  }

}
