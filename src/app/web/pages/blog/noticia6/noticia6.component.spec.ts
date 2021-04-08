import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Noticia6Component } from './noticia6.component';

describe('Noticia6Component', () => {
  let component: Noticia6Component;
  let fixture: ComponentFixture<Noticia6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Noticia6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Noticia6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
