import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTarjetaComponent } from './new-tarjeta.component';

describe('NewTarjetaComponent', () => {
  let component: NewTarjetaComponent;
  let fixture: ComponentFixture<NewTarjetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTarjetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
