import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InquiryCompactComponent } from './inquiry-compact.component';

describe('InquiryCompactComponent', () => {
  let component: InquiryCompactComponent;
  let fixture: ComponentFixture<InquiryCompactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InquiryCompactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InquiryCompactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
