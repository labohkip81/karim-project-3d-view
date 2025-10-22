import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Panorama } from './panorama';

describe('Panorama', () => {
  let component: Panorama;
  let fixture: ComponentFixture<Panorama>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Panorama]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Panorama);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
