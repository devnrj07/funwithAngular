import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HiddenpropertyComponent } from './hiddenproperty.component';

describe('HiddenpropertyComponent', () => {
  let component: HiddenpropertyComponent;
  let fixture: ComponentFixture<HiddenpropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiddenpropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HiddenpropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
