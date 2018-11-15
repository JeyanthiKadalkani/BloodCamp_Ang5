import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastCampComponent } from './past-camp.component';

describe('PastCampComponent', () => {
  let component: PastCampComponent;
  let fixture: ComponentFixture<PastCampComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastCampComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastCampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
