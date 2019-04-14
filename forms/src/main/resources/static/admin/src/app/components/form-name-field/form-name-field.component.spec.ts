import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNameFieldComponent } from './form-name-field.component';

describe('FormNameFieldComponent', () => {
  let component: FormNameFieldComponent;
  let fixture: ComponentFixture<FormNameFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormNameFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNameFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
