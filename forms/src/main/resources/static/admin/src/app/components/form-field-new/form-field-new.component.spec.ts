import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldNewComponent } from './form-field-new.component';

describe('FormFieldNewComponent', () => {
  let component: FormFieldNewComponent;
  let fixture: ComponentFixture<FormFieldNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormFieldNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFieldNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
