import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClusterButtonsComponent } from './cluster-buttons.component';

describe('ClusterButtonsComponent', () => {
  let component: ClusterButtonsComponent;
  let fixture: ComponentFixture<ClusterButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClusterButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClusterButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
