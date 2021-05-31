import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPrincipalComponent } from './blog-principal.component';

describe('BlogPrincipalComponent', () => {
  let component: BlogPrincipalComponent;
  let fixture: ComponentFixture<BlogPrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogPrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
