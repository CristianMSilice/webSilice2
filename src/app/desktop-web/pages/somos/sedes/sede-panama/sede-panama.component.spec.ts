import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SedePanamaComponent } from './sede-panama.component';

describe('SedePanamaComponent', () => {
  let component: SedePanamaComponent;
  let fixture: ComponentFixture<SedePanamaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SedePanamaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SedePanamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
