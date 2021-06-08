import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogGeneralComponent } from './blog-general.component';

describe('BlogGeneralComponent', () => {
  let component: BlogGeneralComponent;
  let fixture: ComponentFixture<BlogGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
