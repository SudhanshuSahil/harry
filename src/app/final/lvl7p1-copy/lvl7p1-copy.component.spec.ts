import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lvl7p1CopyComponent } from './lvl7p1-copy.component';

describe('Lvl7p1CopyComponent', () => {
  let component: Lvl7p1CopyComponent;
  let fixture: ComponentFixture<Lvl7p1CopyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lvl7p1CopyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lvl7p1CopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
