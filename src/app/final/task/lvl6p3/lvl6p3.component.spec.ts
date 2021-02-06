import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lvl6p3Component } from './lvl6p3.component';

describe('Lvl6p3Component', () => {
  let component: Lvl6p3Component;
  let fixture: ComponentFixture<Lvl6p3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lvl6p3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lvl6p3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
