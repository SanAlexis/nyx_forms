import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InquiryInvitationsListComponent } from './inquiry-invitations-list.component';

describe('InquiryInvitationsListComponent', () => {
  let component: InquiryInvitationsListComponent;
  let fixture: ComponentFixture<InquiryInvitationsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InquiryInvitationsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InquiryInvitationsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
