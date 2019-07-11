import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {GreetService} from '../../services/greet.service';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-element-a',
  templateUrl: './element-a.component.html',
  styleUrls: ['./element-a.component.scss']
})
export class ElementAComponent implements OnInit {
  greetings = null;
  userName = null;
  userSubscription: Subscription;

  constructor(private greetService: GreetService, private userService: UserService) { }

  ngOnInit() {
    this.greetings = this.greetService.greet() + ' from Angular element-a';
    this.userSubscription = this.userService.userEvent.subscribe((user: string) => {
      this.userName = user['user'];
      console.log('userName from element-a-' + this.userName);
    });
  }

}
