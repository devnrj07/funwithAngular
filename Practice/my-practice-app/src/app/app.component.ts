import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-practice-app';
  somedata : string
  

  ngOnInit(){

    this.somedata = "Hi children! Im your mimoa"
  }

  
}
