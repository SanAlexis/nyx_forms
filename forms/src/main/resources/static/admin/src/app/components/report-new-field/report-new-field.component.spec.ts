import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportNewFieldComponent } from './report-new-field.component';

describe('ReportNewFieldComponent', () => {
  let component: ReportNewFieldComponent;
  let fixture: ComponentFixture<ReportNewFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportNewFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportNewFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
