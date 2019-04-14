import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClusterIdSettingComponent } from './cluster-id-setting.component';

describe('ClusterIdSettingComponent', () => {
  let component: ClusterIdSettingComponent;
  let fixture: ComponentFixture<ClusterIdSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClusterIdSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClusterIdSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
