import {Injectable, NgZone} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private ngZone: NgZone) {}
  private pushDataSource = new BehaviorSubject('');
  private userSource = new BehaviorSubject('');
  userData = this.userSource.asObservable();
  pushedData = this.pushDataSource.asObservable();
  user: any;
  tag: any;

  getTag() {
    return this.tag;
  }

  setTag( tag ) {
    this.tag = tag;
  }

  getUser() {
    console.log(this.user + 'getuser Service');
    return this.user;
  }

  setUser(user: string) {
    console.log(user + ' setUser');
    const u: any = {'user' : user};
    this.user = u;
    console.log(this.user);
  }

  injectUser(angularElementtag, user) {
    const tagname = document.querySelector(angularElementtag);
    if (tagname != null) {
      tagname.user = user;
      tagname.addEventListener('myUser', (event: CustomEvent) => {
        this.setUser(event.detail.user);
        this.pushUser(event.detail.user);
      });
    }
  }

  pushData(value) {
    console.log('pushData called');
    this.pushDataSource.next((value));
  }

  pushUser(value) {
    console.log('pushUser called');
    this.userSource.next(value);
  }
}
