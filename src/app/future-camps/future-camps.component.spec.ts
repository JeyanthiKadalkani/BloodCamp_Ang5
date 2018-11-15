import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureCampsComponent } from './future-camps.component';

describe('FutureCampsComponent', () => {
  let component: FutureCampsComponent;
  let fixture: ComponentFixture<FutureCampsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FutureCampsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FutureCampsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
