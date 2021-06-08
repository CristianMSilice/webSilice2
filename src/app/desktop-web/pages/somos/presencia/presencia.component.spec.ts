import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresenciaComponent } from './presencia.component';

describe('PresenciaComponent', () => {
  let component: PresenciaComponent;
  let fixture: ComponentFixture<PresenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
