import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lvl7p1Component } from './lvl7p1.component';

describe('Lvl7p1Component', () => {
  let component: Lvl7p1Component;
  let fixture: ComponentFixture<Lvl7p1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lvl7p1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lvl7p1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
