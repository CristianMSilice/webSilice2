import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEspanaComponent } from './page-espana.component';

describe('PageEspanaComponent', () => {
  let component: PageEspanaComponent;
  let fixture: ComponentFixture<PageEspanaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageEspanaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageEspanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
