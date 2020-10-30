import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatAdjuntosComponent } from './chat-adjuntos.component';

describe('ChatAdjuntosComponent', () => {
  let component: ChatAdjuntosComponent;
  let fixture: ComponentFixture<ChatAdjuntosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatAdjuntosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatAdjuntosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
