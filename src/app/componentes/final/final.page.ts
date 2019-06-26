import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-final',
  templateUrl: './final.page.html',
  styleUrls: ['./final.page.scss'],
})
export class FinalPage implements OnInit {

  constructor(public router : Router) { }

  ngOnInit() {
  }
  VolverHome(){
    this.router.navigate(['/home']);
  }

}
