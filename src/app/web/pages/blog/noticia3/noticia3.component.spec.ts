import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Noticia3Component } from './noticia3.component';

describe('Noticia3Component', () => {
  let component: Noticia3Component;
  let fixture: ComponentFixture<Noticia3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Noticia3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Noticia3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
