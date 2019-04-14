import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticDetailComponent } from './statistic-detail.component';

describe('StatisticDetailComponent', () => {
  let component: StatisticDetailComponent;
  let fixture: ComponentFixture<StatisticDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatisticDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
