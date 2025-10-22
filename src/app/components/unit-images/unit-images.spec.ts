import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitImages } from './unit-images';

describe('UnitImages', () => {
  let component: UnitImages;
  let fixture: ComponentFixture<UnitImages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnitImages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnitImages);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
