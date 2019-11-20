import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

displayMessage : string
@Input() dataFromGP :string
dataFromChild :any
  constructor() { }

  ngOnInit() {
    this.displayMessage = 'data passed from parent component'
  }

  handleEvent(data:any){
    this.dataFromChild = data
  }

}
