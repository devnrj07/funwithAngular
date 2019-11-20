import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngforloop',
  templateUrl: './ngforloop.component.html',
  styleUrls: ['./ngforloop.component.scss']
})
export class NgforloopComponent  {

  cars = [
  {
    name:'Name',wheels :'Wheels'
  },
    {
    name:'tarzan',wheels:4
  },
{
  name:'truckX', wheels : 6
},
{
  name:'monster', wheels:8
}
]

}
