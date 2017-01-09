import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';

export class UserDetailGuard implements CanActivate {
    canActivate(roter: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        return confirm('Are you sure?');
    }
}