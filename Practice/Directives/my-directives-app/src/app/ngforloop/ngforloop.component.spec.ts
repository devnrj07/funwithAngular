import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgforloopComponent } from './ngforloop.component';

describe('NgforloopComponent', () => {
  let component: NgforloopComponent;
  let fixture: ComponentFixture<NgforloopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgforloopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgforloopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
