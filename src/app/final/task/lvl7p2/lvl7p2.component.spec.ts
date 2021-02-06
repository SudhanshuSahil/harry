import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lvl7p2Component } from './lvl7p2.component';

describe('Lvl7p2Component', () => {
  let component: Lvl7p2Component;
  let fixture: ComponentFixture<Lvl7p2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lvl7p2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lvl7p2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
