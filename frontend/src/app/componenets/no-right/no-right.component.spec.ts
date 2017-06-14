import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoRightComponent } from './no-right.component';

describe('NoRightComponent', () => {
  let component: NoRightComponent;
  let fixture: ComponentFixture<NoRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
