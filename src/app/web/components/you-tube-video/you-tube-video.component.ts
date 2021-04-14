import { Component, Input, AfterViewInit } from '@angular/core';
import { SiblingsService } from '../../Services/siblings.service';

@Component({
  selector: 'you-tube-video',
  templateUrl: './you-tube-video.component.html',
  styleUrls: ['./you-tube-video.component.scss']
})
export class YouTubeVideoComponent implements AfterViewInit {
  private static iniciado = false;
  YouTubeVideoComponent=YouTubeVideoComponent;
  @Input() video: String;
  public static id:number =0;
  public player: any;
  public reframed: Boolean = false;
  public videoEvent = undefined;
  size = { width: window.innerWidth * 0.9, height: window.innerHeight * 0.9 }
  constructor(private siblingsService: SiblingsService) {
    YouTubeVideoComponent.id++;
   }

  ngAfterViewInit() {
    if (!YouTubeVideoComponent.iniciado) {
      window['onYouTubeIframeAPIReady'] = () => this.initVideo();
      YouTubeVideoComponent.iniciado = true;
    }
    else {
      this.initVideo();
    }
    this.reviewIfStartVideo();
  }
  reviewIfStartVideo() {
    this.siblingsService.showModal$.subscribe(show => {
      console.log(this.videoEvent)
      if (this.videoEvent) {
        (show)
          ? this.videoEvent.target.playVideo()
          : this.videoEvent.target.pauseVideo();
      }

    })
  }
  initVideo() {
    this.reframed = false;
    window['YT'].ready(() => {
      this.player = new window['YT'].Player(`${this.video}_${YouTubeVideoComponent.id}`, {
        videoId: this.video,
        events: {
          'onError': this.onPlayerError.bind(this),
          'onReady': this.onPlayerReady.bind(this),
        }
      });
    })
  }

  onPlayerReady(event) {
    console.log(event)
    this.videoEvent = event;
  }

  onPlayerError(event) {
    console.log(event)
    console.log('onPlayerError')
  }

}
