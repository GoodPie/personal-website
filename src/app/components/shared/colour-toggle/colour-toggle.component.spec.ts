import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColourToggleComponent } from './colour-toggle.component';

describe('ColourToggleComponent', () => {
  let component: ColourToggleComponent;
  let fixture: ComponentFixture<ColourToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColourToggleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColourToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
