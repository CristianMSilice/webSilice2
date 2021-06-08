import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSolucionesComponent } from './page-soluciones.component';

describe('PageSolucionesComponent', () => {
  let component: PageSolucionesComponent;
  let fixture: ComponentFixture<PageSolucionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSolucionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSolucionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
