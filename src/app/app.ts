import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
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

}
