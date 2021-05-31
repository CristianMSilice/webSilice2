import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NosotrosTrayectoriaComponent } from './trayectoria.component';

describe('NosotrosTrayectoriaComponent', () => {
  let component: NosotrosTrayectoriaComponent;
  let fixture: ComponentFixture<NosotrosTrayectoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NosotrosTrayectoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NosotrosTrayectoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
