import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Noticia5Component } from './noticia5.component';

describe('Noticia5Component', () => {
  let component: Noticia5Component;
  let fixture: ComponentFixture<Noticia5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Noticia5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Noticia5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
