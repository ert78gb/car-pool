import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoldCarComponent } from './hold-car.component';

describe('HoldCarComponent', () => {
  let component: HoldCarComponent;
  let fixture: ComponentFixture<HoldCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoldCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoldCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
