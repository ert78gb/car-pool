import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCarAddKmComponent } from './my-car-add-km.component';

describe('MyCarAddKmComponent', () => {
  let component: MyCarAddKmComponent;
  let fixture: ComponentFixture<MyCarAddKmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCarAddKmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCarAddKmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
