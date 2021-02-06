import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lvl1p2Component } from './lvl1p2.component';

describe('Lvl1p2Component', () => {
  let component: Lvl1p2Component;
  let fixture: ComponentFixture<Lvl1p2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lvl1p2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lvl1p2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
