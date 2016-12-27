/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { TodoComponent } from './todo.component';

describe('Component: Todo', () => {
  it('should create an instance', () => {
    let component = new TodoComponent();
    expect(component).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let todo = new TodoComponent({
   /*   title: 'hello',
      complete: true */
    });
    expect(todo.title).toEqual('hello');
    expect(todo.complete).toEqual(true);
  });

});

