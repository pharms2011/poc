import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Subscription} from 'rxjs';
import {ChunkService} from '../../services/chunk.service';
import {DomSanitizer} from '@angular/platform-browser';
import {CommonService} from '../../services/common.service';

@Component({
  selector: 'app-element-c',
  templateUrl: './element-c.component.html',
  styleUrls: ['./element-c.component.scss']
})
export class ElementCComponent implements OnInit, OnDestroy {

  userName = '';
  userSubscription: Subscription;
  counterValue = 0;

  constructor(private chunkService: ChunkService, private domSanitizer: DomSanitizer, private commonService: CommonService) {}
  @Output() counterChange = new EventEmitter();

  @Input()
  set counter(val: number) {
    this.counterValue = val;
    this.counterChange.emit(this.counterValue);
    console.log(val + ' from setter');
  }
  get counter(): number {
    return this.counterValue;
  }
   ngOnInit() {
    this.userSubscription = this.commonService.userData.subscribe((user: string) => {
      this.userName = user;
    });
  }
  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
  decrement() {
    this.counter--;
    console.log(this.counter + 'from decrement');
  }
  increment() {
    this.counter++;
    console.log(this.counter + 'from increment');
  }
}
