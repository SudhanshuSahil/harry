import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lvl1p1Component } from './lvl1p1.component';

describe('Lvl1p1Component', () => {
  let component: Lvl1p1Component;
  let fixture: ComponentFixture<Lvl1p1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lvl1p1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lvl1p1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
