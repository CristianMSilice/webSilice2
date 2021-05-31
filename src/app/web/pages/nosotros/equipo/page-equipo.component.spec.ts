import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEquipoComponent } from './page-equipo.component';

describe('PageEquipoComponent', () => {
  let component: PageEquipoComponent;
  let fixture: ComponentFixture<PageEquipoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageEquipoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
