import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lvl4p1Component } from './lvl4p1.component';

describe('Lvl4p1Component', () => {
  let component: Lvl4p1Component;
  let fixture: ComponentFixture<Lvl4p1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lvl4p1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lvl4p1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
