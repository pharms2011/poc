import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementCComponent } from './element-c.component';

describe('ElementCComponent', () => {
  let component: ElementCComponent;
  let fixture: ComponentFixture<ElementCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
