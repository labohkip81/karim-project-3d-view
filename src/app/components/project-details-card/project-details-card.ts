import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UnitImages } from '../unit-images/unit-images';
import { FloorPlans } from '../floor-plans/floor-plans';
import { Book } from '../book/book';

@Component({
  selector: 'app-project-details-card',
  standalone: false,
  templateUrl: './project-details-card.html',
  styleUrl: './project-details-card.css'
})
export class ProjectDetailsCard {

  @Input() projectNumber = '';

  constructor(private dialog: MatDialog) {

  }


  openImagesDialog(){
    this.dialog.open(UnitImages)
  }


  openFloorPlansDialog(){
    this.dialog.open(FloorPlans)
  }


  openBookModal(){
    this.dialog.open(Book)
  }

}
