import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTrayectoriaComponent } from './page-trayectoria.component';

describe('PageTrayectoriaComponent', () => {
  let component: PageTrayectoriaComponent;
  let fixture: ComponentFixture<PageTrayectoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageTrayectoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTrayectoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
