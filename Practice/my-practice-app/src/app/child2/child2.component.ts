import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component implements OnInit {
  isHidden : boolean = true;
  @Output() messageForParent : EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {

    
  }

  onClick(){
    this.isHidden = !this.isHidden;
    this.messageForParent.emit("Hello mom hello mimoa!")
    
  }

}
