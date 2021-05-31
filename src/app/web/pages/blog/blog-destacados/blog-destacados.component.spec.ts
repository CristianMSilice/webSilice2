import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDestacadosComponent } from './blog-destacados.component';

describe('BlogDestacadosComponent', () => {
  let component: BlogDestacadosComponent;
  let fixture: ComponentFixture<BlogDestacadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogDestacadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogDestacadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
