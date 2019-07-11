import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {GreetService} from '../../services/greet.service';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-element-a',
  templateUrl: './element-c.component.html',
  styleUrls: ['./element-c.component.scss']
})
export class ElementCComponent implements OnInit {
  greetings = null;
  userName = null;
  userSubscription: Subscription;

  constructor(private greetService: GreetService, private userService: UserService) { }

  ngOnInit() {
    this.greetings = this.greetService.greet() + ' from Angular element-c';
    this.userSubscription = this.userService.userEvent.subscribe((user: string) => {
      this.userName = user['user'];
      console.log('userName from element-c-' + this.userName);
    });
  }

}
