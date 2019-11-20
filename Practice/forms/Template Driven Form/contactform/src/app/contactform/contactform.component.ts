import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.scss']
})
export class ContactformComponent  {

  Topics = [
    {id :1,name:'Angular'},
    {id :2,name:'React'},
    {id :3,name:'Vue'},
  ]

  Packs = [
    {id:1,name:'weekly'},
    {id:2,name:'monthly'},
    {id:3,name:'Annually'}

  ]
  log(x){
    console.log(x.value)
  }

  submit(data :any){
    console.log(data.value)
  }
}
