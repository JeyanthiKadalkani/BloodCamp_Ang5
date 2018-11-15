import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentInteractionService {
  userStatus: BehaviorSubject<string> = new BehaviorSubject('');
  constructor() { }

  changeUserStatus(currentMessgae: string) {
    this.userStatus.next(currentMessgae);
  }
}
