import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ChunkService} from '../../services/chunk.service';
import {CommonService} from '../../services/common.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-element-a',
  templateUrl: './element-a.component.html',
  styleUrls: ['./element-a.component.scss']
})
export class ElementAComponent implements OnInit, AfterViewInit {

  // tslint:disable-next-line:variable-name
  element_a;

  constructor(private chunkService: ChunkService, private commonService: CommonService, private domSanitizer: DomSanitizer) { }

  ngOnInit() {
    this.element_a = this.domSanitizer.bypassSecurityTrustHtml('<app1-root></app1-root>');
  }

  ngAfterViewInit() {
    this.commonService.setTag('app1-root');
    this.commonService.pushData('app1-root');
  }

}
