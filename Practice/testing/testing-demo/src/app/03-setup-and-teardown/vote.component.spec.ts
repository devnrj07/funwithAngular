import { VoteComponent } from './vote.component'; 
import { Component } from '@angular/core';

describe('VoteComponent', () => {
    let component : VoteComponent;
  beforeEach(()=>{
     component = new VoteComponent();
  })
  it('upvote increases the total count by one', () => {

    component.upVote()
    
    expect(component.totalVotes).toBe(1)
  });

  it('downvote to decrease the total vote count by 1', () => {
    component.downVote()

    expect(component.totalVotes).toBe(-1)
  });
});