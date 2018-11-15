import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowHospitalComponent } from './show-hospital.component';

describe('ShowHospitalComponent', () => {
  let component: ShowHospitalComponent;
  let fixture: ComponentFixture<ShowHospitalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowHospitalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowHospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
