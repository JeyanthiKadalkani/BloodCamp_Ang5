import { Injectable } from '@angular/core';
import { CanActivate, CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ShowDonarComponent } from './show-donar/show-donar.component';


@Injectable({
  providedIn: 'root'
})
export class UniversalGuardGuard implements CanActivate, CanDeactivate<ShowDonarComponent> {
  canDeactivate() {
    return confirm('Are you sure?');
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const status = sessionStorage.getItem('logged');
    let resp = false
    if (status === 'yes') {
      resp = true;
    } else {
      resp = false;
    }
    return resp;
  }
}
