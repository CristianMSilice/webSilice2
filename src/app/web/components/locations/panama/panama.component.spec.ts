import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanamaComponent } from './panama.component';

describe('PanamaComponent', () => {
  let component: PanamaComponent;
  let fixture: ComponentFixture<PanamaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanamaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
