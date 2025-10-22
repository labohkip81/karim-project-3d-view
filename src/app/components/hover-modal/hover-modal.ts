import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FloorPlans } from '../floor-plans/floor-plans';
import { UnitImages } from '../unit-images/unit-images';
import { Book } from '../book/book';

@Component({
  selector: 'app-hover-modal',
  standalone: false,
  templateUrl: './hover-modal.html',
  styleUrl: './hover-modal.css'
})
export class HoverModal {

  constructor(private dialog: MatDialog){

  }

  openFloorPlans(){
    this.dialog.open(FloorPlans)
  }


  openImagesModal(){
    this.dialog.open(UnitImages)
  }

  closeCard(){
    this.dialog.closeAll();
  }

  openBookModal(){
    this.dialog.open(Book)
  }

}
