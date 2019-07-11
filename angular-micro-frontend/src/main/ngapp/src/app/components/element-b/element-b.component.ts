import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ChunkService} from '../../services/chunk.service';
import {CommonService} from '../../services/common.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-element-b',
  templateUrl: './element-b.component.html',
  styleUrls: ['./element-b.component.scss']
})
export class ElementBComponent implements OnInit, AfterViewInit {

  // tslint:disable-next-line:variable-name
  element_b;

  constructor(private chunkService: ChunkService, private commonService: CommonService, private domSanitizer: DomSanitizer) { }

  ngOnInit() {
    this.element_b = this.domSanitizer.bypassSecurityTrustHtml('<app2-root></app2-root>');
  }

  ngAfterViewInit() {
    this.commonService.setTag('app2-root');
    this.commonService.pushData('app2-root');
  }

}
