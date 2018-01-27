import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevSignupComponent } from './dev-signup.component';

describe('DevSignupComponent', () => {
  let component: DevSignupComponent;
  let fixture: ComponentFixture<DevSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
