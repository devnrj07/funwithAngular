import { Component } from '@angular/core';
import {Input} from '@angular/core';

@Component({
  selector: 'app-like',
  template: `
  <i
  class="glyphicon glyphicon-heart" 
  [class.highlighted]="iLike"
  (click)="click()">
</i>
<span>{{ totalLikes }}</span>
  `,
  styleUrls: ['./like.component.scss']
})
export class LikeComponent  {

  @Input() totalLikes = 0;
    @Input() iLike = false;
    
    click(){
        this.iLike = !this.iLike;
        this.totalLikes += this.iLike ? 1 : -1;
    }

}
