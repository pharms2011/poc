import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {GreetService} from '../../services/greet.service';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-element-b',
  templateUrl: './element-d.component.html',
  styleUrls: ['./element-d.component.scss']
})
export class ElementDComponent implements OnInit, OnDestroy {

  gretings = null;
  userName = null;
  userSubscription: Subscription;

  constructor(private greetService: GreetService, private userService: UserService) { }

  onEnter(user: string) {
    const u = { 'user' : user.trim() };
    this.userService.setUser(u);
    this.userService.emitChangeInUser(u);
  }

  ngOnInit() {
    this.gretings = this.greetService.greet() + ' from Angular element-b';
    this.userSubscription = this.userService.userEvent.subscribe((user: string) => {
      this.userName = user['user'];
      console.log('userName from element-d-' + this.userName);
    });
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

}
