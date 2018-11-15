import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindDonarComponent } from './find-donar.component';

describe('FindDonarComponent', () => {
  let component: FindDonarComponent;
  let fixture: ComponentFixture<FindDonarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindDonarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindDonarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
