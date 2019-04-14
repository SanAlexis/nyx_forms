import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InquiryDetailComponent } from './inquiry-detail.component';

describe('InquiryDetailComponent', () => {
  let component: InquiryDetailComponent;
  let fixture: ComponentFixture<InquiryDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InquiryDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InquiryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
