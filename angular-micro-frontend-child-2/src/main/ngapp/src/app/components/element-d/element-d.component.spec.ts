import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementDComponent } from './element-d.component';

describe('ElementBComponent', () => {
  let component: ElementDComponent;
  let fixture: ComponentFixture<ElementDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
