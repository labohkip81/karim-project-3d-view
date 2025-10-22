import { Dialog } from '@angular/cdk/dialog';
import { Component } from '@angular/core';

@Component({
  selector: 'app-panorama',
  standalone: false,
  templateUrl: './panorama.html',
  styleUrl: './panorama.css'
})
export class Panorama {

  constructor(private dialog: Dialog){

  }


  closeModal(){
    this.dialog.closeAll()
  }

}
