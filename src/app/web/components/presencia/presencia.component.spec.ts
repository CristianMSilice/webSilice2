import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NosotrosPresenciaComponent } from './presencia.component';

describe('NosotrosPresenciaComponent', () => {
  let component: NosotrosPresenciaComponent;
  let fixture: ComponentFixture<NosotrosPresenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NosotrosPresenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NosotrosPresenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
