import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSomosComponent } from './page-somos.component';

describe('PageSomosComponent', () => {
  let component: PageSomosComponent;
  let fixture: ComponentFixture<PageSomosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSomosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSomosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
