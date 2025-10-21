import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoverModal } from './hover-modal';

describe('HoverModal', () => {
  let component: HoverModal;
  let fixture: ComponentFixture<HoverModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HoverModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoverModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
