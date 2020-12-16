import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmojiSiliceComponent } from './emoji-silice.component';

describe('EmojiSiliceComponent', () => {
  let component: EmojiSiliceComponent;
  let fixture: ComponentFixture<EmojiSiliceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmojiSiliceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmojiSiliceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
