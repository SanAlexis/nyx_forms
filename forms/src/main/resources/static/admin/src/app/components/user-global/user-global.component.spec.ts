import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGlobalComponent } from './user-global.component';

describe('UserGlobalComponent', () => {
  let component: UserGlobalComponent;
  let fixture: ComponentFixture<UserGlobalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserGlobalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
