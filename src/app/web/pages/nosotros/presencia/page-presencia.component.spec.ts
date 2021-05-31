import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePresenciaComponent } from './page-presencia.component';

describe('PagePresenciaComponent', () => {
  let component: PagePresenciaComponent;
  let fixture: ComponentFixture<PagePresenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagePresenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePresenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
