import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Noticia4Component } from './noticia4.component';

describe('Noticia4Component', () => {
  let component: Noticia4Component;
  let fixture: ComponentFixture<Noticia4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Noticia4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Noticia4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
