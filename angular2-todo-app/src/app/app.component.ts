import { Component } from '@angular/core';
import { TodoComponent } from './todo/todo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'app works!';
  name = 'Yosi';
  yosiColor = 'blue';

  customers = [
    { id: 1, name: 'yosi' },
    { id: 2, name: 'david' },
    { id: 3, name: 'moshe' },
    { id: 4, name: 'sigal' },
    { id: 5, name: 'benny' },
  ];

  changeColor() {
    this.yosiColor = this.yosiColor === 'blue' ? 'red' : 'blue';
  }

}
