import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportStatisticListComponent } from './report-statistic-list.component';

describe('ReportStatisticListComponent', () => {
  let component: ReportStatisticListComponent;
  let fixture: ComponentFixture<ReportStatisticListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportStatisticListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportStatisticListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
