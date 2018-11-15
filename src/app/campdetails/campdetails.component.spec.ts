import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampdetailsComponent } from './campdetails.component';

describe('CampdetailsComponent', () => {
  let component: CampdetailsComponent;
  let fixture: ComponentFixture<CampdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
