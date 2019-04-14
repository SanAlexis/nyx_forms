import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportGlobalComponent } from './report-global.component';

describe('ReportGlobalComponent', () => {
  let component: ReportGlobalComponent;
  let fixture: ComponentFixture<ReportGlobalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportGlobalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
