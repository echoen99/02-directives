import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserEditGuard } from './user-edit.guard';

@Component({
    selector: 'app-user-edit',
    template: `
        <h3>User Edit</h3>
        <button (click)="done=true">Done</button>
        <button class="btn btn-alert" (click)="onNavigate()">Go Home</button>
    `
})
export class UserEditComponent implements Comp{
    done = false;
    constructor(private router: Router) {}
    onNavigate() {
        this.router.navigate(['/']);
    }
}
