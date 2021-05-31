import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NosotrosEquipoComponent } from './equipo.component';

describe('NosotrosEquipoComponent', () => {
  let component: NosotrosEquipoComponent;
  let fixture: ComponentFixture<NosotrosEquipoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NosotrosEquipoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NosotrosEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
