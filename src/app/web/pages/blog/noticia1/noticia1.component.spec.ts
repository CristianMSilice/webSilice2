import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Noticia1Component } from './noticia1.component';

describe('Noticia1Component', () => {
  let component: Noticia1Component;
  let fixture: ComponentFixture<Noticia1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Noticia1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Noticia1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
