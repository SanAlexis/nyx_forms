import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldNwComponent } from './form-field-nw.component';

describe('FormFieldNwComponent', () => {
  let component: FormFieldNwComponent;
  let fixture: ComponentFixture<FormFieldNwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormFieldNwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFieldNwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
