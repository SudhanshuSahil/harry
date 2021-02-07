import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lvl2CopyComponent } from './lvl2-copy.component';

describe('Lvl2CopyComponent', () => {
  let component: Lvl2CopyComponent;
  let fixture: ComponentFixture<Lvl2CopyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lvl2CopyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lvl2CopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
