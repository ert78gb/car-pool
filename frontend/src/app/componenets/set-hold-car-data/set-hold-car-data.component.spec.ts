import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetHoldCarDataComponent } from './set-hold-car-data.component';

describe('SetHoldCarDataComponent', () => {
  let component: SetHoldCarDataComponent;
  let fixture: ComponentFixture<SetHoldCarDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetHoldCarDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetHoldCarDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
