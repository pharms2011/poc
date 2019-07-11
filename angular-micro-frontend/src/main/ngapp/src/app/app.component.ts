import {ChangeDetectorRef, Component, NgZone, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {ChunkService} from './services/chunk.service';
import {CommonService} from './services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Angular Parent App';
  disable = true;
  counterValue = 5;
  userSubscription: Subscription;
  angularSelectorSubscription: Subscription;
  safeHTML: SafeHtml;
  user;
  constructor(private chunkService: ChunkService, private commonService: CommonService,
              private domSanitizer: DomSanitizer, private zone: NgZone, private cdrf: ChangeDetectorRef) {}

  injectUser() {
    this.userSubscription = this.commonService.userData.subscribe((user) => {
      const anyTag = this.commonService.getTag();
      if (user) {
        this.user = user;
      }
      if (anyTag) {
        this.injectElement(anyTag, this.getUser());
      }
    });
    this.angularSelectorSubscription = this.commonService.pushedData.subscribe((angularSelector: string) => {
      const user = this.getUser();
      if (angularSelector && user) {
        this.injectElement(angularSelector, user);
      }
    });
  }

  ngOnInit() {
    this.injectUser();
    this.chunkService.loadScriptApp_one();
    this.chunkService.loadScriptApp_two();
    this.chunkService.loadScriptApp_three();
  }

  onEnter(user: string) {
    this.commonService.setUser(user.trim());
    this.commonService.pushUser(user.trim());
  }

  getUser() {
    return this.commonService.getUser();
  }

  injectElement(angularSelector, user) {
    this.commonService.injectUser(angularSelector, user);
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
    this.angularSelectorSubscription.unsubscribe();
  }
}
