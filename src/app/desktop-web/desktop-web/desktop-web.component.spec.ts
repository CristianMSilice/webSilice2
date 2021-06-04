import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopWebComponent } from './desktop-web.component';

describe('DesktopWebComponent', () => {
  let component: DesktopWebComponent;
  let fixture: ComponentFixture<DesktopWebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopWebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
