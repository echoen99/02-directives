import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number;
  title = '';
  complete = false;
  num = 0;

  //constructor() { }
/*
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
*/

  ngOnInit() {
    while (this.num < 100000) {
      this.num++;
    }
  }

}
