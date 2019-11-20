import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  let component: VoteComponent;
  let fixture: ComponentFixture<VoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should calculate total votes properly', () => {
    component.myVote = 1;
    component.othersVote = 2; 
    expect(component.totalVotes).toBe(3);
  });

  describe('When I upvote,', () => {
    it('should increment total votes', () => {
      component.upVote();

      expect(component.totalVotes).toBe(1);
    })

    it('should NOT increment total votes if I have already submitted a positive vote', () => {
      component.myVote = 1; 

      component.upVote(); 

      expect(component.totalVotes).toBe(1);
    });      

    it('should raise an event', () => { 
      let eventData = null; 
      component.myVoteChanged.subscribe(v => eventData = v);

      component.upVote(); 

      // I'm using toEqual() instead of toBe() here. The former performs a deep equality check 
      // where as the latter (toBe) does a reference check. 
      expect(eventData).toEqual({ myVote: 1}); 
    })

    it('should NOT raise an event if I have already submitted a positive vote', () => {
      component.myVote = 1; 
      let eventData = null; 
      component.myVoteChanged.subscribe(v => eventData = v);

      component.upVote(); 

      expect(eventData).toBeNull(); 
    })

  })


  describe('When I downvote,', () => {
    it('should decrement total votes', () => {
      component.downVote();

      expect(component.totalVotes).toBe(-1);
    });

    it('should NOT decrement total votes if I have already submitted a negative vote', () => {
      component.myVote = -1; 

      component.downVote(); 

      expect(component.totalVotes).toBe(-1);
    });

    it('should raise an event', () => { 
      let eventData = null; 
      component.myVoteChanged.subscribe(v => eventData = v);

      component.downVote(); 

      expect(eventData).toEqual({ myVote: -1 }); 
    })

    it('should NOT raise an event if I have already submitted a negative vote', () => {
      component.myVote = -1; 
      let eventData = null; 
      component.myVoteChanged.subscribe(v => eventData = v);

      component.downVote(); 

      expect(eventData).toBeNull(); 
    });
  });

});
