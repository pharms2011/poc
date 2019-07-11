import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSource = new BehaviorSubject('');
  userEvent = this.userSource.asObservable();
  user = null;

  constructor() { }

  emitChangeInUser(user) {
    console.log('emitChangeInUser called-' + user['user']);
    this.userSource.next(user);
  }

  getUser() {
    return this.user;
  }

  setUser(user) {
    this.user = user['user'];
    console.log('setUser called in app-1' + this.user);
  }
}
