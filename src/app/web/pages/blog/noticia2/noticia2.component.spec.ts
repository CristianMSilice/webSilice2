import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Noticia2Component } from './noticia2.component';

describe('Noticia2Component', () => {
  let component: Noticia2Component;
  let fixture: ComponentFixture<Noticia2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Noticia2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Noticia2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
