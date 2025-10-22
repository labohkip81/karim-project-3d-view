import { Component, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Panorama } from './components/panorama/panorama';
import { Book } from './components/book/book';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  constructor(private dialog: MatDialog) {

  }
  protected readonly title = signal('karim-3d');

  drawerMode: 'list' | 'details' = 'list';
  selectedProject: any = null;

  openProjectDetails(project: any) {
    this.selectedProject = project;
    this.drawerMode = 'details';
  }

  backToList() {
    this.drawerMode = 'list';
    this.selectedProject = null;
  }

  openPanoramaModal() {
    this.dialog.open(Panorama, {
      width: '90vw',
      maxWidth: 'none',
      panelClass: 'mat-elevation-z8',
      hasBackdrop: true,
    })
  }

  openBookModal(){
    this.dialog.open(Book)
  }

  closeModal(){
    this.dialog.closeAll()
  }

}
