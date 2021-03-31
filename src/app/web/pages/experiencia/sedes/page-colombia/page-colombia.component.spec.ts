import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageColombiaComponent } from './page-colombia.component';

describe('PageColombiaComponent', () => {
  let component: PageColombiaComponent;
  let fixture: ComponentFixture<PageColombiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageColombiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageColombiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
