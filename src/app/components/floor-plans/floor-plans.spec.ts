import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloorPlans } from './floor-plans';

describe('FloorPlans', () => {
  let component: FloorPlans;
  let fixture: ComponentFixture<FloorPlans>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FloorPlans]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FloorPlans);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
