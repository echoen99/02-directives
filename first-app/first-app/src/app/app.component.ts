import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Root Component</h1>
    <app-lifecycle *ngIf="!delete" [bindable]="boundValue">
        <p>
            {{Test}}
        </p>
    </app-lifecycle>
    <button (click)="delete = !delete">Click to Delete</button>
    <button (click)="test = 'Changed value'">Click to Change Content</button>
    <button (click)="boundValue = 2000">Click to Change Binding</button>
    `
})
export class AppComponent {
  title = 'app works great!!';
  delete=false;
  Test='Starting value';
  boundValue=1000;
}
