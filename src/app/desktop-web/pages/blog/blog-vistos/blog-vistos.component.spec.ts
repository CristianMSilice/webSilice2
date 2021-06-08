import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogVistosComponent } from './blog-vistos.component';

describe('BlogVistosComponent', () => {
  let component: BlogVistosComponent;
  let fixture: ComponentFixture<BlogVistosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogVistosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogVistosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
