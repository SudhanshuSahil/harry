import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lvl6p2Component } from './lvl6p2.component';

describe('Lvl6p2Component', () => {
  let component: Lvl6p2Component;
  let fixture: ComponentFixture<Lvl6p2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lvl6p2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lvl6p2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
