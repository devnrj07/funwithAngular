import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeComponent } from './like.component';

describe('LikeComponent', () => {
  let component: LikeComponent;
  let fixture: ComponentFixture<LikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should increase the count when iLike is false', () => {
     component.iLike =false;
     component.totalLikes = 10;

     component.click()

     expect(component.iLike).toBe(true)
     expect(component.totalLikes).toBe(11)
  });

  it('should decrease the count when iLike is true', () => {
     component.iLike =true;
     component.totalLikes = 10;

     component.click()

     expect(component.iLike).toBe(false)
     expect(component.totalLikes).toBe(9)
  });
});
