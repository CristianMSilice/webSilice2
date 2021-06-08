import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YouTubeVideoComponent } from './you-tube-video.component';

describe('YouTubeVideoComponent', () => {
  let component: YouTubeVideoComponent;
  let fixture: ComponentFixture<YouTubeVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YouTubeVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YouTubeVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
