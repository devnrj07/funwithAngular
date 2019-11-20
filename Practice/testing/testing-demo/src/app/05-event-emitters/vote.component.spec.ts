import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {
  var component: VoteComponent; 

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('should raise vote change event when upvoted', () => {
      //Arrange
      let totalvotes = null;
      component.voteChanged.subscribe(tv => totalvotes = tv)

      //Act
      component.upVote()

      //Assert
      expect(totalvotes).not.toBeNull()
  
  });
});