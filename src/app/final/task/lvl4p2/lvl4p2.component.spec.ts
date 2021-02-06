import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lvl4p2Component } from './lvl4p2.component';

describe('Lvl4p2Component', () => {
  let component: Lvl4p2Component;
  let fixture: ComponentFixture<Lvl4p2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lvl4p2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lvl4p2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
