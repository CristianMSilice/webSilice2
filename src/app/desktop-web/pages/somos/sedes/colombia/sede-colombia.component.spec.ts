import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SedeColombiaComponent } from './sede-colombia.component';

describe('ColombiaComponent', () => {
  let component: SedeColombiaComponent;
  let fixture: ComponentFixture<SedeColombiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SedeColombiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SedeColombiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
