import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './myhtml.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  today : Date;
  constructor(){
    this.today = new Date;
  }
}
