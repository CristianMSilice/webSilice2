import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { cTrayectoriaComponent } from './trayectoria.component';

describe('TrayectoriaComponent', () => {
  let component: cTrayectoriaComponent;
  let fixture: ComponentFixture<cTrayectoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ cTrayectoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(cTrayectoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
