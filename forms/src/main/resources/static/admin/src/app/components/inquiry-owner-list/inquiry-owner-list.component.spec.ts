import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InquiryOwnerListComponent } from './inquiry-owner-list.component';

describe('InquiryOwnerListComponent', () => {
  let component: InquiryOwnerListComponent;
  let fixture: ComponentFixture<InquiryOwnerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InquiryOwnerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InquiryOwnerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
