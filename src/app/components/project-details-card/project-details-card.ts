import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-details-card',
  standalone: false,
  templateUrl: './project-details-card.html',
  styleUrl: './project-details-card.css'
})
export class ProjectDetailsCard {

  @Input() projectNumber = '';

}
