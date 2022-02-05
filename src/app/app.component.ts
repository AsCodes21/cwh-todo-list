import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cwh-todo-list';
  variable = 1;
  constructor(){
    setInterval(() => {
      this.variable = this.variable+1
    }, 1000);
  }
}
