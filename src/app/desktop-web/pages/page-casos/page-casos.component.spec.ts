import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCasosComponent } from './page-casos.component';

describe('PageCasosComponent', () => {
  let component: PageCasosComponent;
  let fixture: ComponentFixture<PageCasosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageCasosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCasosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
