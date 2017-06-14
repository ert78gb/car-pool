import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCarDetailsComponent } from './my-car-details.component';

describe('MyCarDetailsComponent', () => {
  let component: MyCarDetailsComponent;
  let fixture: ComponentFixture<MyCarDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCarDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCarDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
