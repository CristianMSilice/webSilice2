import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NosotrosSomosComponent } from './somos.component';

describe('NosotrosSomosComponent', () => {
  let component: NosotrosSomosComponent;
  let fixture: ComponentFixture<NosotrosSomosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NosotrosSomosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NosotrosSomosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
