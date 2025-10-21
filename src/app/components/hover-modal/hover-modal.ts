import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-hover-modal',
  standalone: false,
  templateUrl: './hover-modal.html',
  styleUrl: './hover-modal.css'
})
export class HoverModal {

  constructor(private dialog: MatDialog){

  }

  closeCard(){
    this.dialog.closeAll();
  }

}
