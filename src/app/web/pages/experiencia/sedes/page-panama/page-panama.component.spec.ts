import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePanamaComponent } from './page-panama.component';

describe('PagePanamaComponent', () => {
  let component: PagePanamaComponent;
  let fixture: ComponentFixture<PagePanamaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagePanamaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePanamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
