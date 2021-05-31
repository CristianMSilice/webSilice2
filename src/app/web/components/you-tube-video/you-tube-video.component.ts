import { Component, Input, AfterViewInit, Output, EventEmitter, } from '@angular/core';
import { SiblingsService } from '../../services/siblings.service';

@Component({
  selector: 'you-tube-video',
  templateUrl: './you-tube-video.component.html',
  styleUrls: ['./you-tube-video.component.scss']
})
export class YouTubeVideoComponent implements AfterViewInit {
  private static iniciado = false;
  public static id:number =0;

  YouTubeVideoComponent=YouTubeVideoComponent;
  @Input() video: String;
  @Input() width : string;
  @Input() height : string;
  @Output() getIdEvent = new EventEmitter<number>();
  public player: any;
  public reframed: Boolean = false;
  public videoEvent = undefined;
  id:number;
  youtubeSubscriber: any;
  constructor(private siblingsService: SiblingsService) {
    YouTubeVideoComponent.id++;
    this.id=YouTubeVideoComponent.id;
    
   }

  
  ngAfterViewInit() {
    setTimeout(() => {
      this.youtubeSubscriber = this.siblingsService.youtubeReady$.subscribe(ready=>{
        if (! ready) return;
        this.getIdEvent.emit(this.id);
        this.initVideo();
        this.reviewIfStartVideo();
      })
    });
    
    // if (!YouTubeVideoComponent.iniciado) {
    //   window['onYouTubeIframeAPIReady'] = () => this.initVideo();
    //   YouTubeVideoComponent.iniciado = true;
    // }
    // else {
    //   console.log(this.id);
    //   this.initVideo();
    // }
    
  }
  reviewIfStartVideo() {
    this.siblingsService.showModal$.subscribe((data) => {
      if(data.id != this.id)return;
      if (this.videoEvent) {
        (data.value)
          ? this.videoEvent.target.playVideo()
          : this.videoEvent.target.pauseVideo();
      }

    })
  }
  initVideo() {
    this.reframed = false;
    if( ! window['YT']) return setTimeout(()=>{this.initVideo()}, 1000);
    window['YT'].ready(() => {
      this.player = new window['YT'].Player(`${this.video}_${this.id}`, {
        videoId: this.video,
        width: this.width,
        height: this.height,
        events: {
          'onError': this.onPlayerError.bind(this),
          'onReady': this.onPlayerReady.bind(this),
        }
      });
    })
  }

  onPlayerReady(event) {
    this.videoEvent = event;
  }

  onPlayerError(event) {
    console.log(event)
    console.log('onPlayerError')
  }

}
