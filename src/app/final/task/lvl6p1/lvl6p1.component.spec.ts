import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lvl6p1Component } from './lvl6p1.component';

describe('Lvl6p1Component', () => {
  let component: Lvl6p1Component;
  let fixture: ComponentFixture<Lvl6p1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lvl6p1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lvl6p1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
