import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDetailsCard } from './project-details-card';

describe('ProjectDetailsCard', () => {
  let component: ProjectDetailsCard;
  let fixture: ComponentFixture<ProjectDetailsCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectDetailsCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectDetailsCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
