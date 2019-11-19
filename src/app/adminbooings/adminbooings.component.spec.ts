import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminbooingsComponent } from './adminbooings.component';

describe('AdminbooingsComponent', () => {
  let component: AdminbooingsComponent;
  let fixture: ComponentFixture<AdminbooingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminbooingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminbooingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
