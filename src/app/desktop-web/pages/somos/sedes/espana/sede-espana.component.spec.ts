import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {sedeEspanaComponent  } from './sede-espana.component';

describe('EspanaComponent', () => {
  let component: sedeEspanaComponent;
  let fixture: ComponentFixture<sedeEspanaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ sedeEspanaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(sedeEspanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
