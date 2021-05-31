import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NosotrosInfografiaComponent } from './infografia.component';

describe('NosotrosInfografiaComponent', () => {
  let component: NosotrosInfografiaComponent;
  let fixture: ComponentFixture<NosotrosInfografiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NosotrosInfografiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NosotrosInfografiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
