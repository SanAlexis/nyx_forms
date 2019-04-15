import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportNwFieldComponent } from './report-nw-field.component';

describe('ReportNwFieldComponent', () => {
  let component: ReportNwFieldComponent;
  let fixture: ComponentFixture<ReportNwFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportNwFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportNwFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
